FROM node:18-buster-slim

WORKDIR /react

COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build
