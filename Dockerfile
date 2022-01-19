FROM node:14 as build-step
WORKDIR /app
COPY ./ecommerce-admin-web/package.json ./
RUN npm install

COPY ./ecommerce-admin-web/ ./
EXPOSE 4200 49153
CMD npm start