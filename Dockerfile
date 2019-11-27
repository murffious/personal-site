FROM node:9.2

ENV NODE_PATH ./src

WORKDIR /workspace
COPY package.json /workspace
RUN npm install

COPY public public
COPY src src

RUN npm run build
WORKDIR /workspace/build

# Install and configure `serve`.
RUN npm install -g serve
CMD serve -s /workspace/build
EXPOSE 5000