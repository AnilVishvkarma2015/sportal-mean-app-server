# sportal-mean-app-server
Background

Student Portal is a web application which provide web based student activity management system for all college/school students in order to introduce more reliability and transparency in information exchange activities e.g. exam notification, gate pass details and many more.  This application will be implement as MEAN/Full Stack application followed by MVC architecture. This will be a RESTful web service.

Goal

The objective is to develop a RESTful web application that can be easily adopted by customer (student/college/school) to make the educational processes/activities faster, safer and maintainable. 
The framework should be built in a way that ensures lower maintenance efforts and maximum re-usability.

Use Cases

Application is designed to provide user specific functionality. There will be two users of this application. 

Admin
	Can enroll the students with unique registration number.
	Can send email to all students with their registration number to register on portal using it
	Can post/publish any notification/exam time table/change in faculty/exam gate pass/circular on the portal.
	Can block the account of any student. 
	Can approve or reject the leave applied by student.
	Can change or reset their password

Student
	Can register themselves using registration number provided by admin
	Can change or reset their password
	Can apply for the leave.
	Can update their profile details
	Can download exam time table/exam gate pass.

Project Implementation

Below are the technical specifications, will to be used in application development – 

Front End	Angular 7
Back End	Node JS
Design Tool	Angular Material or Bootstrap
Code Repository	Git Hub
IDE	VS Code
Database	MongoDB
Deployment Server	Heroku

Server and client apps will be individually deployed on Heroku cloud and communicates between them will be established through REST API call over HTTP protocol. 
 
Application Deployment

Code for client and server app will be maintain at git repository. For each small functionality a new pull request will be open and once that pull request will merge to the master repository latest code will be automatically deployed to the cloud. Automatic deployment from git will be configured. 
Url of the application will be shared once the development will be finished.

Application Testing
Once the application will be hosted on cloud with all functionality a basic testing will be carried out postman to check each functionality. Postman will be used for this testing specially the CRUD operations. 
