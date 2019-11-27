FROM node:9.2

ENV NODE_PATH ./src

WORKDIR /app
COPY package.json /app
RUN npm install

COPY public public
COPY src src

RUN npm run build:gcp
WORKDIR /app/build

# Install and configure `serve`.
RUN npm install -g serve
CMD serve -s /app/build
EXPOSE 5000