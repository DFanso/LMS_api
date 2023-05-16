## LMS API Documentation
This API documentation provides the details of the Learning Management System (LMS) API. The base URL for all the endpoints is `http://localhost:3000/api`.

## Student

## Register
Endpoint: `/student/register`   
Method: `POST`  
Body:  
```json
{
    "studentId": "S001",
    "username": "john_doe",
    "password": "password123",
    "name": "John Doe",
    "email": "john_doe@example.com",
    "phone": "1234567890",
    "address": "123 Street, City, Country",
    "nic": "123456789V",
    "faculty": "Engineering",
    "dob": "1990-01-01",
    "degree": "BSc in Computer Science",
    "batch": "2020"
}
```  
  
## Login  
Endpoint: `/student/login` 
Method: `POST`    
Body:  
```json
{
    "username": "john_doe",
    "password": "password123"
}
```
## Fetch Result
Endpoint: `/student/fetchResult`  
Method: GET  
Headers: Authorization: Bearer <token>  
    
## Lecturer
    
## Register  
Endpoint: `/lecturer/register`  
Method: `POST`    
Body:  
```json
    {
    "staffId": "123456",
    "name": "John Doe",
    "username": "johndoe",
    "password": "password",
    "email": "johndoe@example.com",
    "phone": "1234567890",
    "address": "123 Main St, City, Country",
    "dob": "1980-01-01",
    "faculty": "Faculty of Science",
    "role": "Lecturer",
    "nic": "123456789V"
}

```
    
## Login
Endpoint: `/lecturer/login`  
Method: `POST`    
Body:  
```json
    {
    "username": "johndoe",
    "password": "password"
}
```

## Add Result    
Endpoint: `/lecturer/AddResult`      
Method: `POST`        
Headers: Authorization: Bearer <token>      
Body:    
```json
    {
    "studentId": "64635195a764bd468d9a2d12",
    "BatchID": "test",
    "FacultyId": "test",
    "DegreeID": "test",
    "Type": "presentation",
    "Marks": "100"
}
```
    
## Lecture Schedules
    
## Create
Endpoint: `/lecture-schedules`  
Method: `POST`  
Body:
```json
 {
  "facultyName": "Faculty of Science",
  "degreeBatchName": "20.1",
  "date": "2023-06-01",
  "startTime": "09:00 AM",
  "endTime": "10:30 AM",
  "lectureHall": "Hall A",
  "lecturerName": "John Doe",
  "lectureModules": "Module 13",
  "degreeName": "Bachelor of Science"
}
```
    
## Get
Endpoint: `/lecture-schedules`
Method: `GET`
    
    
## Get by User
Endpoint: `/lecture-schedules/filter`  
Method: `GET`
Headers: Authorization: Bearer <token>  Get by User

    
## Faculty
Create
Endpoint: `/faculties`
Method: `POST`
Body:    
```json
{
  "name": "Faculty of Science"
}
```
## Get
Endpoint: `/faculties`
Method: `GET`   
    
## Degree Batch
    
## Create
Endpoint: `/degree-batches`  
Method: `POST`
Body:  
```json
{
  "name": "20.1"
}
```
## Get
Endpoint: `/degree-batches`  
Method: `GET`
    
## Degree
      
## Create
Endpoint: `/degrees`  
Method: `POST`  
Body:  
```json
{
  "name": "BSc in Computer Science"
}
```
   
## Get
Endpoint: `/degrees`  
Method: `GET`  
    
## Lecture Modules
    
## Create
Endpoint: `/lecture-modules`  
Method: `POST`  
Body:   
```json
{
  "name": "Module 13"
}
```
## Get
Endpoint: `/lecture-modules`
Method: `GET`
    
    
## Assignment
    
##Create
Endpoint: `/assignment`  
Method: `POST`  
Body:  
```json
{
  "title": "Assignment 1",
  "batch": "20.1",
  "degree": "Bachelor of Science",
  "moduleName": "Module 1",
  "category": "assignment",
  "file": "<file_path>"
}
```
    
## Get
Endpoint: `/assignment/student`  
Method: `GET`  
Headers: Authorization: Bearer <token>  
    
## Please replace <token> with the actual token received after successful login and <file_path> with the actual file path for the assignment file.
