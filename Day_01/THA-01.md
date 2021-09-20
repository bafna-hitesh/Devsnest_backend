
# Redis installation

1. For Windows:-
- Enable WSL from "Turn Windows features on or off settings"
- Restart the machine
- Install Ubuntu20.04 from Windows Store
- Open Ubuntu and setup
- Then run following commands,
```bash
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install redis-server
```
- Once installed, you can start, stop, and restart the server:
```
$ sudo service redis-server start
$ sudo service redis-server stop
$ sudo service redis-server restart
```
2. For Linux:-
- run following command
```
$ sudo apt install redis-server
```
---

- for enter in redis use following command:-
```
redis-cli
```




