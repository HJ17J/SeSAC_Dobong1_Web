CREATE DATABASE mybatis DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci;
USE mybatis;
CREATE TABLE USER(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    nickname VARCHAR(20) NOT NULL
)