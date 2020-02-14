-- MySQL dump 10.17  Distrib 10.3.14-MariaDB, for osx10.14 (x86_64)
--
-- Host: localhost    Database: formation_plus
-- ------------------------------------------------------
-- Server version	10.3.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `formation_plus`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `formation_plus` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `formation_plus`;

--
-- Table structure for table `Attestation`
--

DROP TABLE IF EXISTS `Attestation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Attestation` (
  `idAttestation` int(11) NOT NULL AUTO_INCREMENT,
  `message` text NOT NULL,
  `etudiantIdEtudiant` int(11) DEFAULT NULL,
  `conventionIdConvention` int(11) DEFAULT NULL,
  PRIMARY KEY (`idAttestation`),
  KEY `FK_3386e4d57a212c26ccff20d9452` (`etudiantIdEtudiant`),
  KEY `FK_2a49dfad72fa02f58c7ea9de600` (`conventionIdConvention`),
  CONSTRAINT `FK_2a49dfad72fa02f58c7ea9de600` FOREIGN KEY (`conventionIdConvention`) REFERENCES `Convention` (`idConvention`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_3386e4d57a212c26ccff20d9452` FOREIGN KEY (`etudiantIdEtudiant`) REFERENCES `Etudiant` (`idEtudiant`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Attestation`
--

LOCK TABLES `Attestation` WRITE;
/*!40000 ALTER TABLE `Attestation` DISABLE KEYS */;
/*!40000 ALTER TABLE `Attestation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Convention`
--

DROP TABLE IF EXISTS `Convention`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Convention` (
  `nbHeur` int(11) NOT NULL,
  `idConvention` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  PRIMARY KEY (`idConvention`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Convention`
--

LOCK TABLES `Convention` WRITE;
/*!40000 ALTER TABLE `Convention` DISABLE KEYS */;
INSERT INTO `Convention` VALUES (1,1,'Convention 1h'),(2,2,'Convention 2h'),(3,3,'Convention 3h');
/*!40000 ALTER TABLE `Convention` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Etudiant`
--

DROP TABLE IF EXISTS `Etudiant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Etudiant` (
  `idEtudiant` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `conventionIdConvention` int(11) DEFAULT NULL,
  PRIMARY KEY (`idEtudiant`),
  KEY `FK_003c4cd47f9554692364b27508e` (`conventionIdConvention`),
  CONSTRAINT `FK_003c4cd47f9554692364b27508e` FOREIGN KEY (`conventionIdConvention`) REFERENCES `Convention` (`idConvention`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Etudiant`
--

LOCK TABLES `Etudiant` WRITE;
/*!40000 ALTER TABLE `Etudiant` DISABLE KEYS */;
INSERT INTO `Etudiant` VALUES (1,'Doe','John','john@doe.fr',3),(2,'Durant','Kevin','kevin@durant.fr',1),(3,'James','LeBron','lebron@james.fr',2);
/*!40000 ALTER TABLE `Etudiant` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-12  0:25:12
