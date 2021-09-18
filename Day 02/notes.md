- Database is like drive
- We make folder in database for organise data and we give specific access means its not interfer with another folder
- folder means "SCHEMA" in postgres:-
```
CREATE SCHEMA mySchema;
```
- For cretaing table in schema:-
```
CREATE TABLE mySchema.company(
```    

CASCADE is use to delete folder with his content

```
DROP SCHEMA mySchema CASCADE;
```

INSERT INTO COMPANY (ID,NAME,AGE,SALARY,)

 Want to see all data:-
```
SELECT * FROM COMPANY;
```
Want to see data with some query:-
- We do some arithmatic operationlike,
```
SELECT (15+2) as addition
```
- 
```
SELECT COUNT(*)AS "RECORDS" FROM COMPANY;
```
```
SELECT CURRENT_TIMESTAMP;
```
- We do some IF condition(BY USING WHERE) (AND,OR,NOT NULL,NULL)
```
SELECT * FROM COMPANY WHERE AGE>=25 AND SALARY >= 65000;
```
- Others query:-
```
SELECT * FROM COMPANY WHERE NAME LIKE 'P%'(% MEANS anything after p),
ANOTHER TYPE,
'p_ul'(_ means blank),
'D_v%'(starting with d, anything after that, then v,the any character)
``` 
-- For change data type use "::"
```
SELECT * FROM COMPANY WHERE AGE BETWEEN 25,27;

SELECT * FROM COMPANY WHERE AGE IN (25,27);

SELECT * FROM COMPANY WHERE AGE NOT IN (25,27);
```

<h1>Update:-</h1>
```
UPDATE COMPANY SET SALARY =15000 WHERE ID=3;
```
```
UPDATE COMPANY SET ADDRESS="Texax", SALARY =15000 WHERE ID=3;
```
- For delete row:-
```
DELETE FROM COMPANY WHERE ID=2;
```

# foreign key
Is a connector that connect one table to another table.
- For set foreign key:-
```
CONSTRAINT foreign_key_customer
FOREIGN KEY(customer_id)
REFERENCE customers(customer_id)
ON DELETE CASCADE
```

