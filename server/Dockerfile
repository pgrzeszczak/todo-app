FROM node:6

COPY . /project/

RUN npm install -g sails

RUN cd /project && npm install

EXPOSE 1337

WORKDIR /project

CMD ["sails", "lift"]
