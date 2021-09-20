<!-- ITS ME JUST PRACTICE SQL AND FOREIGN KEYS -->

Server [localhost]:
Database [postgres]:
Port [3000]:
Username [postgres]:
Password for user postgres:
psql (13.4)
WARNING: Console code page (437) differs from Windows code page (1252)
         8-bit characters might not work correctly. See psql reference
         page "Notes for Windows users" for details.
Type "help" for help.

postgres=# CREATE USER devsnest WITJ PASSWORD 'abcd';
ERROR:  unrecognized role option "witj"
LINE 1: CREATE USER devsnest WITJ PASSWORD 'abcd';
                             ^
postgres=# CREATE USER devsnest WITH PASSWORD 'abcd';
CREATE ROLE
postgres=# CREATE DATABASE devs;
CREATE DATABASE
postgres=# DROP DATABASE IF EXISTS devs;
DROP DATABASE
postgres=# \l
                                         List of databases
   Name    |  Owner   | Encoding |      Collate       |       Ctype        |   Access privileges
-----------+----------+----------+--------------------+--------------------+-----------------------
 postgres  | postgres | UTF8     | English_India.1252 | English_India.1252 |
 template0 | postgres | UTF8     | English_India.1252 | English_India.1252 | =c/postgres          +
           |          |          |                    |                    | postgres=CTc/postgres
 template1 | postgres | UTF8     | English_India.1252 | English_India.1252 | =c/postgres          +
           |          |          |                    |                    | postgres=CTc/postgres
(3 rows)


postgres=# CREATE DATABASE devs;
CREATE DATABASE
postgres=# \c devs;
You are now connected to database "devs" as user "postgres".
devs=#

------------------------------------------------------------------------------------------------------------------------------

<!-- Creating tables -->

devs=# CREATE TABLE COMPANY(
devs(# ID INT NOT NULL,
devs(# NAME TEXT NOT NULL,
devs(# AGE INT NOT NULL,
devs(# ADDRESS CHAR(50),
devs(# SALARY REAL
devs(# );
CREATE TABLE
devs=# \d
          List of relations
 Schema |  Name   | Type  |  Owner
--------+---------+-------+----------
 public | company | table | postgres
(1 row)


devs=# CREATE TABLE DEPARTMENT(
devs(# ID INT NOT NULL,
devs(# DEPT CHAR(50) NOT NULL,
devs(# EMP_ID INT NOT NULL
devs(# );
CREATE TABLE
devs=# \D
invalid command \D
Try \? for help.
devs=# \d
           List of relations
 Schema |    Name    | Type  |  Owner
--------+------------+-------+----------
 public | company    | table | postgres
 public | department | table | postgres
(2 rows)

@@ Note:- We create this 👆 table in drive @@

------------------------------------------------------------------------------------------------------------------------------

<!-- SCHEMA LIKE FOLDER IN DRIVE(DATABASAE) -->
<!-- CREATE TABLE IN SCHEMA -->
devs=# CREATE SCHEMA mySchema;
CREATE SCHEMA
devs=# CREATE TABLE mySchema.company(
devs(# ID INT NOT NULL,
devs(# NAME VARCHAR(20) NOT NULL,
devs(# AGE INT NOT NULL,
devs(# ADDRESS CHAR(25),
devs(# SALARY DECIMAL(18,2),
devs(# PRIMARY KEY(ID)
devs(# );
CREATE TABLE
devs=# \d
           List of relations
 Schema |    Name    | Type  |  Owner
--------+------------+-------+----------
 public | company    | table | postgres
 public | department | table | postgres
(2 rows)

devs=# SELECT * FROM mySchema.company;
 id | name | age | address | salary
----+------+-----+---------+--------
(0 rows)

- FOR DELETE SCHEMA:-
devs=# DROP SCHEMA mySchema CASCADE;
NOTICE:  drop cascades to table myschema.company
DROP SCHEMA
devs=#
@@ NOTE:- CASCADE delete folder with his content @@

- INSERT DATA IN TABLE:-
devs=# INSERT INTO COMPANY(ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES('2','SMITH',25,'CALIFORNIA',15000,'21-07-28');
INSERT 0 1
devs=# INSERT INTO COMPANY(ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES('2','BEN',22,'NY',18000,'21-07-28');
INSERT 0 1
devs=# SELECT * FROM company;
 id | name  | age |                      address                       | salary | join_date
----+-------+-----+----------------------------------------------------+--------+------------
  1 | PAUL  |  27 | TEXES                                              |  20000 | 2029-08-21
  2 | SMITH |  25 | CALIFORNIA                                         |  15000 | 2028-07-21
  2 | BEN   |  22 | NY                                                 |  18000 | 2028-07-21
(3 rows)

------------------------------------------------------------------------------------------------------------------------------

<!-- PRACTICE SELCET KEYWORD -->

devs=# SELECT (2+4) AS ADDITION;
 addition
----------
        6
(1 row)


devs=# SELECT COUNT(*) AS "RECORDS" FROM COMPANY;
 RECORDS
---------
       3
(1 row)


devs=# SELECT CURRENT_TIMESTAMP;
        current_timestamp
----------------------------------
 2021-09-18 19:18:06.713126+05:30
(1 row)


devs=# SELECT *FROM WHERE AGE>21 AND SALERY >15000;
ERROR:  syntax error at or near "WHERE"
LINE 1: SELECT *FROM WHERE AGE>21 AND SALERY >15000;
                     ^
devs=# SELECT * FROM COMPANY WHERE AGE>21 AND SALERY >15000;
ERROR:  column "salery" does not exist
LINE 1: SELECT * FROM COMPANY WHERE AGE>21 AND SALERY >15000;
                                               ^
HINT:  Perhaps you meant to reference the column "company.salary".
devs=# SELECT * FROM COMPANY WHERE AGE>21 AND SALARY >15000;
 id | name | age |                      address                       | salary | join_date
----+------+-----+----------------------------------------------------+--------+------------
  1 | PAUL |  27 | TEXES                                              |  20000 | 2029-08-21
  2 | BEN  |  22 | NY                                                 |  18000 | 2028-07-21
(2 rows)


devs=# SELECT * FROM COMPANY WHERE AGE>21 OR SALARY >15000;
 id | name  | age |                      address                       | salary | join_date
----+-------+-----+----------------------------------------------------+--------+------------
  1 | PAUL  |  27 | TEXES                                              |  20000 | 2029-08-21
  2 | SMITH |  25 | CALIFORNIA                                         |  15000 | 2028-07-21
  2 | BEN   |  22 | NY                                                 |  18000 | 2028-07-21
(3 rows)


devs=# SELECT * FROM COMPANY WHERE AGE NOT NULL;
ERROR:  syntax error at or near "NOT"
LINE 1: SELECT * FROM COMPANY WHERE AGE NOT NULL;
                                        ^
devs=# SELECT * FROM COMPANY WHERE AGE IS NOT NULL;
 id | name  | age |                      address                       | salary | join_date
----+-------+-----+----------------------------------------------------+--------+------------
  1 | PAUL  |  27 | TEXES                                              |  20000 | 2029-08-21
  2 | SMITH |  25 | CALIFORNIA                                         |  15000 | 2028-07-21
  2 | BEN   |  22 | NY                                                 |  18000 | 2028-07-21
(3 rows)


devs=# SELECT * FROM COMPANY WHERE NAME LIKE 'P%';
 id | name | age |                      address                       | salary | join_date
----+------+-----+----------------------------------------------------+--------+------------
  1 | PAUL |  27 | TEXES                                              |  20000 | 2029-08-21
(1 row)


devs=# SELECT * FROM COMPANY WHERE NAME LIKE 'P_';
 id | name | age | address | salary | join_date
----+------+-----+---------+--------+-----------
(0 rows)


devs=# SELECT * FROM COMPANY WHERE NAME LIKE 'P_L';
 id | name | age | address | salary | join_date
----+------+-----+---------+--------+-----------
(0 rows)


devs=# SELECT * FROM COMPANY WHERE NAME LIKE 'P_UL';
 id | name | age |                      address                       | salary | join_date
----+------+-----+----------------------------------------------------+--------+------------
  1 | PAUL |  27 | TEXES                                              |  20000 | 2029-08-21
(1 row)


devs=# SELECT * FROM COMPANY WHERE NAME LIKE 'P_L';
 id | name | age | address | salary | join_date
----+------+-----+---------+--------+-----------
(0 rows)


devs=# SELECT * FROM COMPANY WHERE NAME LIKE 'S_M%';
 id | name | age | address | salary | join_date
----+------+-----+---------+--------+-----------
(0 rows)


devs=# SELECT * FROM COMPANY WHERE NAME LIKE 'S_I%';
 id | name  | age |                      address                       | salary | join_date
----+-------+-----+----------------------------------------------------+--------+------------
  2 | SMITH |  25 | CALIFORNIA                                         |  15000 | 2028-07-21
(1 row)


devs=# SELECT * FROM COMPANY WHERE SALARY LIKE '1500%';
ERROR:  operator does not exist: real ~~ unknown
LINE 1: SELECT * FROM COMPANY WHERE SALARY LIKE '1500%';
                                           ^
HINT:  No operator matches the given name and argument types. You might need to add explicit type casts.
devs=# SELECT * FROM COMPANY WHERE SALARY::text LIKE '1500%';
 id | name  | age |                      address                       | salary | join_date
----+-------+-----+----------------------------------------------------+--------+------------
  2 | SMITH |  25 | CALIFORNIA                                         |  15000 | 2028-07-21
(1 row)


devs=# SELECT * FROM COMPANY WHERE AGE IN (21,25);
 id | name  | age |                      address                       | salary | join_date
----+-------+-----+----------------------------------------------------+--------+------------
  2 | SMITH |  25 | CALIFORNIA                                         |  15000 | 2028-07-21
(1 row)


devs=# SELECT * FROM COMPANY;
 id | name  | age |                      address                       | salary | join_date
----+-------+-----+----------------------------------------------------+--------+------------
  1 | PAUL  |  27 | TEXES                                              |  20000 | 2029-08-21
  2 | SMITH |  25 | CALIFORNIA                                         |  15000 | 2028-07-21
  2 | BEN   |  22 | NY                                                 |  18000 | 2028-07-21
(3 rows)


devs=# SELECT * FROM COMPANY LIMIT 4;
 id | name  | age |                      address                       | salary | join_date
----+-------+-----+----------------------------------------------------+--------+------------
  1 | PAUL  |  27 | TEXES                                              |  20000 | 2029-08-21
  2 | SMITH |  25 | CALIFORNIA                                         |  15000 | 2028-07-21
  2 | BEN   |  22 | NY                                                 |  18000 | 2028-07-21
(3 rows)


devs=# SELECT * FROM COMPANY LIMIT 2;
 id | name  | age |                      address                       | salary | join_date
----+-------+-----+----------------------------------------------------+--------+------------
  1 | PAUL  |  27 | TEXES                                              |  20000 | 2029-08-21
  2 | SMITH |  25 | CALIFORNIA                                         |  15000 | 2028-07-21
(2 rows)


devs=# SELECT * FROM COMPANY LIMIT 3 OFFSET 2;
 id | name | age |                      address                       | salary | join_date
----+------+-----+----------------------------------------------------+--------+------------
  2 | BEN  |  22 | NY                                                 |  18000 | 2028-07-21
(1 row)


devs=# SELECT * FROM COMPANY ORDER BY NAME DESC;
 id | name  | age |                      address                       | salary | join_date
----+-------+-----+----------------------------------------------------+--------+------------
  2 | SMITH |  25 | CALIFORNIA                                         |  15000 | 2028-07-21
  1 | PAUL  |  27 | TEXES                                              |  20000 | 2029-08-21
  2 | BEN   |  22 | NY                                                 |  18000 | 2028-07-21
(3 rows)


---------------------------------------------------------------------------------------------------------------------

<!-- PRACTICE UPDATE AND DELETE -->

devs=# SELECT * FROM COMPANY;
 id | name  | age |                      address                       | salary | join_date
----+-------+-----+----------------------------------------------------+--------+------------
  1 | PAUL  |  27 | TEXES                                              |  20000 | 2029-08-21
  2 | SMITH |  50 | CALIFORNIA                                         |  15000 | 2028-07-21
  2 | BEN   |  50 | NY                                                 |  18000 | 2028-07-21
(3 rows)


devs=# DELETE FROM COMPANY WHERE ID=2;
DELETE 2
devs=# SELECT * FROM COMPANY;
 id | name | age |                      address                       | salary | join_date
----+------+-----+----------------------------------------------------+--------+------------
  1 | PAUL |  27 | TEXES                                              |  20000 | 2029-08-21
(1 row)


devs=# UPDATE COMPANY SET ID=2 WHERE ID=1;
UPDATE 1
devs=# SELECT * FROM COMPANY;
 id | name | age |                      address                       | salary | join_date
----+------+-----+----------------------------------------------------+--------+------------
  2 | PAUL |  27 | TEXES                                              |  20000 | 2029-08-21
(1 row)


devs=#

------------------------------------------------------------------------------------------------------------------------------

<!-- FOREIGN KEYS -->

postgres=# CREATE TABLE customers( postgres(# customer_id INT GENERATED ALWAYS AS IDENTITY, postgres(# customer_name VARCHAR(255) NOT NULL, postgres(# PRIMARY KEY(customer_id) postgres(# ); CREATE TABLE

postgres=# CREATE TABLE contacts( postgres(# contact_id INT GENERATED ALWAYS AS IDENTITY, postgres(# customer_id INT, postgres(# contact_name VARCHAR(255) NOT NULL, postgres(# phone VARCHAR(15), postgres(# email VARCHAR(100), postgres(# PRIMARY KEY(contact_id), postgres(# CONSTRAINT fk_customer postgres(# FOREIGN KEY(customer_id) postgres(# REFERENCES customers(customer_id) postgres(# ); CREATE TABLE

















