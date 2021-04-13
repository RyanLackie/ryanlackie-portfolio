FROM node:14
# Create app directory
WORKDIR /server
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /server/
RUN npm install
# Bundle app source
COPY . /server
EXPOSE 8080
CMD [ "node", "index.js" ]
