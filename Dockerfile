# Importing the base image
FROM node as Builder

# Setting the working directory
WORKDIR /usr/src/app


# Copying the package, package-lock json files
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/

# Installing the dependencies
RUN npm install 

# Copying the rest of the application code
COPY . /usr/src/app/

#Running the application
RUN npm run build


## Serving the build with a web server: NGINX

FROM nginx:alpine

## Copying the build output from the Builder stage
COPY --from=Builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]