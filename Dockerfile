FROM node:latest

CMD ["node", "index.js"]

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080