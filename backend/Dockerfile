FROM node:22-alpine3.19

RUN addgroup app && adduser -S -G app app

WORKDIR /app
COPY package*.json ./
RUN npm install -g nodemon
RUN npm install
COPY . .

USER app

EXPOSE 3001

CMD ["nodemon", "server.js"]

