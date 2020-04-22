# QHTTP

Its still in initial development so there might be bugs. But this version is fully functional. Please feel free to report the bugs at onlysumitg@gmail.com 

### About QHTTP
QHTTP simply allow you to expose any DB2 for I stored procedure as a Restful Web Service. 

### Requirements
- IBM I&reg; of course. 
- Java 8+.
- QHTTP uses [Eclipse Jetty](https://www.eclipse.org/jetty/ "Eclipse Jetty") as the server. 
  - So it can be installed on any server (including IBM I) /pc that has java &reg; installed.
  - Never got a change to install and test on IBM I.



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


# Next Step
- Expose SQL queries as services.


 
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


# Login
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0001000.PNG "Login")


- User Name: Admin
- Password: AdminPass

# 1. Add a server
![AddServer](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0002000.PNG "Add_Server")


![Server](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0003000.PNG "Server")

- Add required details for server. 
- Setup job libl if required.


![Sercer](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0004000.PNG "Server")

- Server setup is done
- Long press on server item to check the server usages.


# 2. Add a new service

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0005000.PNG "Login")


![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0006000.PNG "Login")

- Enter required details
- Click Test & Save
- It will load the stored procedure details from the server.

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0007000.PNG "Login")

- After saving "Open Api specs" button will be enabled

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0007100.PNG "Login")


- Enter test values for IN and INOUT paramters
- click "view IN/OUT" to check a sample.

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0008000.PNG "Login")

# 3. Create a new service group.

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0009000.PNG "Login")



![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0010000.PNG "Login")

- add webservice to the group.

# 4. Create a new user.
 
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0011000.PNG "Login")


 
![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0012000.PNG "Login")

- Give user access to the group. (One user can have multiple groups).

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0013000.PNG "Login")

- Click save to generate a user token
- Click on token to copy.

  
# Testing time with Swagger UI.

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0014000.PNG "Login")

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0015000.PNG "Login")

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0016000.PNG "Login")

 
# Testing time with Postman  

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0017000.PNG "Login")

# Log entries.

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0018000.PNG "Login")

![Login](https://github.com/onlysumitg/qhttp_setup/blob/master/images/0019000.PNG "Login")





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
- for system level configurations Like JWT key and SSL.

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

 
