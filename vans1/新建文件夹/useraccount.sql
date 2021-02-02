# Host: localhost  (Version: 5.5.53)
# Date: 2021-02-01 02:36:11
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "useraccount"
#

DROP TABLE IF EXISTS `useraccount`;
CREATE TABLE `useraccount` (
  `userNameFirst` varchar(4) DEFAULT NULL,
  `userName` varchar(8) DEFAULT NULL,
  `userPhone` varchar(15) DEFAULT NULL,
  `userSex` varchar(10) DEFAULT NULL,
  `userPwd` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "useraccount"
#

/*!40000 ALTER TABLE `useraccount` DISABLE KEYS */;
INSERT INTO `useraccount` VALUES ('李','四','15929788888','先生','1234HHHHJ'),('张','三','15929782443','先生','1234dddd'),('红','王','15929766666','女士','12233DDDDD'),('李','四','15929783333','先生','LISI1234'),('小','明','15929788889','先生','1234ASDF');
/*!40000 ALTER TABLE `useraccount` ENABLE KEYS */;
