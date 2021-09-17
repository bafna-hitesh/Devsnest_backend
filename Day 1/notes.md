<h1>Redis:-</h1>
<ul>
redis is cache,
is a key-value pair where value is always "string",
its store js object {key: "value"},
</ul>
<ol>
SET
GET
DEL
EXISTS (if 1 is exists, if 0 is not exists)
KEYS * (from that i get all list of keys )
FLUSHALL(for del all key)

when we set key we have to set his expiration:-
</ol>
<ul>
setex key value or expire key value  //syntax
ttl key (for know the how much expiration time is left)
</ul>
<br>

<h2>how to deal with array in redis:-</h2>
<ul>
lpush (at initial place means index 0)
lpush key value //syntax,

rpush (for queue)
rpush key value (for insert element after 0 index place),

lpop(for remove 0 index element)
rpop(for remove rather than 0 index),

LRANGE key 0 -1 (for print arrray).
</ul>
<br>
<h2>SADD:-</h2>
<ul>
SADD is array where we not repeat any element
SMEMBERS key (for print SADD array).
</ul>
<br>
<h2>object:- </h2>
<ol>
HSET key1 key2 value //key1 is object name

    key1:{
        key2:"value"
    }

HGET key1 key2
HGETALL key1
HDEL 
HEXISTS
</ol>

<h1>postgres:-</h1>
postgres is database,
postgres work on user,
<ol>
-psqual -u == To enter in postgress ( we have to provide user name and password )
-CREATE USER WITH PASSWORD '123456'; ==	to create user name and password
-CREATE DATABASE devs == To create database
-\l	List all available databases
</ol>




