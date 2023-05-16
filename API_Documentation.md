### LMS API Documentation
This API documentation provides the details of the Learning Management System (LMS) API. The base URL for all the endpoints is `http://localhost:3000/api`.

### Student

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
    
### Lecturer
    
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
    
 ### Lecture Schedules   
    

