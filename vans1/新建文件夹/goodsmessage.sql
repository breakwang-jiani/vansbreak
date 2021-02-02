# Host: localhost  (Version: 5.5.53)
# Date: 2021-02-01 02:35:59
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsmessage"
#

DROP TABLE IF EXISTS `goodsmessage`;
CREATE TABLE `goodsmessage` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsurl` varchar(255) DEFAULT NULL,
  `goodstag` varchar(255) DEFAULT NULL,
  `googstitle` varchar(255) DEFAULT NULL,
  `goodsh2` varchar(255) DEFAULT NULL,
  `shopprice` varchar(255) DEFAULT NULL,
  `goodsstro` varchar(255) DEFAULT NULL,
  `goodsNumber` varchar(255) DEFAULT NULL,
  `goodsMoney` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

#
# Data for table "goodsmessage"
#

/*!40000 ALTER TABLE `goodsmessage` DISABLE KEYS */;
INSERT INTO `goodsmessage` VALUES (1,'img/detailimg/0.webp','#限量版','全新 迪奥锁妆气垫*DIORMANIA金色限量版 ','超轻薄 超遮瑕 超水润 超长持妆 柔雾哑光妆效 超纤薄外盒 饰以浮雕高订经典花纹','640','全新迪奥锁妆气垫*DIORMANIA金色限量版，迪奥明星气垫粉底，搭配纤薄外盒，饰以DIOR迪奥高订浮雕手袋同款Oblique花纹，复古摩登，再度诠释时尚与优雅。打造24小时超遮瑕**、24小时超水润***底妆，持久柔雾哑光妆效。底妆无瑕不假面，清透舒适、柔润匀净。肌肤更显细腻光泽，应对不同环境，精致底妆持久在线，魅力无休。','3','3200'),(2,'img/detailimg/1.webp','#限量版','小号 Book Tote 手袋','米色Dior Hibiscus刺绣帆布','26500','这款 Book Tote 手袋灵感来自女装创意总监玛丽亚·嘉茜娅·蔻丽 (Maria Grazia Chiuri)，是体现 Dior 审美的主打产品。小号款式，多色 Dior Hibiscus 图案刺绣以金属光泽线点缀，呼应本季系列的普利亚田园风情主题。正面饰以“Christian Dior”标志，彰显 Dior 标志性的精湛工艺。可与该系列其他 Dior Hibiscus 图案单品搭配。','8','159000'),(3,'img/detailimg/2.webp','#限量版','Dior Hibiscus手链','红色棉质和涂漆、金色饰面金属','3100','这款 Diorelita 手链精美优雅。采用红色棉质面料精心制作，饰以红色和金色涂漆芙蓉花和“CD”吊饰。精巧纤细，时尚百搭，可单独佩戴或与其他手链叠搭。','2','3100'),(4,'img/detailimg/3.webp','#限量版','DIOR AND SHAWN 马鞍包','白色粒面牛皮革牛头造型装饰','29000','这款马鞍包来自 Dior 与加州设计师 Shawn Stussy 携手打造的艺术家合作系列。采用白色粒面牛皮革精心制作，正面饰以 DIOR AND SHAWN 标志和该系列标志性的牛头造型装饰。牛头造型装饰可以拆卸，为搭配提供更多可能。标志性的马鞍包造型设计，搭配磁性翻盖和隐藏拉链开合。搭配可调节的“Christian Dior”标志提花肩带，可肩背或斜挎。与各式休闲造型相得益彰，可轻松搭配其他 DIOR AND SHAWN 系列单品。','10',NULL),(5,'img/detailimg/4.webp','#限量版#新品','迪奥小姐花漾淡香氛 ','新春限量版','1360','DIOR迪奥倾情打造新春限量版迪奥小姐花漾淡香氛礼盒，明快亮红色调，饰以璨金色花漾图案，邀您共启花漾新一年。','30','40800'),(6,'img/detailimg/5.webp','#限量版','迪奥烈艳蓝金唇膏 花漾星年限量版套装* ','5款精选明星色号  唇膏替换芯供选购  高订色泽 舒悦持妆','1750','2021新年之际，迪奥呈献花漾星年限量版唇膏套装*。高订藤格纹装饰新年红运手包，内含5款全新迪奥烈艳蓝金唇膏，替换芯供选购。高订色泽妆点双唇，悦启花漾星年，尽诉对明媚未来的向往。','11','19250');
/*!40000 ALTER TABLE `goodsmessage` ENABLE KEYS */;
