# Host: localhost  (Version: 5.5.53)
# Date: 2021-01-29 23:38:02
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodlist"
#

DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bigbigimg` varchar(255) NOT NULL DEFAULT '',
  `xinghao` varchar(255) NOT NULL DEFAULT '',
  `pinpai` varchar(255) NOT NULL DEFAULT '',
  `bianhao` varchar(255) DEFAULT NULL,
  `goodsid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

#
# Data for table "goodlist"
#

/*!40000 ALTER TABLE `goodlist` DISABLE KEYS */;
INSERT INTO `goodlist` VALUES (1,'./img/bigbigimg1.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55229',1),(2,'./img/bigbigimg2.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55230',2),(3,'./img/bigbigimg3.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55231',3),(4,'./img/bigbigimg4.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55232',4),(5,'./img/bigbigimg5.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55233',5),(6,'./img/bigbigimg6.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55234',6),(7,'./img/bigbigimg7.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55235',7),(8,'./img/bigbigimg8.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55236',8),(9,'./img/bigbigimg9.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55237',9),(10,'./img/bigbigimg10.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55238',10),(11,'./img/bigbigimg11.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55239',11),(12,'./img/bigbigimg12.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55240',12),(13,'./img/bigbigimg13.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55241',13),(14,'./img/bigbigimg14.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55242',14),(15,'./img/bigbigimg15.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55243',15),(16,'./img/bigbigimg16.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55244',16),(17,'./img/bigbigimg17.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55245',17),(18,'./img/bigbigimg18.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55246',18),(19,'./img/bigbigimg19.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55247',19),(20,'./img/bigbigimg20.jpg','型号：M027.407.16.101.00','品牌：美度','编号：55248',20);
/*!40000 ALTER TABLE `goodlist` ENABLE KEYS */;

#
# Structure for table "goodsnum"
#

DROP TABLE IF EXISTS `goodsnum`;
CREATE TABLE `goodsnum` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodimg` varchar(255) NOT NULL DEFAULT '',
  `bgimg` varchar(255) NOT NULL DEFAULT '',
  `money` varchar(255) NOT NULL DEFAULT '',
  `nummonwy` varchar(255) NOT NULL DEFAULT '',
  `newmoney` varchar(255) NOT NULL DEFAULT '',
  `oldmoney` varchar(255) NOT NULL DEFAULT '',
  `text` varchar(255) NOT NULL DEFAULT '',
  `newtext` varchar(255) DEFAULT NULL,
  `xiaoliang` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

#
# Data for table "goodsnum"
#

/*!40000 ALTER TABLE `goodsnum` DISABLE KEYS */;
INSERT INTO `goodsnum` VALUES (1,'./img/goodsbiao1.jpg','./img/goodsshou1.png','￥6,150','6150','￥658.3','￥7900','美度MIDO-完美系列 M8340.4.B1.11 机械男表','四十周年典藏系列纪念','销量648'),(2,'./img/goodsbiao2.jpg','./img/goodsshou2.png','￥4,880','4880','￥525','￥6300','美度MIDO-完美系列 M8340.4.B1.11 机械男表',NULL,'销量648'),(3,'./img/goodsbiao3.jpg','./img/goodsshou1.png','￥4,390','4390','￥475','￥5700','美度MIDO-完美系列 M8340.4.B1.11 机械男表','四十周年典藏系列纪念','销量648'),(4,'./img/goodsbiao4.jpg','./img/goodsshou2.png','￥5,850','5850','￥633.3','￥7600','美度MIDO-完美系列 M8340.4.B1.11 机械男表',NULL,'销量648'),(5,'./img/goodsbiao5.jpg','./img/goodsshou1.png','￥4,799','4799','￥525','￥6300','美度MIDO-完美系列 M8340.4.B1.11 机械男表','四十周年典藏系列纪念','销量648'),(6,'./img/goodsbiao6.jpg','./img/goodsshou2.png','￥6,440','6440','￥691.7','￥8300','美度MIDO-完美系列 M8340.4.B1.11 机械男表',NULL,'销量648'),(7,'./img/goodsbiao7.jpg','./img/goodsshou1.png','￥7,120','7120','￥766.7','￥9200','美度MIDO-完美系列 M8340.4.B1.11 机械男表','四十周年典藏系列纪念','销量648'),(8,'./img/goodsbiao8.jpg','./img/goodsshou2.png','￥5,850','5850','￥633.3','￥7600','美度MIDO-完美系列 M8340.4.B1.11 机械男表',NULL,'销量648'),(9,'./img/goodsbiao9.jpg','./img/goodsshou1.png','￥8,390','8390','￥900','￥10800','美度MIDO-完美系列 M8340.4.B1.11 机械男表',NULL,'销量648'),(10,'./img/goodsbiao10.jpg','./img/goodsshou2.png','￥4,980','4980','￥533.3','￥6400','美度MIDO-完美系列 M8340.4.B1.11 机械男表','四十周年典藏系列纪念','销量648'),(11,'./img/goodsbiao11.jpg','./img/goodsshou1.png','￥4,980','4980','￥533.3','￥6400','美度MIDO-完美系列 M8340.4.B1.11 机械男表',NULL,'销量648'),(12,'./img/goodsbiao12.jpg','./img/goodsshou2.png','￥4,390','4390','￥475','￥5700','美度MIDO-完美系列 M8340.4.B1.11 机械男表',NULL,'销量648'),(13,'./img/goodsbiao13.jpg','./img/goodsshou1.png','￥5,850','5850','￥633.3','￥7600','美度MIDO-完美系列 M8340.4.B1.11 机械男表','四十周年典藏系列纪念','销量648'),(14,'./img/goodsbiao14.jpg','./img/goodsshou2.png','￥4,980','4980','￥533.3','￥6400','美度MIDO-完美系列 M8340.4.B1.11 机械男表',NULL,'销量648'),(15,'./img/goodsbiao15.jpg','./img/goodsshou1.png','￥4,680','4680','￥508.3','￥6100','美度MIDO-完美系列 M8340.4.B1.11 机械男表',NULL,'销量648'),(16,'./img/goodsbiao16.jpg','./img/goodsshou2.png','￥7,900','7900','￥850','￥10200','美度MIDO-完美系列 M8340.4.B1.11 机械男表','四十周年典藏系列纪念','销量648'),(17,'./img/goodsbiao17.jpg','./img/goodsshou1.png','￥7,700','7700','￥833.3','￥10000','美度MIDO-完美系列 M8340.4.B1.11 机械男表','四十周年典藏系列纪念','销量648'),(18,'./img/goodsbiao18.jpg','./img/goodsshou2.png','￥7,310','7310','￥791.7','￥9500','美度MIDO-完美系列 M8340.4.B1.11 机械男表','四十周年典藏系列纪念','销量648'),(19,'./img/goodsbiao19.jpg','./img/goodsshou1.png','￥4,980','4980','￥533.3','￥6400','美度MIDO-完美系列 M8340.4.B1.11 机械男表',NULL,'销量648'),(20,'./img/goodsbiao20.jpg','./img/goodsshou2.png','￥5,850','5850','￥633.3','￥7600','美度MIDO-完美系列 M8340.4.B1.11 机械男表','四十周年典藏系列纪念','销量648');
/*!40000 ALTER TABLE `goodsnum` ENABLE KEYS */;

#
# Structure for table "goumai"
#

DROP TABLE IF EXISTS `goumai`;
CREATE TABLE `goumai` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsimg` varchar(255) DEFAULT NULL,
  `goodname` varchar(255) NOT NULL DEFAULT '',
  `money` varchar(255) DEFAULT NULL,
  `data` varchar(255) NOT NULL DEFAULT '',
  `gouname` varchar(255) NOT NULL DEFAULT '',
  `fukuan` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

#
# Data for table "goumai"
#

/*!40000 ALTER TABLE `goumai` DISABLE KEYS */;
INSERT INTO `goumai` VALUES (1,'./img/goodsbiao3.jpg','美度MIDO-完美系列 M8340.4.B1.11 机械男表','4390','2021/1/28 上午10:57:15','尹传奇',''),(2,'./img/goodsbiao3.jpg','美度MIDO-完美系列 M8340.4.B1.11 机械男表','4390','2021/1/28 上午10:57:20','尹传奇',''),(3,'./img/goodsbiao7.jpg','美度MIDO-完美系列 M8340.4.B1.11 机械男表','7120','2021/1/28 下午4:00:08','尹传奇','');
/*!40000 ALTER TABLE `goumai` ENABLE KEYS */;

#
# Structure for table "gouwuchelist"
#

DROP TABLE IF EXISTS `gouwuchelist`;
CREATE TABLE `gouwuchelist` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `tupian` varchar(255) NOT NULL DEFAULT '',
  `foodname` varchar(255) NOT NULL DEFAULT '',
  `danjia` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "gouwuchelist"
#

/*!40000 ALTER TABLE `gouwuchelist` DISABLE KEYS */;
INSERT INTO `gouwuchelist` VALUES (1,'./img/goodsbiao3.jpg','美度MIDO-完美系列 M8340.4.B1.11 机械男表','5700');
/*!40000 ALTER TABLE `gouwuchelist` ENABLE KEYS */;

#
# Structure for table "photostu"
#

DROP TABLE IF EXISTS `photostu`;
CREATE TABLE `photostu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL DEFAULT '',
  `photo` varchar(255) NOT NULL DEFAULT '',
  `youbian` varchar(255) NOT NULL DEFAULT '',
  `threecity` varchar(255) NOT NULL DEFAULT '',
  `hoset` varchar(255) NOT NULL DEFAULT '',
  `shuliang` varchar(255) NOT NULL DEFAULT '',
  `huafei` varchar(255) NOT NULL DEFAULT '',
  `gouname` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

#
# Data for table "photostu"
#

/*!40000 ALTER TABLE `photostu` DISABLE KEYS */;
INSERT INTO `photostu` VALUES (1,'尹传奇','19991908192','711401','宁夏回族自治区-银川市-兴庆区','中国','1','5700','尹传奇'),(2,'尹传奇','19991908192','711401','宁夏回族自治区-银川市-兴庆区','中国','6','34200','尹传奇'),(3,'尹传奇','123456789','711401','宁夏回族自治区-银川市-兴庆区','中国','','','');
/*!40000 ALTER TABLE `photostu` ENABLE KEYS */;

#
# Structure for table "stu"
#

DROP TABLE IF EXISTS `stu`;
CREATE TABLE `stu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "stu"
#

/*!40000 ALTER TABLE `stu` DISABLE KEYS */;
INSERT INTO `stu` VALUES (1,'尹传奇','123456');
/*!40000 ALTER TABLE `stu` ENABLE KEYS */;
