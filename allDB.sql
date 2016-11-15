-- MySQL dump 10.13  Distrib 5.5.53, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: Eventos
-- ------------------------------------------------------
-- Server version	5.5.53-0ubuntu0.14.04.1

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
-- Table structure for table `Departamento`
--

DROP TABLE IF EXISTS `Departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Departamento` (
  `dip` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`dip`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Departamento`
--

LOCK TABLES `Departamento` WRITE;
/*!40000 ALTER TABLE `Departamento` DISABLE KEYS */;
INSERT INTO `Departamento` VALUES (1,'Guatemala');
/*!40000 ALTER TABLE `Departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuario`
--

DROP TABLE IF EXISTS `Usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Usuario` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `direccion` varchar(120) DEFAULT NULL,
  `dip` int(11) NOT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `usuario` (`usuario`),
  UNIQUE KEY `correo` (`correo`),
  KEY `dip` (`dip`),
  CONSTRAINT `Usuario_ibfk_1` FOREIGN KEY (`dip`) REFERENCES `Departamento` (`dip`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuario`
--

LOCK TABLES `Usuario` WRITE;
/*!40000 ALTER TABLE `Usuario` DISABLE KEYS */;
INSERT INTO `Usuario` VALUES (2,'madd','madd@example.com','123456',NULL,1),(4,'maddelyn','madd2@example.com','123456',NULL,1),(5,'maddelynp','madd21@example.com','123456',NULL,1),(6,'mp1','mp1@example.com','123456',NULL,1),(7,'ja1','ja@example.com','123456',NULL,1),(8,'kp1','kp@example.com','123456',NULL,1),(9,'sw1','sw@example.com','123456',NULL,1),(10,'swother','sw111@example.com','123456',NULL,1),(11,'abcd','abcd@example.com','123456',NULL,1),(12,'efgh','efgh@example.com','123456',NULL,1),(13,'ijkl','ijkl@example.com','123456',NULL,1),(14,'mnop','mnop@example.com','123456',NULL,1),(15,'qrst','qrst@example.com','123456',NULL,1),(16,'uvwx','uvwx@example.com','123456',NULL,1),(17,'yz12','yz12@example.com','123456',NULL,1),(18,'kg','kg@example.com','123456',NULL,1),(19,'dfnt','dfnt@example.com','123456',NULL,1),(20,'mia','mia@example.com','123456',NULL,1);
/*!40000 ALTER TABLE `Usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asistencia`
--

DROP TABLE IF EXISTS `asistencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `asistencia` (
  `idAsistencia` int(11) NOT NULL AUTO_INCREMENT,
  `idEvento` int(11) DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `asistencia` int(11) DEFAULT NULL,
  PRIMARY KEY (`idAsistencia`),
  KEY `fk_asistencia_evento` (`idEvento`),
  KEY `fk_asistencia_usuario` (`idUsuario`),
  CONSTRAINT `fk_asistencia_evento` FOREIGN KEY (`idEvento`) REFERENCES `evento` (`idEvento`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asistencia`
--

LOCK TABLES `asistencia` WRITE;
/*!40000 ALTER TABLE `asistencia` DISABLE KEYS */;
INSERT INTO `asistencia` VALUES (2,2,20,NULL),(3,5,20,NULL),(4,13,20,NULL),(5,2,19,NULL),(6,2,17,NULL);
/*!40000 ALTER TABLE `asistencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evento`
--

DROP TABLE IF EXISTS `evento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evento` (
  `idEvento` int(11) NOT NULL AUTO_INCREMENT,
  `nombreEvento` varchar(100) DEFAULT NULL,
  `fechaEvento` date DEFAULT NULL,
  `descripcionEvento` varchar(500) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `lugar` varchar(100) DEFAULT NULL,
  `activo` bit(1) DEFAULT NULL,
  PRIMARY KEY (`idEvento`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento`
--

LOCK TABLES `evento` WRITE;
/*!40000 ALTER TABLE `evento` DISABLE KEYS */;
INSERT INTO `evento` VALUES (2,'Fernando','0000-00-00','en la plazuela',NULL,'guatemala',''),(3,'Carlos','0000-00-00','en el puerto',NULL,'zacapa',''),(4,'Carlos','0000-00-00','en el puerto',NULL,'zacapa',''),(5,'Carlos test','0000-00-00','en el puerto',NULL,'zacapa',''),(6,'Test Lunes','0000-00-00','en el puerto',NULL,'zacapa',''),(7,'Ayuda a Guatemala','0000-00-00','Ayuda a Guatemala, otra vez',34,'13 avenida, 12 calle',''),(8,'Techo','2014-08-19','Construye una casa',34,'13 avenida',''),(9,'Comida Gratis','2016-10-25','Ven y recibe toda la comida gratis posible',34,'13 avenida',''),(10,'Reparte Ropa','2016-10-15','Reparte la ropa necesaria para salvar al mundo',34,'15 avenida, 9-25',''),(11,'Construye una cama','1950-01-01','Construye una cama para los pobres',34,'15 avenida, Guatemala',''),(12,'Tortas Mila','2015-08-28','Compra tortas mila',34,'15 calle',''),(13,'Venta de ropa `\"','0000-00-00','Venta de ropa para caridad',34,'13 avenida, 4-24',''),(14,'Prueba','0000-00-00','prueba',34,'prueba','');
/*!40000 ALTER TABLE `evento` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-11-14 18:26:25
