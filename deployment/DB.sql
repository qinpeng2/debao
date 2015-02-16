-- MySQL dump 10.13  Distrib 5.6.17, for Win64 (x86_64)
--
-- Host: localhost    Database: defiles
-- ------------------------------------------------------
-- Server version	5.6.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `CategoryID` int(11) NOT NULL AUTO_INCREMENT,
  `CategoryName` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `Root` bit(1) NOT NULL,
  `ParentCategoryID` int(11) DEFAULT NULL,
  `UserID` int(11) NOT NULL,
  `DateStamp` datetime NOT NULL,
  `Deleted` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`CategoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'管理手册','',NULL,1,'2014-12-10 21:06:00','\0'),(2,'程序文件','',NULL,1,'2014-12-10 21:06:07','\0'),(9,'作业文件','',NULL,1,'2014-12-10 21:06:13','\0');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `file` (
  `FileID` int(11) NOT NULL AUTO_INCREMENT,
  `CategoryID` int(11) NOT NULL,
  `FileType` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `FileName` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `FileNumber` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `FileLabel` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Version` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Department` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ApproveDate` date DEFAULT NULL,
  `FileDesc` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Location` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `UserID` int(11) NOT NULL,
  `Datestamp` datetime NOT NULL,
  `Deleted` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`FileID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file`
--

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file` DISABLE KEYS */;
INSERT INTO `file` VALUES (1,1,NULL,'1','1','1',NULL,NULL,NULL,'1','uploadfiles/1.pdf',0,'2014-12-10 21:06:00',''),(2,9,NULL,'2','1','1',NULL,NULL,NULL,'2','uploadfiles/1.pdf',0,'2014-12-10 21:06:00',''),(3,2,NULL,'Y1','Y1x','1',NULL,NULL,NULL,'1','uploadfiles/1.pdf',0,'2014-12-10 21:06:00','\0'),(4,2,NULL,'Y1','Y1x','1',NULL,NULL,NULL,'1','uploadfiles/1.pdf',0,'2014-12-10 21:06:00','\0'),(5,9,NULL,'Y2','Y2','1',NULL,NULL,NULL,'2','uploadfiles/1.pdf',0,'2014-12-10 21:06:00',''),(6,1,NULL,'M1','M1','x',NULL,NULL,NULL,'1','uploadfiles/1.pdf',0,'2014-12-10 21:06:00',''),(7,1,NULL,'M2','M2','y',NULL,NULL,NULL,'1','uploadfiles/2.pdf',0,'2014-12-10 21:06:00',''),(8,1,NULL,'M3','M3','z',NULL,NULL,NULL,'1','uploadfiles/1.pdf',0,'2014-12-10 21:06:00',''),(9,1,NULL,'M4','M4','w',NULL,NULL,NULL,'1','uploadfiles/1.pdf',0,'2014-12-10 21:06:00',''),(10,1,NULL,'M5','M5','a',NULL,NULL,NULL,'1','uploadfiles/1.pdf',0,'2014-12-10 21:06:00',''),(11,1,NULL,'M6','M6','b',NULL,NULL,NULL,'1','uploadfiles/1.pdf',0,'2014-12-10 21:06:00',''),(12,1,NULL,'M7','M7','c',NULL,NULL,NULL,'1','uploadfiles/1.pdf',0,'2014-12-10 21:06:00',''),(13,1,NULL,'M8','M8','d',NULL,NULL,NULL,'1','uploadfiles/1.pdf',0,'2014-12-10 21:06:00',''),(14,1,NULL,'M9','M9','e',NULL,NULL,NULL,'1','uploadfiles/1.pdf',0,'2014-12-10 21:06:00',''),(15,1,NULL,'M10','M10','x',NULL,NULL,NULL,'1','uploadfiles/2.pdf',0,'2014-12-10 21:06:00',''),(16,1,NULL,'杨贤迈','XTP-MAN-002','Y',NULL,NULL,'2014-12-11','11','uploadfiles/2.pdf',0,'2014-12-11 21:06:00','\0'),(21,2,NULL,'程序文件测试一','XO001',NULL,NULL,NULL,NULL,'xxx','uploadfiles/2.pdf',1,'2014-12-15 16:20:49','\0'),(22,9,NULL,'作业文件测试一','XO0002',NULL,NULL,NULL,NULL,'','uploadfiles/d782c0102e95494e93c36759a80cbafa.pdf',1,'2014-12-15 16:25:26','\0'),(23,1,NULL,'1','1',NULL,NULL,NULL,NULL,'','uploadfiles/a649be0f7fc8416fa39e680676e21368.pdf',1,'2014-12-15 17:04:16',''),(24,2,NULL,'test1','test2',NULL,NULL,NULL,NULL,'','uploadfiles/6104cbe9f4ca4a60864365cb913391ac.pdf',1,'2014-12-15 18:13:47',''),(25,9,NULL,'德宝测试','X0001',NULL,NULL,NULL,NULL,'','uploadfiles/2232c2e07e7d4da29ef114fc027fa552.pdf',1,'2014-12-15 18:14:43','\0'),(26,9,NULL,'德宝测试1','11',NULL,NULL,NULL,NULL,'','uploadfiles/c6da0622d3c849bcb1029e588e065490.pdf',1,'2014-12-15 18:17:28','\0'),(27,1,NULL,'1','1',NULL,NULL,NULL,NULL,'','uploadfiles/e1077f0b7fb9423b80102163f4397a48.pdf',1,'2014-12-16 23:21:22',''),(28,1,'公用文件','质量和职业健康安全管理手册','XTP-MAN-001',NULL,'001','质量部','2014-01-02','','uploadfiles/94ebb1174a064de9814a9f8bce08c774.pdf',5,'2014-12-21 18:08:10','\0'),(29,1,'公用文件','质量和职业健康安全管理手册3','XTP-MAN-001',NULL,'','质量部','2014-01-01','质量和职业健康安全管理手册3质量和职业健康安全管理手册3质量和职业健康安全管理手册3质量和职业健康安全管理手册3','uploadfiles/f4b2122724354a2baa7f0a64c66ded9b.pdf',5,'2014-12-21 23:25:12','\0'),(30,1,'1','1','1',NULL,'1','1','2015-01-01','','uploadfiles/e865d999a7214e219f00ad563ef0942b.pdf',5,'2014-12-21 23:29:22','');
/*!40000 ALTER TABLE `file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filelabel`
--

DROP TABLE IF EXISTS `filelabel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `filelabel` (
  `LabelID` int(11) NOT NULL AUTO_INCREMENT,
  `LabelName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`LabelID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filelabel`
--

LOCK TABLES `filelabel` WRITE;
/*!40000 ALTER TABLE `filelabel` DISABLE KEYS */;
/*!40000 ALTER TABLE `filelabel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filelog`
--

DROP TABLE IF EXISTS `filelog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `filelog` (
  `FileLogID` int(11) NOT NULL AUTO_INCREMENT,
  `FileID` int(11) NOT NULL,
  `FileOptID` int(11) NOT NULL,
  `ChangeDesc` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `UserID` int(11) NOT NULL,
  `Datestamp` datetime NOT NULL,
  PRIMARY KEY (`FileLogID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filelog`
--

LOCK TABLES `filelog` WRITE;
/*!40000 ALTER TABLE `filelog` DISABLE KEYS */;
INSERT INTO `filelog` VALUES (2,21,1,'用户[yxm]新增文件[21]. 详细信息：[分类编号： 2; \n文件名称： 程序文件测试一; \n文件编号： XO001; \n文件标签： null; \n文件描述： xxx; \n].',5,'2014-12-15 16:20:56'),(3,22,1,'用户[yxm]新增文件[22]. 详细信息：[分类编号： 9; \n文件名称： 作业文件测试一; \n文件编号： XO0002; \n文件标签： null; \n文件描述： ; \n].',5,'2014-12-15 16:25:33'),(4,23,1,'用户[yxm]新增文件[23]. 详细信息：[分类编号： 1; \n文件名称： 1; \n文件编号： 1; \n文件标签： ; \n文件描述： ; \n].',5,'2014-12-15 17:04:16'),(5,24,1,'用户[yxm]新增文件[24]. 详细信息：[分类编号： 2; \n文件名称： test1; \n文件编号： test2; \n文件标签： ; \n文件描述： ; \n].',5,'2014-12-15 18:13:48'),(6,25,1,'用户[yxm]新增文件[25]. 详细信息：[分类编号： 9; \n文件名称： 德宝测试; \n文件编号： X0001; \n文件标签： ; \n文件描述： ; \n].',5,'2014-12-15 18:14:44'),(7,26,1,'用户[yxm]新增文件[26]. 详细信息：[分类编号： 9; \n文件名称： 德宝测试1; \n文件编号： 11; \n文件标签： ; \n文件描述： ; \n].',5,'2014-12-15 18:17:28'),(8,2,3,'用户[yxm]删除文件[2].',5,'2014-12-16 19:43:11'),(9,5,3,'用户[yxm]删除文件[5].',5,'2014-12-16 19:51:12'),(10,24,3,'用户[yxm]删除文件[24].',5,'2014-12-16 19:53:50'),(11,14,3,'用户[yxm]删除文件[14].',5,'2014-12-16 19:54:01'),(12,23,3,'用户[yxm]删除文件[23].',5,'2014-12-16 20:01:12'),(13,11,3,'用户[yxm]删除文件[11].',5,'2014-12-16 20:24:53'),(14,27,1,'用户[yxm]新增文件[27]. 详细信息：[分类编号： 1; \n文件名称： 1; \n文件编号： 1; \n文件标签： ; \n文件描述： ; \n].',5,'2014-12-16 23:21:22'),(15,27,3,'用户[yxm]删除文件[27].',5,'2014-12-21 17:06:06'),(16,1,3,'用户[yxm]删除文件[1].',5,'2014-12-21 17:06:09'),(17,6,3,'用户[yxm]删除文件[6].',5,'2014-12-21 17:06:11'),(18,7,3,'用户[yxm]删除文件[7].',5,'2014-12-21 17:06:12'),(19,8,3,'用户[yxm]删除文件[8].',5,'2014-12-21 17:06:13'),(20,9,3,'用户[yxm]删除文件[9].',5,'2014-12-21 17:06:14'),(21,10,3,'用户[yxm]删除文件[10].',5,'2014-12-21 17:06:15'),(22,12,3,'用户[yxm]删除文件[12].',5,'2014-12-21 17:06:15'),(23,13,3,'用户[yxm]删除文件[13].',5,'2014-12-21 17:06:16'),(24,15,3,'用户[yxm]删除文件[15].',5,'2014-12-21 17:06:17'),(25,28,1,'用户[yxm]新增文件[28]. 详细信息：[分类编号： 1; \n文件名称： 质量和职业健康安全管理手册; \n文件编号： XTP-MAN-001; \n文件标签： ; \n文件描述： ; \n].',5,'2014-12-21 18:08:10'),(26,29,1,'用户[yxm]新增文件[29]. 详细信息：[分类编号： 1; \n文件名称： 质量和职业健康安全管理手册2; \n文件编号： XTP-MAN-001; \n文件标签： ; \n文件描述： ; \n].',5,'2014-12-21 18:10:33'),(27,29,2,'用户[yxm]变更文件[29]. 详细信息：[文件名称： 由 质量和职业健康安全管理手册2 变为 质量和职业健康安全管理手册3; \n文件描述： 由  变为 质量和职业健康安全管理手册3质量和职业健康安全管理手册3质量和职业健康安全管理手册3质量和职业健康安全管理手册3; \n].',5,'2014-12-21 23:23:47'),(28,29,2,NULL,5,'2014-12-21 23:25:12'),(29,30,1,'用户[yxm]新增文件[30]. 详细信息：[分类编号： 1; \n文件名称： 1; \n文件编号： 1; \n文件标签： ; \n文件描述： ; \n].',5,'2014-12-21 23:29:22'),(30,30,3,'用户[yxm]删除文件[30].',5,'2014-12-21 23:34:43');
/*!40000 ALTER TABLE `filelog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fileoperation`
--

DROP TABLE IF EXISTS `fileoperation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fileoperation` (
  `FileOptID` int(11) NOT NULL AUTO_INCREMENT,
  `OptName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`FileOptID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fileoperation`
--

LOCK TABLES `fileoperation` WRITE;
/*!40000 ALTER TABLE `fileoperation` DISABLE KEYS */;
INSERT INTO `fileoperation` VALUES (1,'新增'),(2,'修改'),(3,'删除'),(4,'预览');
/*!40000 ALTER TABLE `fileoperation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `RoleId` int(11) NOT NULL AUTO_INCREMENT,
  `RoleName` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`RoleId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'管理员'),(2,'访客');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `UserId` int(11) NOT NULL AUTO_INCREMENT,
  `RoleId` int(11) NOT NULL,
  `UserName` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `Password` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `RealName` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `PhoneNumber` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CellPhoneNumber` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Deleted` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`UserId`),
  UNIQUE KEY `UserName_UNIQUE` (`UserName`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,2,'fangke','fangke','访客','88888888','13333333333','fangke@gmail.com','\0'),(2,1,'admin','admin123','3','3','3','3','\0'),(5,1,'yxm','yxm','杨贤迈','','13335281231','yxm@gmail.com','\0'),(7,1,'adminuser','adminuser123','1','1','1','1',''),(8,2,'','','','','','',''),(10,2,'test','test','test','','123','12',''),(11,2,'test1','test1','aa','','11','11',''),(12,2,'test123','123456','1','','1','1','');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-12-25 20:42:54
