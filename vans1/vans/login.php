<?php
	header("Content-type:text/html;charset-utf-8");
	$userPhone=$_POST["userPhone"];
	$userPwd=$_POST["userPwd"];
	$conn = mysql_connect("localhost","root","root");
	if($conn){
		 
		//2.选择数据库 
		mysql_select_db("diao");
	}
	$result = mysql_query("select * from useraccount where userPhone='$userPhone' AND  userPwd = '$userPwd'",$conn); 
	$rows = mysql_num_rows($result);
 
	if($rows==1){
		// mysql_query("insert into useraccount value ('$userNameFirst','$userName','$userPhone','$userSex','$userPwd')",$conn);
		echo "1";
	}else{
	   echo "0";	
	}
	mysql_close($conn);
	 
?>