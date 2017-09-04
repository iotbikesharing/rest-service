FROM node:boron

# Create directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get install curl
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN sudo apt-get update && sudo apt-get install yarn
RUN apt-get install gcc

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