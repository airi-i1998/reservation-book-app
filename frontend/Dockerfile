FROM node:20.12-alpine3.18

WORKDIR /app
RUN apk update

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install
COPY . /app

RUN yarn build-only

CMD ["yarn", "dev"]