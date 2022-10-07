# STAGE 1 BUILD REACT
FROM node:16.17.0-buster-slim as build

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build

# STAGE 2
FROM nginx
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=build /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
