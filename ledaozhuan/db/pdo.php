<?php

/*
 * Create by JimTse
 * 2015.06.11
 * Currently only adds support for sqlite and mysql.
 */
class DB {
	public $conn = null;
	function __construct($dbtype) {
		include 'pdo.conf.php';
		switch ($dbtype) {
			case 'sqlite' :
				$dbPath = 'sqlite:./' . $db ['sqlite'] ['dbPath'] . $db ['sqlite'] ['dbName'];
				try {
					$this->conn = new PDO ( $dbPath );
				} catch ( PDOException $e ) {
					echo 'Exception is:' . $e->getMessage ();
				}
				break;
			case 'mysql' :
				try {
					$this->conn = new PDO ( "{$db['mysql']['dbType']}:host={$db['mysql']['dbHost']};dbname={$db['mysql']['database']}", "{$db['mysql']['username']}", "{$db['mysql']['password']}", $db ['mysql'] ['ATTR_PERSISTENT'] );
				} catch ( PDOException $e ) {
					echo 'Exception is:' . $e->getMessage ();
				}
				break;
			default :
				die ( 'Can not connect the database ,check the first parameter!' );
		}
		return $this->conn;
	}
	
	// select
	function query($sql) {
		$result = array ();
		try {
			$sth = $this->conn->prepare ( $sql );
			$sth->execute ();
			$result = $sth->fetchAll ();
		} catch ( PDOException $e ) {
			echo 'Exception is:' . $e->getMessage ();
		}
		return $result;
	}
	
	// 查询总记录数
	// sql语句如 " select count(*) from xxtable"
	function count($tableName) {
		$result = 0;
		try {
			$sth = $this->conn->prepare ("SELECT COUNT(*) from ".$tableName);
			$sth->execute ();
			$vec = $sth->fetchAll ();
			
			$result = $vec[0][0];
		} catch ( PDOException $e ) {
			echo 'Exception is:' . $e->getMessage ();
		}
		return $result;
	}
	
	// add,update,delete执行操作
	function exec($sql) {
		$count = 0;
		try {
			$count = $this->conn->exec ( $sql );
		} catch ( PDOException $e ) {
			echo 'Exception is:' . $e->getMessage ();
		}
		return $count;
	}
	
	/**
	 * 提交事务
	 */
	function trans($array) {
		$count=0;
		try {
			$this->conn->beginTransaction ();
			foreach ( $array as $value ) {
				$count+=$this->conn->exec ( $value );
			}
			$this->conn->commit ();
		} catch ( PDOException $e ) {
			$this->conn->rollBack ();
			echo 'Exception is:' . $e->getMessage ();
		}
 		return $count;
	}
	
	// Close the database
	function closeDB() {
		$this->conn = null;
	}
	function __destruct() {
		$this->closeDB ();
	}
}
?>
