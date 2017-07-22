FROM node:boron

# Create directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm install pm2 -g

# Bundle source code
COPY . /usr/src/app

# Expose port and run app
ENV NODE_ENV=production
EXPOSE 5000
CMD ["pm2", "start", "app.js", "-i max", "--no-daemon"]