-- Active: 1707101283495@@127.0.0.1@3306@sesac
CREATE TABLE VISITOR(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NAME VARCHAR(10) NOT NULL,
    COMMENT MEDIUMTEXT NOT NULL
);

DESC VISITOR;

SELECT * FROM VISITOR;

INSERT INTO VISITOR(NAME, COMMENT) VALUES('allie', 'hi!');
INSERT INTO VISITOR(NAME, COMMENT) VALUES('홍길동', '홍길동입니다');


#### Node.js에서 root 계정 접근 불가 ####
#### 새 계정 생성 (DCL) ####
CREATE USER 'sesac'@'%' IDENTIFIED BY '1234';

-- 
ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

-- 한번에 설정
-- CREATE USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

-- 모든 DB에 접근 가능하도록 sesac 계정에 DB 접근 권한 부여
GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;

-- 현재 사용 중인 MYSQL 캐쉬 삭제
FLUSH PRIVILEGES;

SELECT * FROM VISITOR;
