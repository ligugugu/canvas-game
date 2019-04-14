<?php
/* 步骤1：验证图片安全性、类型、大小(is_uploaded_file该函数可以用于确保恶意的用户无法欺骗脚本去访问本不能访问的文件)
       2 move_uploaded_file 将临时文件($_FILES['upfile']['tmp_name'])移动到文件夹目录
       3 创建背景画布用白色填充得到空白的背景图$bgImage，然后创建一个上传的图片画布$tagImage
       4 imagecopyresized 拷贝（$tagImage）部分图像到背景图($bgImage)并调整大小
       5 imagecreatefrompng 创建透明遮罩层$modalImage，将$modalImage imagecopy到背景图上背景图上$bgImage
       6 给$bgImage分配一个黑色,并用imagettftext文字填充
       7.以jpeg格式将图像输出到文件
        imagecopy('a','b') 表示b拷贝到a
 * */
if($_SERVER['REQUEST_METHOD'] == 'POST')
{
     mb_internal_encoding("UTF-8");
    //上传文件类型列表
     $uptypes = array('image/jpeg');
    //上传文件大小限制, 单位BYTE 10M
    $max_file_size = 1024*1024*10;
    //上传文件路径
    $destination_folder = "upload/";
	$file = $_FILES["upfile"];
	/*临时文件*/
    $filename = $file["tmp_name"];
	/* 函数判断指定的文件是否是通过 HTTP POST 上传的,是否存在文件*/
    if (!is_uploaded_file($filename))
    {
        echo json_encode(array('status'=>'fail','msg'=>'文件不存在!'));
        exit;
    }
    /*检查文件类型*/
    if(!in_array($file["type"], $uptypes))
    {
        echo json_encode(array('status'=>'fail','msg'=>'请上传jpg格式的图片!'));
        exit;
    }
   /* 检查文件大小*/
	if($max_file_size < $file["size"])
	{
        echo json_encode(array('status'=>'fail','msg'=>'图片大小太大!'));
        exit;
	}
    if(!file_exists($destination_folder)){
        mkdir($destination_folder);//创建目录
    }
    //获取图片的宽高
    $image_size = getimagesize($filename);
    /*获取文件的拓展名*/
    /*
    //数组的形式返回文件路径的信息
    $pinfo = pathinfo($file["name"]);
    //获取文件的后缀(拓展名)
    $ftype = $pinfo['extension'];
    */
    $guid = create_guid();
    $destination = $destination_folder.$guid.".jpg";
	if(!move_uploaded_file($filename, $destination))
   {
        echo json_encode(array('status'=>'fail','msg'=>'移动文件出错'));
        exit;
   }
  	//创建背景图(真彩图像资源)
	$bgImage = imagecreatetruecolor(750,1050);
	//给图像分配一个颜色(白色)
	$white = imagecolorallocate($bgImage,255,255,255);
	/*白色填充背景*/
	imagefill($bgImage, 0, 0, $white);
	switch($file["type"]){
		case 'image/jpeg':
            /*创建一块画布,并从 JPEG 文件或 URL 地址载入一副图像*/
             $tagImage = imagecreatefromjpeg($destination);
             break;
	}
	//缩放比例
	$h = 750;
	$w = 1050;
	$flag = 1;
	//获取当前文件的宽高比例
    $tag_w = $image_size[0];
    $tag_h = $image_size[1];
    //下面是php的伪代码
    $exif = exif_read_data($destination);//获取exif信息
    //旋转
    if(isset($exif['Orientation'])){
        switch($exif['Orientation']){
            case 8:
                $tagImage = imagerotate($tagImage,90,0);
                $tag_flag = $tag_w;
                $tag_w = $tag_h;
                $tag_h = $tag_flag;
                break;
            case 3:
                $tagImage = imagerotate($tagImage,180,0);
                break;
            case 6:
                $tagImage = imagerotate($tagImage,-90,0);
                $tag_flag = $tag_w;
                $tag_w = $tag_h;
                $tag_h = $tag_flag;
                break;
        }
    }
//    if($tag_w >= $tag_h){ //横图
//        $rate = 640 / $tag_w ;
//        $over = (700 - $tag_h * $rate) / 2;
//        imagecopyresized($bgImage,$tagImage,0,$over,0,0, 640,$rate*$tag_h, $tag_w,$tag_h);
//    }else{
//        $rate = 960 / $tag_h ;
//        $over = (640- $tag_w * $rate) / 2;
//        imagecopyresized($bgImage,$tagImage,$over,0,0,0, $tag_w*$rate,960, $tag_w,$tag_h);
//    }
    if($tag_w > $tag_h){ //横图
        $rate = 1050 / $tag_h ;
        $over = (750- $tag_w * $rate) / 2;
        imagecopyresized($bgImage,$tagImage,$over,0,0,0, $tag_w*$rate,1050, $tag_w,$tag_h);
    }else{
        $rate = 750 / $tag_w ;
        $over = (800 - $tag_h * $rate) / 2;
        imagecopyresized($bgImage,$tagImage,0,$over,0,0, 750,$rate*$tag_h, $tag_w,$tag_h);
    }
    //imagecopyresized($bgImage,$tagImage,0,0,0,$y, $tag_w,1334, $tag_w,$tag_h);
    $modalImage = imagecreatefrompng("img/border.png");
    imagecopy($bgImage,$modalImage,0,0,0,0,750,1050);
    //图片缩放
    $randp = imagecreatefrompng('img/'.$_POST['randp'].'.png');
    $left_right = $_POST['left_right'];
    if($left_right==1){
        imagecopy($bgImage,$randp,0,200,0,0,200,602);
    }else{
        imagecopy($bgImage,$randp,550,120,0,0,200,602);
    }
//    $name = $_POST['uname'];
//    $font = 'wlyh.ttf';
//    $content = autowrap(18,0,$font,$name,550);
//    $black = imagecolorallocate($bgImage,0,0,0);
//    imagettftext($bgImage, 18, 0, 30,910, $black, $font,$content);
    switch($file["type"]){
        case 'image/jpeg':
            /*以jpeg格式将图像输出到浏览器或文件*/
            imagejpeg($bgImage,$destination);
            break;
    }
    //销毁对象
	imagedestroy($bgImage);
	imagedestroy($tagImage);
	$imgurl = $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['SERVER_NAME'].'/mothersday/'.$destination;
    $jumpurl = $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['SERVER_NAME'].'/mothersday/share.php?imgurl='.$imgurl;
    echo json_encode(array('status'=>'success','msg'=>'','imgurl'=>$imgurl,'jumpurl'=>$jumpurl));
    exit;
}

function autowrap($fontsize, $angle, $fontface, $string, $width) {    
    // 参数分别是 字体大小, 角度, 字体名称, 字符串, 预设宽度
    $content = "";    // 将字符串拆分成一个个单字 保存到数组 letter 中
    preg_match_all("/./u", $string, $arr);
    $letter = $arr[0];
    foreach($letter as $l) {
        $teststr = $content.$l;
        $testbox = imagettfbbox($fontsize, $angle, $fontface, $teststr);
        if (($testbox[2] > $width) && ($content !== "")) {
        $content .= PHP_EOL;
        }
        $content .= $l;
    }
    return $content;
}

function create_guid(){
    if (function_exists('com_create_guid')){
        return com_create_guid();
    }else{
        $charid = strtoupper(md5(uniqid(mt_rand(), true)));
        $hyphen = chr(45);
        $uuid = substr($charid, 0, 8).$hyphen
            .substr($charid, 8, 4).$hyphen
            .substr($charid,12, 4).$hyphen
            .substr($charid,16, 4).$hyphen
            .substr($charid,20,12);
        return $uuid;
    }
}
?>