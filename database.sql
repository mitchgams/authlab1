-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: auth_play
-- ------------------------------------------------------
-- Server version	5.7.32-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `authorid` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `content` text,
  `publishdate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (1,14,'this','that','0000-00-00 00:00:00','2020-12-21 00:42:29'),(3,14,'this is a postman test','I hope this works','2020-12-23 18:52:49','2020-12-23 18:52:49'),(4,14,'title1','cjcjcj','0000-00-00 00:00:00','2020-12-23 18:54:44'),(5,14,'title1','cjcjcj','0000-00-00 00:00:00','2020-12-23 18:56:02'),(6,14,'title1','cjcjcj','0000-00-00 00:00:00','2020-12-23 18:56:08'),(10,18,'s','s','2020-12-27 23:37:38','2020-12-27 23:37:38'),(11,18,'s fight the power','s chicken soup','2020-12-28 06:28:24','2020-12-27 23:37:45'),(14,18,'s','s','2020-12-27 23:38:00','2020-12-27 23:38:00'),(16,18,'s','s','2020-12-27 23:38:01','2020-12-27 23:38:01'),(17,18,'s','s','2020-12-27 23:38:01','2020-12-27 23:38:01'),(19,18,'s','s','2020-12-28 04:56:59','2020-12-28 04:56:59'),(22,18,'This is a title','chicken','2020-12-28 05:05:06','2020-12-28 05:05:06'),(23,18,'1234561234','chicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is goodchicken noodle soup is good','2020-12-28 05:27:48','2020-12-28 05:27:48'),(24,18,'cthis is a title','chicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is goodchicken is good','2020-12-28 06:33:54','2020-12-28 06:33:54');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogtags`
--

DROP TABLE IF EXISTS `blogtags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogtags` (
  `blogid` int(11) NOT NULL,
  `tagid` int(11) NOT NULL,
  PRIMARY KEY (`blogid`),
  CONSTRAINT `fk_blogid_tag` FOREIGN KEY (`blogid`) REFERENCES `blogs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogtags`
--

LOCK TABLES `blogtags` WRITE;
/*!40000 ALTER TABLE `blogtags` DISABLE KEYS */;
INSERT INTO `blogtags` VALUES (1,3),(3,3),(4,1),(5,1),(6,1),(10,1),(11,2),(14,1),(16,1),(17,1),(19,1),(22,1),(23,1),(24,1);
/*!40000 ALTER TABLE `blogtags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'Badass','2020-12-14 03:08:30'),(2,'Cray!','2020-12-14 03:08:30'),(3,'Neat','2020-12-14 03:08:30');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `token` text,
  `expires` datetime DEFAULT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  CONSTRAINT `tokens_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` VALUES (1,9,NULL,NULL,'2020-12-20 18:26:42'),(2,10,NULL,NULL,'2020-12-20 18:27:21'),(3,11,'eyJhbGciOiJIUzI1NiJ9.Mw.DxluIg9x5qNDkU7HnKk3yoyEv-GTVHmP1uzncdTfa5U',NULL,'2020-12-20 18:28:50'),(4,12,'eyJhbGciOiJIUzI1NiJ9.NA.j8jQsi1ANrWyGN7vZ4Avmw_Vse7kpfDsy_fG5-iO1Oc',NULL,'2020-12-20 18:31:22'),(23,15,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjE1LCJhY2Nlc3N0b2tlbmlkIjoyMywidW5pcXVlIjoiODgyMjYzN2NmYTQ1YTIzYzdlMjRmMjJjNjRiNzhmYTIzZGJlNGM1NWQ2M2I0NzAwNDI4N2IwMmIxODE5Yjk2ZSIsImlhdCI6MTYwODU4Mjc5NH0.LinMvYZc1S1rmL5wRlk9ibF6o2TbrWwJhJr54Q67fYk',NULL,'2020-12-21 14:33:14'),(24,16,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjE2LCJhY2Nlc3N0b2tlbmlkIjoyNCwidW5pcXVlIjoiN2EwNWNiYmM5NDk2YWNmZGQwNGM0NTliMGU0MzEwNDBkYzZjYzI4ZTg3Y2Y0OTNiODExNGRkMzQ1MGNiZGY4ZSIsImlhdCI6MTYwODU4Mjg5Mn0.A_PFXGl4ZmWcL3Xct9fDG7xqNrcrGc6UUx0hDhddK_s',NULL,'2020-12-21 14:34:52'),(44,17,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjE3LCJhY2Nlc3N0b2tlbmlkIjo0NCwidW5pcXVlIjoiNDRmODNiMTA2Mjg1NGUwMmM3MzA4NTQzOWQ2YTg4NWUwYjFhM2NhNjg1MDJkYWUxZDk5NzBiNmNjOTUwNmFmZiIsImlhdCI6MTYwOTEwMjgzOH0.FEOhcxlRS6TTTvx1BKJnYxFkEzh0ZD6necW3tnAImHY',NULL,'2020-12-27 15:00:38'),(45,27,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjI3LCJhY2Nlc3N0b2tlbmlkIjo0NSwidW5pcXVlIjoiYzJiMWRkYmFiMTdjY2FhMDY2M2Q1YTk5YjliMzFjNDZjMmZlMzZjNWVmOGEzMjY0NDZmMmNiOTFiYjhmNTEzZCIsImlhdCI6MTYwOTE0MTM4MH0.RABEH2G_MDv21nO4ZcGwm6aFEBH5qH8gI8rieGQd2us',NULL,'2020-12-28 01:43:00'),(47,18,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjE4LCJhY2Nlc3N0b2tlbmlkIjo0NywidW5pcXVlIjoiNjY4MDU5NDRlMmExZGUwOGY1MTU2YWZhZmQzMmU0NTY0OTQ2ZTMxOWU0OGQzM2JiMjJiMDhiYzQyZmRkYmZlNiIsImlhdCI6MTYwOTE0MjE0MX0.5EwtUX6bhDUkvsa5GnndODpmGr0myOzbjfXDD4zT2T0',NULL,'2020-12-28 01:55:41');
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(60) NOT NULL,
  `firstname` varchar(60) NOT NULL,
  `lastname` varchar(60) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `role` varchar(25) DEFAULT 'guest',
  `_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'mitch@gmail.com','Mitch','Gams','password','guest','2020-12-20 22:33:21'),(2,'0','0',NULL,NULL,'guest','2020-12-21 00:21:37'),(5,'Mitchgams@gmail.com','Mitch','Gamss','$2b$10$ExwOf/FLhFehkjngFapLz.0zA23re.t2iuXyqqwhCOn9ytS1uFa06','guest','2020-12-21 00:24:21'),(6,'Mitchgafms@gmail.com','Mitch','Gamss','$2b$10$.CUHhkSCJmxNZjr4RJ7vSeawt229suAQhrkzSOo07qRV0miMiURku','guest','2020-12-21 00:25:29'),(7,'Mitchgafmfs@gmail.com','Mitch','Gamss','$2b$10$Gh2BhZfxFPsxkXAEA4.oseZ6EY6/Zql07E3.P/7zAlkJlU0OrSklO','guest','2020-12-21 00:26:03'),(9,'Mitchgafmfxs@gmail.com','Mitch','Gamss','$2b$10$YSo6ggKNF4CN1T8Y9WjTfeMouYKlKxH8mydcN.XjmWUnDOWXNhKMO','guest','2020-12-21 00:26:42'),(10,'Mitchgafdmfxs@gmail.com','Mitch','Gamss','$2b$10$fKdyeakQRXgUWUvc7lrhe.I.2kVWPQuVRxDn823hEhExQdCunnyCe','guest','2020-12-21 00:27:21'),(11,'Mitchgacfdmfxs@gmail.com','Mitch','Gamss','$2b$10$XfmzMvl3SNhwuM3EEP/7Juhbsee1iuj93T.6vnvVo9u00xM3vyAAi','guest','2020-12-21 00:28:50'),(12,'Mitchgacfdsmfxs@gmail.com','Mitch','Gamss','$2b$10$uXdytPez3lv0Ur4Na4ApUuLYte0bAw7xRJhoIJORVlJIeReq15OBu','guest','2020-12-21 00:31:22'),(14,'Mitchs@gmail.com','Mitch','Gams','$2b$10$5ZED2VmMXF5ueMHsuo4/q.KyZwwGtUHOoX.3q9Lfge1TN2OBs1dpy','admin','2020-12-21 00:35:26'),(15,'Mitchss@gmail.com','d','f','$2b$10$CfB8wrKd1tLMPKqSbdiumuQiOXv5Ag7e/67pBwuW0GEld.lABEEn6','guest','2020-12-21 20:33:14'),(16,'Mitchss@dgmail.com','d','f','$2b$10$yHDR7JXuFhatE9xhAbxpu.0ZKAZ1TpkNKiegDMaQ0tnRT0Mq//yDa','guest','2020-12-21 20:34:52'),(17,'Mitchsds@dgmail.com','d','f','$2b$10$FamqCgr517UdkrRTWT0kbOmPjjZ7e.zAloXi7oo3qncD0DtM0gLkO','guest','2020-12-21 20:35:33'),(18,'Mitcshsds@dgmail.com','d','f','$2b$10$LlZOEYOAEaKwb.jBYQbn3eKhYcFbq59M45p8YLUj5BaUk1A0mbi/6','admin','2020-12-22 19:30:29'),(27,'d3ed@tedst.com','Bill','Cosby','$2b$10$zv1lO74hFXeROlG6LQhPD.6.JmHkE8NubAaGqJ/Bp4ntK5fX7MGIi','guest','2020-12-28 07:43:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-28  2:04:07
