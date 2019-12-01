FROM node:alpine

WORKDIR /app

COPY . .

EXPOSE 9890

CMD node server.js

