### LMS API Documentation
This API documentation provides the details of the Learning Management System (LMS) API. The base URL for all the endpoints is http://localhost:3000/api.

## Student

## Register
Endpoint: /student/register   
Method: POST  
Body:  
``
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
``  
  
## Login  
Endpoint: /student/login  
Method: POST  
Body:  
``
{
    "username": "john_doe",
    "password": "password123"
}
``
