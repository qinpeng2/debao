/****************************
Table CAPA
****************************/

CREATE TABLE `defiles`.`capa` (
  `FileID` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `FileType` VARCHAR(45) NULL COMMENT '',
  `FileName` VARCHAR(500) NOT NULL COMMENT '',
  `FileNumber` VARCHAR(50) NULL COMMENT '',
  `CapaSource` VARCHAR(200) NULL COMMENT '',
  `Closed` BIT NOT NULL DEFAULT 0 COMMENT '',
  `FileLabel` VARCHAR(200) NULL COMMENT '',
  `Department` VARCHAR(50) NULL COMMENT '',
  `FileDesc` VARCHAR(1000) NULL COMMENT '',
  `Location` VARCHAR(1000) NOT NULL COMMENT '',
  `UserID` INT NOT NULL COMMENT '',
  `Datestamp` DATETIME NOT NULL COMMENT '',
  `Deleted` BIT NOT NULL DEFAULT 0 COMMENT '',
  PRIMARY KEY (`FileID`)  COMMENT ''
  ) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;;

/****************************
Table Drift
****************************/

CREATE TABLE `defiles`.`drift` (
  `FileID` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `FileType` VARCHAR(45) NULL COMMENT '',
  `FileName` VARCHAR(500) NULL COMMENT '',
  `FileNumber` VARCHAR(50) NULL COMMENT '',
  `Closed` BIT(1) NOT NULL DEFAULT 0 COMMENT '',
  `FileLabel` VARCHAR(200) NULL COMMENT '',
  `Department` VARCHAR(50) NULL COMMENT '',
  `FileDesc` VARCHAR(1000) NULL COMMENT '',
  `Location` VARCHAR(1000) NOT NULL COMMENT '',
  `UserID` INT NOT NULL COMMENT '',
  `Datestamp` DATETIME NOT NULL COMMENT '',
  `Deleted` BIT NOT NULL DEFAULT 0 COMMENT '',
  PRIMARY KEY (`FileID`)  COMMENT ''
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;;

/****************************
Table Video
****************************/

CREATE TABLE `defiles`.`video` (
  `VideoID` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `VideoType` VARCHAR(45) NULL COMMENT '',
  `ViedoName` VARCHAR(500) NULL COMMENT '',
  `VideoLabel` VARCHAR(200) NULL COMMENT '',
  `Department` VARCHAR(50) NULL COMMENT '',
  `VideoDesc` VARCHAR(1000) NULL COMMENT '',
  `ImgLocation` VARCHAR(1000) NULL COMMENT '',
  `Location` VARCHAR(1000) NOT NULL COMMENT '',
  `UserID` INT NOT NULL COMMENT '',
  `Datestamp` DATETIME NOT NULL COMMENT '',
  `Deleted` BIT NOT NULL DEFAULT 0 COMMENT '',
  PRIMARY KEY (`VideoID`)  COMMENT ''
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;;
