FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8040

EXPOSE 8040

CMD [ "node", "src/server.js" ]