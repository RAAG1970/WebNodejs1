FROM node:carbon-alpine
RUN mkdir /my_app
RUN cd my_app
RUN mkdir /src
RUN cd ..
COPY /src/index.js /my_app/src
COPY package.json /my_app
WORKDIR /my_app
RUN npm install
EXPOSE 3001
CMD node src/index.js





