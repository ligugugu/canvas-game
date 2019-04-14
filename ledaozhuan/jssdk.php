<?php
class JSSDK {
    private $appId;
    private $db;
    private $oauth;
    public function __construct($appId) {
        $this->appId = $appId;
        include 'db/pdo.php';
        $this->db = new DB('mysql');
        $this->db->query("set names utf8" );
        $sql = "select * from ld_wx_oauth where appId='".$this->appId."'";
        $this->oauth = $this->db->query($sql);
    }

    public function getSignPackage() {
        $jsapiTicket = $this->getJsApiTicket();
        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
        $url = $protocol.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
        $timestamp = time();
        $nonceStr = $this->createNonceStr();
        // 这里参数的顺序要按照 key 值 ASCII 码升序排序
        $string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";
        $signature = sha1($string);
        $signPackage = array(
            "appId"     =>  $this->appId,
            "nonceStr"  => $nonceStr,
            "timestamp" => $timestamp,
            "url"       => $url,
            "signature" => $signature,
            "rawString" => $string
        );
        return $signPackage;
    }

    private function createNonceStr($length = 16) {
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        $str = "";
        for ($i = 0; $i < $length; $i++) {
            $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
        }
        return $str;
    }

    private function getJsApiTicket() {
        if ($this->oauth[0]['ticketExpireTime'] < time()) {
            $accessToken = $this->getAccessToken();
            if($accessToken!='error'){
                // 如果是企业号用以下 URL 获取 ticket
                // $url = "https://qyapi.weixin.qq.com/cgi-bin/get_jsapi_ticket?access_token=$accessToken";
                $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=$accessToken";
                $res = json_decode($this->httpGet($url));
                $ticket = $res->ticket;
                if ($ticket) {
                    $ticketExpireTime = time()+7000;
                    $jsapiTicket = $ticket;
                    $update_sql = "update ld_wx_oauth set ticketExpireTime=".$ticketExpireTime.",jsapiTicket ='".$jsapiTicket."' where appId='".$this->appId."'";
                    $result = $this->db->exec($update_sql);
                }
            }else{
                $ticket = '';
            }
        } else {
            $ticket = $this->oauth[0]['jsapiTicket'];
        }
        return $ticket;
    }

    private function getAccessToken() {
        // access_token 应该全局存储与更新，以下代码以写入到文件中做示例
        if ($this->oauth[0]['accessExpireTime'] < time()) {
            // 如果是企业号用以下URL获取access_token
            // $url = "https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=$this->appId&corpsecret=$this->appSecret";
            $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$this->appId&secret=".$this->oauth[0]['appSecret'];
            $res = json_decode($this->httpGet($url));
            if(isset($res->errcode)){
                $errcode = $res->errcode;
                $errmsg = $res->errmsg;
                $createTime = time();
                $log_sql = "insert into ld_share_errlog(`id`,`errcode`,`errmsg`,`createTime`) VALUES(null,$errcode,'$errmsg',$createTime)";
                $log_ins = $this->db->exec($log_sql);
                return 'error';
            }
            $access_token = $res->access_token;
            if ($access_token) {
                $accessExpireTime = time()+7000;
                $update_sql = "update ld_wx_oauth set accessExpireTime=".$accessExpireTime.",accessToken ='".$access_token."' where appId='".$this->appId."'";
                $result = $this->db->exec($update_sql);
            }
        } else {
            $access_token = $this->oauth[0]['accessToken'];
        }
        return $access_token;
    }

    private function httpGet($url) {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_TIMEOUT, 500);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_URL, $url);
        $res = curl_exec($curl);
        curl_close($curl);
        return $res;
    }
}
