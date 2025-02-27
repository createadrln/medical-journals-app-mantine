# Use an official Node.js image as the base
FROM node:22.13.1 AS build

ARG NODE_EXTRA_CA_CERTS=/etc/ssl/certs/ca-certificates.crt

COPY cert/zscaler.crt /usr/local/share/ca-certificates/
RUN cat /usr/local/share/ca-certificates/zscaler.crt >>/etc/ssl/certs/ca-certificates.crt

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the application
RUN npm run build

# Use Nginx to serve the built files
FROM nginx:alpine

# Copy built files to Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
