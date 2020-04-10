# QHTTP

Its still in initial development so there might be bugs. But this version is fully functional. Please feel free to report the bugs at onlysumitg@gmail.com 

###About QHTTP
QHTTP simply allow you to expose any DB2 for I stored procedure as a  Restful Web Service. 

### Requirements
- IBM I&reg; of course. 
- QHTTP uses [Eclipse Jetty](https://www.eclipse.org/jetty/ "Eclipse Jetty") as the server. So it can be installed on any server/pc that has javaI&reg; installed.


#### Features
- Simple setup and interface.
- Dont need any special code inside the DB2 for I stored procedure.
- It can be used with any existing DB2 for I stored procedure.
- It can be installed on NON IBM i systems. You can install it on your pc also.
- It can connect to mutiple IBM i systems.
- and other stuff that I dont remeber right now :)



 
# Installation



#Setup
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00100.png "Login")
- Login
- User Name: Admin
- Password: AdminPass

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00200.png "Login")
- Add a server

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00300.png "Login")


![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00400.png "Login")
- Add required details for server. 
- Setup job libl if required.


![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00500.png "Login
- Server setup is done


![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00600.png "Login")
- Add a new web service

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00700.png "Login")
- Enter required details


![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00800.png "Login")
- Enter test values for IN and INOUT paramters
- click "view IN/OUT" to check a sample


![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00900.png "Login")

- Create a web service group
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00910.png "Login")

- add webservice to the group
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00920.png "Login")
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00930.png "Login")

- create a new user
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00940.png "Login")


![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00950.png "Login")

- Give user access to the group. (One user can have multiple groups)
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00960.png "Login")

- Click on token to copy
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00980.png "Login")
 
 
 
- Testing time with Postman (or any other tool)
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/01100.png "Login")
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/01200.png "Login")
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/01300.png "Login")

- Log entries
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/02100.png "Login")
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/02200.png "Login")



 

**Table of Contents**

[TOCM]

[TOC]
