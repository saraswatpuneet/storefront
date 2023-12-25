# Use a base image with a lightweight web server
FROM nginx

# Set the working directory to the web root
WORKDIR /usr/share/nginx/html

# Copy the contents of your static website to the container
COPY . .

# Expose the port on which the web server will run
EXPOSE 80


# Start the web server when the container starts
CMD ["nginx", "-g", "daemon off;"]
