FROM node:18.17.1-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent 

RUN npm i

COPY . /app

CMD [ "npm", "start" ]