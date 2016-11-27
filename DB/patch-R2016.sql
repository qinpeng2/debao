CREATE TABLE `internal` (
  `FileID` int(11) NOT NULL AUTO_INCREMENT,
  `FileType` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `FileName` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `FileNumber` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Closed` bit(1) NOT NULL DEFAULT b'0',
  `FileLabel` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Department` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `FileDesc` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Location` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `UserID` int(11) NOT NULL,
  `Datestamp` datetime NOT NULL,
  `Deleted` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`FileID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `internallog` (
  `InternalLogID` int(11) NOT NULL AUTO_INCREMENT,
  `FileID` int(11) NOT NULL,
  `FileOptID` int(11) NOT NULL,
  `ChangeDesc` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `UserID` int(11) NOT NULL,
  `Datestamp` datetime NOT NULL,
  PRIMARY KEY (`InternalLogID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `external` (
  `FileID` int(11) NOT NULL AUTO_INCREMENT,
  `FileType` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `FileName` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `FileNumber` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Closed` bit(1) NOT NULL DEFAULT b'0',
  `FileLabel` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Department` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `FileDesc` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Location` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `UserID` int(11) NOT NULL,
  `Datestamp` datetime NOT NULL,
  `Deleted` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`FileID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `externallog` (
  `ExternalLogID` int(11) NOT NULL AUTO_INCREMENT,
  `FileID` int(11) NOT NULL,
  `FileOptID` int(11) NOT NULL,
  `ChangeDesc` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `UserID` int(11) NOT NULL,
  `Datestamp` datetime NOT NULL,
  PRIMARY KEY (`ExternalLogID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `audit` (
  `FileID` int(11) NOT NULL AUTO_INCREMENT,
  `FileType` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `FileName` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `FileNumber` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ClientName` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Closed` bit(1) NOT NULL DEFAULT b'0',
  `FileLabel` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `FileDesc` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Location` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `UserID` int(11) NOT NULL,
  `Datestamp` datetime NOT NULL,
  `Deleted` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`FileID`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `auditlog` (
  `AuditLogID` int(11) NOT NULL AUTO_INCREMENT,
  `FileID` int(11) NOT NULL,
  `FileOptID` int(11) NOT NULL,
  `ChangeDesc` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `UserID` int(11) NOT NULL,
  `Datestamp` datetime NOT NULL,
  PRIMARY KEY (`AuditLogID`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `quality` (
  `FileID` int(11) NOT NULL AUTO_INCREMENT,
  `CategoryID` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `FileName` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `FileNumber` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `FileLabel` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Department` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Location` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `UserID` int(11) NOT NULL,
  `Datestamp` datetime NOT NULL,
  `Deleted` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`FileID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `qualitylog` (
  `QualityLogID` int(11) NOT NULL AUTO_INCREMENT,
  `FileID` int(11) NOT NULL,
  `FileOptID` int(11) NOT NULL,
  `ChangeDesc` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `UserID` int(11) NOT NULL,
  `Datestamp` datetime NOT NULL,
  PRIMARY KEY (`QualityLogID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
