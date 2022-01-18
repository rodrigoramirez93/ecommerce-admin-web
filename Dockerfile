# Stage 1
FROM node:14-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY ./ecommerce-admin-web/package.json /app
RUN npm install
RUN ls
COPY ./ecommerce-admin-web/ /app
RUN ls
RUN npm run build --development

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/ecommerce-admin-web /usr/share/nginx/html
