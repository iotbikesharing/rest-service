FROM ubuntu:16.04

# Create directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y gcc
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN sudo apt-get install -y nodejs

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm install pm2 -g
RUN npm install node-gyp -g

# Bundle source code
COPY . /usr/src/app

# Expose port and run app
EXPOSE 5000
CMD ["node", "app.js"]