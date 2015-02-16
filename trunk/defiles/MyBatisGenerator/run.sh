#!/bin/bash
java -cp mysql-connector-java-5.1.30.jar -jar mybatis-generator-core-1.3.2.jar -configfile generatorConfig.xml -overwrite
