FROM node:alpine

RUN mkdir /employee-api

WORKDIR /employee-api

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]