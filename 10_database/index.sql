-- ========= DDL =========
-- data definition language
--------- DATABASE 관련 명령어 ---------
SHOW DATABASES;

-- DATABASE 삭제
DROP DATABASE sesac;
DROP DATABASE mydb2;

-- DATABASE 생성
CREATE DATABASE sesac DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
/* 
    dobong이라는 데이터베이스를 생성
    문자열은 utf8mb4, 콜레이션은 utf8mb4_unicode_ci 사용
    utf8mb4는 utf8보다 많은 문자를 지원(이모지 저장 가능)
    이모지를 저장하는 db라면 utf8mb4, 이모지 필요 없다면 utf8
 */
CREATE DATABASE dobong DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 사용할 데이터베이스 선언
USE sesac;


--------- TABLE 관련 명령어 ---------
-- TABLE 생성
/* 
    CREATE TABLE 테이블명(
        속성1 데이터형식 제약조건,
        속성2 데이터형식 제약조건
    );
 */
-- 제약조건
/* 
    - NOT NULL : NULL 허용X
    - AUTO_INCREMENT : 자동 숫자 증가
    - PRIMARY KEY : 기본키(중복 허용X, NULL 허용X)
    - DEFAULT : 기본값
    - UNIQUE : 중복 허용X, NULL 허용O, 한 테이블에 여러 개 설정 가능
 */
CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- TABLE 목록 확인
SHOW TABLES;

-- 특정 TABLE의 구조 확인(컬럼명, 데이터형식, 제약조건 등)
DESC products;

-- TABLE 삭제
DROP TABLE products;

-- TABLE 안의 값 삭제
TRUNCATE TABLE user;

-- TABLE 수정
-- 컬럼 추가
ALTER TABLE products ADD new_column VARCHAR(20);
-- 컬럼 수정
ALTER TABLE products MODIFY new_column INT;
-- 컬럼 삭제
ALTER TABLE products DROP new_column;

-- ========= DML ==========
-- data manipulation language
CREATE TABLE USER(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

-- DATA 추가
INSERT INTO USER (name, age, address) VALUES('김민정', 20, '서울특별시 마포구');
INSERT INTO USER (name, age, address) VALUES('이한이', 22, '서울특별시 종로구');
INSERT INTO USER (name, age, address) VALUES('이지은', 25, '서울특별시 마포구');
INSERT INTO USER (name, age, address) VALUES('박수진', 21, '서울특별시 마포구');
INSERT INTO USER (name, age, address) VALUES('윤세희', 17, '서울특별시 성북구');
INSERT INTO USER (name, age, address) VALUES('최솔희', 32, '서울특별시 은평구');
INSERT INTO USER (name, age, address) VALUES('권희수', 23, '서울특별시 마포구');
INSERT INTO USER (name, age, address) VALUES('유지현', 35, '부산광역시 동구');
INSERT INTO USER (name, age, address) VALUES('민지혜', 28, '강원도 속초시');
INSERT INTO USER (name, age, address) VALUES('정선희', 33, '전라북도 전주시');


insert into user (name, age, address) VALUES('김민정',20,'서울특별시 마포구');
insert into user (name, age, address) VALUES('이한이',30,'서울특별시 강남구');
insert into user (name, age, address) VALUES('이지은',22,'대구광역시 동구');
insert into user (name, age, address) VALUES('윤세희',25,'부산광역시 관악구');
insert into user (name, age, address) VALUES('박수진',19,'서울특별시 노원구');
insert into user (name, age, address) VALUES('박찬희',23,'서울특별시 강서구');
insert into user (name, age, address) VALUES('이지수',32,'부산광역시 동구');
insert into user (name, age, address) VALUES('최솔희',37,'강원도 강릉시');
insert into user (name, age, address) VALUES('한소희',26,'충청남도 공주시');
insert into user (name, age, address) VALUES('권희수',40,'강원도 속초시');
insert into user (name, age, address) VALUES('김민지',22,'서울특별시 중구');

-- DATA 수정
-- UPDATE 테이블명 SET 수정내용 WHERE 수정할 데이터;
UPDATE USER SET ADDRESS='인천광역시 부평구' WHERE ID=10;

-- DATA 삭제
-- DELETE FROM 테이블명 WHERE 삭제할 조건;
DELETE FROM USER WHERE ID=11;

-- DATA 조회 (질의어)
-- SELECT 속성명 FROM 테이블명 WHERE 검색조건;
SELECT * FROM USER;
SELECT NAME FROM USER;
SELECT NAME, AGE FROM USER;

-- WHERE: 조건 적용
SELECT * FROM USER WHERE AGE >= 25;
SELECT NAME FROM USER WHERE ID = 3;
SELECT ID, AGE FROM USER WHERE NAME='이지은';

-- ORDER BY: 데이터 정렬
-- desc: 내림차순
-- asc: 오름차순 (default)
SELECT * FROM USER ORDER BY AGE;
SELECT * FROM USER ORDER BY AGE DESC;
SELECT * FROM USER WHERE ID > 6 ORDER BY AGE;

-- LIKE: 문자열 패턴 조회
SELECT * FROM USER WHERE ADDRESS LIKE '서울%';
SELECT * FROM USER WHERE NAME LIKE '%희';
SELECT * FROM USER WHERE NAME LIKE '__희';
SELECT * FROM USER WHERE ADDRESS LIKE '%광역시%';
SELECT NAME FROM USER WHERE NAME LIKE '%희%' ORDER BY AGE DESC;

-- LIMIT: 조회할 데이터의 개수 제한
SELECT * FROM USER LIMIT 3;
SELECT * FROM USER WHERE ADDRESS LIKE '서울%' LIMIT 2;
SELECT * FROM USER WHERE ADDRESS LIKE '서울%' ORDER BY AGE DESC LIMIT 2;

-- BETWEEN A AND B: A와 B 사이값 조회
SELECT * FROM USER WHERE AGE BETWEEN 25 AND 30;

-- IN(조건값 리스트): 리스트의 요소를 하나라도 만족하는 데이터 조회
SELECT * FROM USER WHERE AGE IN(20, 21, 22, 23);

-- IS NULL / IS NOT NULL
INSERT INTO USER (NAME, AGE) VALUES('서현승', 28);
SELECT * FROM USER WHERE ADDRESS IS NULL;
SELECT NAME, ADDRESS FROM USER WHERE ADDRESS IS NOT NULL;

-- 논리 연산자
-- AND, OR, NOT
SELECT * FROM USER WHERE ADDRESS IS NOT NULL AND AGE > 25;
SELECT * FROM USER WHERE ADDRESS IS NOT NULL OR AGE >25;
SELECT NAME FROM USER WHERE NAME LIKE '이%' AND AGE = 22;

-- DISTINCT: 중복 튜플 제거
SELECT AGE FROM USER;
SELECT DISTINCT AGE FROM USER;

DELETE FROM USER WHERE NAME LIKE '이%';
SELECT * FROM USER;

