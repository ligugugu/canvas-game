<?php
date_default_timezone_set('Asia/Chongqing');
$db['sqlite']=array(
	'dbPath'=>'db/',
	'dbName'=>'user.db'
);

 $db['mysql'] = array(
	'dbType'	=> 'mysql',
	'dbHost' => 'rm-wz969znukf41cz4ju.mysql.rds.aliyuncs.com',
	'username' => 'weblink',
	'password' => 'gZLaM2RYnfK86v37',
	'database' => 'h5_db',
	'ATTR_PERSISTENT'=>array(PDO::ATTR_PERSISTENT => true)
);
 
?>
