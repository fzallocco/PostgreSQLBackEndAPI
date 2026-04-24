FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build
RUN npm run migrate

CMD ["npm", "start"]