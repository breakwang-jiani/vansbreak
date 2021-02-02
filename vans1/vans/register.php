<?php
	header("Content-type:text/html;charset-utf-8");
	$userNameFirst=$_POST["userNameFirst"];
	$userName=$_POST["userName"];
	$userPhone=$_POST["userPhone"];
	$userSex=$_POST["userSex"];
	$userPwd=$_POST["userPwd"];
	$conn = mysql_connect("localhost","root","root");
	if($conn){
		 
		//2.选择数据库 
		mysql_select_db("diao");
	}
	$result = mysql_query("select * from useraccount where userPhone = '$userPhone'",$conn);
	$rows = mysql_num_rows($result);
	if($rows==0){
		mysql_query("insert into useraccount value ('$userNameFirst','$userName','$userPhone','$userSex','$userPwd')",$conn);
		echo "1";
	}else{
	   echo "0";	
	}
	mysql_close($conn);
	 
?>