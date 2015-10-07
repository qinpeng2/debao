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
  PRIMARY KEY (`FileID`)  COMMENT '');


CREATE TABLE `defiles`.`capalog` (
  `CapaLogID` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `FileID` INT NOT NULL COMMENT '',
  `FileOptID` INT NOT NULL COMMENT '',
  `ChangeDesc` VARCHAR(500) NULL COMMENT '',
  `UserID` INT NOT NULL COMMENT '',
  `Datestamp` DATETIME NOT NULL COMMENT '',
  PRIMARY KEY (`CapaLogID`)  COMMENT '');


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
  PRIMARY KEY (`FileID`)  COMMENT '');


CREATE TABLE `defiles`.`driftlog` (
  `DriftLogID` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `FileID` INT NOT NULL COMMENT '',
  `FileOptID` INT NOT NULL COMMENT '',
  `ChangeDesc` VARCHAR(500) NULL COMMENT '',
  `UserID` INT NOT NULL COMMENT '',
  `Datestamp` DATETIME NOT NULL COMMENT '',
  PRIMARY KEY (`DriftLogID`)  COMMENT '');


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
  PRIMARY KEY (`VideoID`)  COMMENT '');



CREATE TABLE `defiles`.`videolog` (
  `VideoLogID` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `VideoID` INT NOT NULL COMMENT '',
  `VideoOptID` INT NOT NULL COMMENT '',
  `ChangeDesc` VARCHAR(500) NULL COMMENT '',
  `UserID` INT NOT NULL COMMENT '',
  `Datestamp` DATETIME NOT NULL COMMENT '',
  PRIMARY KEY (`VideoLogID`)  COMMENT '');
