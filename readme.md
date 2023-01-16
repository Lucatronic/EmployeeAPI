# **Employees Api**

## _Documentation_

> To start it off, we must do the following:

```sh
npm install
npm start
```

> For running the app using docker you might have installed docker on your system. If you have not it <a href="https://docs.docker.com/engine/install/">Click Here</a>. After it, you should run this commands to start the container: 

```bash

#Create the image with node
docker build . -t crossfit-wod-api-node

#Starts the container with the API image
docker run -p 3000:3000 -d crossfit-wod-api-node

#After that the app runs on the port 3000. To check it: 
docker ps #Copy the container id

docker logs <container-id>

```

## Endpoints

Use the following endpoints to get or create the resources whatever you want.

##### baseUrl = http://localhost:3002/api

| Method | URL |
| ------ | ------ |
| GET | {{baseUrl}}/movies |
| GET | {{baseUrl}}/movies/:movieId |
| POST | {{baseUrl}}/movies |
| PUT | {{baseUrl}}/movies/:movieId |
| DELETE | {{baseUrl}}/movies/:movieId |
| POST | {{baseUrl}}/register |

To be able to create, update or delete a resource, it is necessary to register an user. Use the following endpoint:
##### | POST | {{baseUrl}}/register |
You can register an user with data that you want.
{
    "email": "someone@gmail.com",
    "password": "mysupersecretpassword"
}

After creating an user, you need to take the accessToken and use it as a header to create, update and delete information. (Authorization Bearer <token>).

On the other hand, you can filter data using query strings.

| Method | URL |
| ------ | ------ |
| GET | {{baseUrl}}/movies |
| GET | {{baseUrl}}/movies?title=American |
| GET | {{baseUrl}}/movies?genre=Drama |
| GET | {{baseUrl}}/movies?title=Equalizer&genre=Action |

## Postman Collection

https://elements.getpostman.com/redirect?entityId=20453127-26c43f38-030d-4456-ad33-e010d42319c4&entityType=collection

