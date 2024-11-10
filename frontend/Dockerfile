FROM node:20.12-alpine3.18

WORKDIR /workspace/frontend

# Alpine Linux のパッケージリストを更新、最新の状態にする
RUN apk update && \
# gitパッケージをインストール
  apk add git

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install
COPY . .

RUN yarn build-only

# CMD ["yarn", "preview"]
CMD ["yarn", "dev"]