# **Employee Api**

## _Documentation_

> To start it off, we must do the following:

```sh
npm install
npm start
```

> For running the app using docker you might have installed docker on your system. If you have not it <a href="https://docs.docker.com/engine/install/">Click Here</a>. After it, you should run this commands to start the container: 

```bash

#Create the image with node
docker build . -t employee-api-node

#Starts the container with the API image
docker run -p 3000:3000 -d employee-api-node

#After that the app runs on the port 3000. To check it: 
docker ps #Copy the container id

docker logs <container-id>

```

## Endpoints

Use the following endpoints to get or create the resources whatever you want.

##### baseUrl = http://localhost:3000/api

| Method | URL |
| ------ | ------ |
| GET | {{baseUrl}}/v1/employees |
| GET | {{baseUrl}}/v1/employees/:employeeId |
| POST | {{baseUrl}}/v1/employees |
| PATCH | {{baseUrl}}/v1/employees/:employeeId |
| DELETE | {{baseUrl}}/v1/employees/:employeeId |
| POST | {{baseUrl}}/v1/register |

To be able to create, update or delete a resource, it is necessary to register an user. Use the following endpoint:
##### | POST | {{baseUrl}}/v1/register |
You can register an user with data that you want.
{
    "email": "someone@gmail.com",
    "password": "mypassword"
}

After creating an user, you need to take the accessToken and use it as a header to create, update and delete information. (Authorization Bearer <token>).

On the other hand, you can filter data using query strings.

| Method | URL |
| ------ | ------ |
| GET | {{baseUrl}}/v1/employees |
| GET | {{baseUrl}}/v1/employees?departamento=Desarrollo |

## Swagger

#### Version 1 Docs are available at http://localhost:3000/api/v1/docs

http://localhost:3000/api/v1/docs/

## Postman Collection

In the following link you can find the postman collection for API tests:

#### Postman Collection: https://elements.getpostman.com/redirect?entityId=20453127-26c43f38-030d-4456-ad33-e010d42319c4&entityType=collection

