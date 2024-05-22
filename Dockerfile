FROM node:16

CMD ["node", "index.js"]

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 2000