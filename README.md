# QHTTP

Its still in initial development so there might be bugs. But this version is fully functional. Please feel free to report the bugs at onlysumitg@gmail.com 

###About QHTTP
QHTTP simply allow you to expose any DB2 for I stored procedure as a  Restful Web Service. 

### Requirements
- IBM I&reg; of course. 
- Java 8+.
- QHTTP uses [Eclipse Jetty](https://www.eclipse.org/jetty/ "Eclipse Jetty") as the server. So it can be installed on any server/pc that has java &reg; installed.



#### Features
- Simple setup and interface.
- Dont need any special code inside the DB2 for I stored procedure.
- It does not require any web server (like Apache) on IBM i.
- It can be used with any existing DB2 for I stored procedure.
- It can be installed on NON IBM i systems. You can install it on your pc also.
- It can connect to mutiple IBM i systems.
- UI is completly independent of the backend. So its easy to create your own UI.
- Integrated with Open API.
- and other stuff that I dont remeber right now :)



 
# Installation
- Download and unzip the zip file
- Click on QHTTP.JAR 
OR
- user this command from command line: java -jar QHTTP.JAR



# Setup

Setup need 4 steps:
1. Add an IBM I server.
2. Configure a SP as webservice.
3. Create a web services group.
4. Assign the web services group to a user.


# Setup Example

This is a sample SP with IN/INOUT and OUT parameters and 2 resultsets.

![SP](https://github.com/onlysumitg/qhttp_setup/blob/master/images/SP.PNG "SP")


![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0001000.png "Login")

- Login
- User Name: Admin
- Password: AdminPass

![AddServer](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0002000.png "Add_Server")
- Add a server

![Server](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0003000.png "Server")

- Add required details for server. 
- Setup job libl if required.


![Sercer](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0004000.png "Server")

- Server setup is done
- Long press on server item to check the server usages.


![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0005000.png "Login")

- Add a new web service

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0006000.png "Login")

- Enter required details
- Click Test & Save
- It will load the stored procedure details from the server.

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0007000.png "Login")

- Enter test values for IN and INOUT paramters
- click "view IN/OUT" to check a sample.

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0007100.png "Login")

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0008000.png "Login")



![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0009000.png "Login")

- Create a web service group.

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0010000.png "Login")

- add webservice to the group.

 
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0011000.png "Login")

- create a new user.
 
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0012000.png "Login")

- Give user access to the group. (One user can have multiple groups).

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0013000.png "Login")

- Click save to generate a user token
- Click on token to copy.

  
- Testing time with Swagger UI.

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0014000.png "Login")

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0015000.png "Login")

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0016000.png "Login")

 
- Testing time with Postman  

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0017000.png "Login")

- Log entries.

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0018000.png "Login")

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0019000.png "Login")





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

# openapi.properties
- configuration related to OPEN API. 

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

 
