FROM node:14.20.0-alpine3.15

COPY . .

RUN npm install

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]