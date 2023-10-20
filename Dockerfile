FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  npm i pm2 -g && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
COPY . .
CMD ["npm", "start"]
