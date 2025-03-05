# Use an official Node.js image as the base
FROM node:22.13.1 AS build

ARG VITE_BACKEND_HOST_URL
ENV VITE_BACKEND_HOST_URL=$VITE_BACKEND_HOST_URL

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
