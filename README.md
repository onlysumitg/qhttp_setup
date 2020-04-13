# QHTTP

Its still in initial development so there might be bugs. But this version is fully functional. Please feel free to report the bugs at onlysumitg@gmail.com 

###About QHTTP
QHTTP simply allow you to expose any DB2 for I stored procedure as a  Restful Web Service. 

### Requirements
- IBM I&reg; of course. 
- QHTTP uses [Eclipse Jetty](https://www.eclipse.org/jetty/ "Eclipse Jetty") as the server. So it can be installed on any server/pc that has java &reg; installed.


#### Features
- Simple setup and interface.
- Dont need any special code inside the DB2 for I stored procedure.
- It can be used with any existing DB2 for I stored procedure.
- It can be installed on NON IBM i systems. You can install it on your pc also.
- It can connect to mutiple IBM i systems.
- and other stuff that I dont remeber right now :)



 
# Installation



# Setup

Setup need 4 steps:
1. Add an IBM I server.
2. Configure a SP as webservice.
3. Create a web services group.
4. Assign the web services group to a user.


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


![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00500.png "Login")

- Server setup is done


![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00600.png "Login")

- Add a new web service

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00700.png "Login")

- Enter required details
- Click Test & Save
- It will load the stored procedure details from the server.

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00800.png "Login")

- Enter test values for IN and INOUT paramters
- click "view IN/OUT" to check a sample.


![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00900.png "Login")

- Create a web service group.

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00910.png "Login")

- add webservice to the group.

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00920.png "Login")

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00930.png "Login")

- create a new user.

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00940.png "Login")


![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00950.png "Login")

- Give user access to the group. (One user can have multiple groups).


- Click save to generate a user token
- Click on token to copy.

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/00980.png "Login")
 
 
 
- Testing time with Postman (or any other tool).

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/01100.png "Login")
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/01200.png "Login")
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/01300.png "Login")

- Log entries.

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/02100.png "Login")
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/02200.png "Login")




# H2 Embedded Database
- QHTTP uses Encrypted H2 Embedded Database 
- db.properties files contains the default database setup.
- These propertis can be changed based on the requirement. 
- http://www.h2database.com/html/features.html#file_encryption.

# SSL
- A self signed SSL certificate is already included with qhttp.jks keystore.
- To enable SSL, change system.proerties "ssl=Y".
- For more details please refer: https://www.eclipse.org/jetty/documentation/current/configuring-ssl.html .

# system.properties
- for system level configurations Like JWT key and SSL
 

# Predefined IN/INOUT parameters.
- You can define IN or INOUT parameter with following names to receive the request data
- http_request_method
- http_request_url
- http_request_endpoint
- http_request_ip
- http_request_port
- http_request_protocol
- http_request_username
- http_request_useragent


 

**Table of Contents**

[TOCM]

[TOC]
