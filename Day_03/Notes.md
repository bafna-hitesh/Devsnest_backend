# redis explanation of messing systeam

- The sender send msg is know as "publisher"(pub) and msg who recieve is know as "subscriber"(sub),
- There are multi subscriber,
- The link by which msg transferred is know as "channel"

1. Publisher :- 
```
PUBLISH < channel name >
PUBLISH devsnest hello
```
2. Subscribe
```
SUBCRIBE <channel_name>

("MESSAGE" , "DEVSENEST","HELLO")

```
3. Multiple Subcriber
```
 PSUBSCRIBE d* (SUBCRIBE TO EVERY PUBLISHERS STARTING WITH d)
 UNSUBCRIBE devsnest //UNSUBCRIBE FROM CHANNEL
 PUNSUBSCRIBE d*
```
4. Redis Streams
- We can save stream in history pipeline (like chats in yt/whatapp)
```
 XADD <stream_name> <ID> <KEY> <VALUE >
 XADD mystream     10000 name  mafiya
 XADD mystream     10001 name  aqua
 XADD mystream     10002 name  gabber
```
- Auto generating id (based on time stamp)
```
 XADD mystream * name hitesh
 XADD mystream * name bafna
```
- Limit the value of stack(means stack isnt grt overflow), Add new value and last value will be deleted
```
XADD mystream MAXLEN 1000 * name devs
```
- [count] How many rows i want
```
 XREAD COUNT 200 STREAMS mystream 0
 XREAD COUNT 2 STREAMS mystrem 1002-0 //get two rows after id 1002-0
```
- If user is not active/online for some time close the stream
```
 XREAD BLOCK 10000 STREAMS mystream 0 $
 (if there is no message in stream before 10000 mili second i.e 10sec it will block)

 XREAD BLOCK 0 STREAMS mystream 1002-0
 (it will never disconnect & all message from that id will show)
```
- looping through stream id
```

 XRANGE mystream    10001-0  1630334456611-0
 (XRANGE mystream  <start id>    <end id>)

 XRANGE mystream 10001-0 1630334456611-0 COUNT 3
 (count only specific{COUNT 3} rows between  <start id> <end id>)
```
- If don't know start and end and I want to read
```
 XRANGE mystream - + COUNT 2
 (it will read from 1st to last gives first 2 values)
```
```
-last to first 
 XREVRANGE mystream + - COUNT 2
 (it will read from last to 1st gives first 2 values)
```


