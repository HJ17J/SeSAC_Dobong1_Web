USE SESAC;

CREATE TABLE customer(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);

DESC CUSTOMER;

INSERT INTO CUSTOMER values('aaa', '손흥민','1992-03-17');

INSERT INTO CUSTOMER (id, name, birthday) 
VALUES ('bbb', '황희찬', '1997-11-01');
INSERT INTO CUSTOMER (id, name, birthday) 
VALUES ('ccc', '이강인', '2001-05-31');
INSERT INTO CUSTOMER (id, name, birthday) 
VALUES ('ddd', '조현우', '2001-05-31');

SELECT * FROM CUSTOMER;

CREATE TABLE ORDERLIST(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id) 
    ON UPDATE CASCADE ON DELETE CASCADE
);
-- FOREIGN KEY (현재테이블 컬럼이름) REFERENCES 기준테이블(기준테이블 컬럼이름)
-- ON UPDATE CASCADE: 기준 테이블(customer)의 데이터가 변경되면 참조 테이블(orderlist)의 데이터도 변경
-- ON DELETE CASCADE: 기준 테이블의 데이터 삭제되면 참조테이블의 데이터도 삭제됨

-- 테이블을 삭제할 때
-- fk-pk 관계로 연결된 테이블은 외래키가 설정된 테이블을 먼저 삭제
INSERT INTO ORDERLIST (customer_id, product_name, quantity) VALUES ('aaa', '맥북m1', 1);
INSERT INTO ORDERLIST (customer_id, product_name, quantity) VALUES ('bbb', '빅파이', 31);
INSERT INTO ORDERLIST (customer_id, product_name, quantity) VALUES ('ccc', '키보드', 3);
INSERT INTO ORDERLIST (customer_id, product_name, quantity) VALUES ('bbb', '초코파이', 5);
INSERT INTO ORDERLIST (customer_id, product_name, quantity) VALUES ('ccc', '귀여운텀블러', 1);

SELECT * FROM ORDERLIST;
--------- JOIN ---------
-- INNER JOIN
-- 1. INNER JOIN과 ON 사용
SELECT *
    FROM CUSTOMER
    INNER JOIN ORDERLIST
    ON CUSTOMER.id = ORDERLIST.customer_id;

-- 2. , 와 where 로 inner join 사용
SELECT ORDERLIST.id, CUSTOMER.id, CUSTOMER.name, ORDERLIST.product_name
    FROM CUSTOMER, ORDERLIST 
    WHERE CUSTOMER.id = ORDERLIST.customer_id;

-- 3. INNER JOIN, ON 사용, where 조건과 함께 사용
SELECT *
    FROM ORDERLIST INNER JOIN CUSTOMER
    ON CUSTOMER.id = ORDERLIST.customer_id;
    WHERE ORDERLIST.quantity >=5;

-- 4. TABLE 별칭으로 접근
SELECT O.id as order_id, C.id as customer_id, C.name, O.product_name
    FROM CUSTOMER as C, ORDERLIST as O
    WHERE C.id = O.customer_id;

-- OUTER JOIN
SELECT *
    FROM CUSTOMER LEFT OUTER JOIN ORDERLIST
    ON CUSTOMER.id = ORDERLIST.customer_id;

SELECT *
    FROM ORDERLIST RIGHT OUTER JOIN CUSTOMER
    ON CUSTOMER.id = ORDERLIST.customer_id;