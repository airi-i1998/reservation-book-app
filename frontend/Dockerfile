FROM node:20.12-alpine3.18

WORKDIR /workspace/frontend

# Alpine Linux のパッケージリストを更新、最新の状態にする
RUN apk update && \
# gitパッケージをインストール
  apk add git

COPY ["package.json", "yarn.lock", "./"]

# もしnode_modulesが存在する場合に削除する
RUN rm -rf node_modules

# 依存関係をインストール
RUN yarn install
COPY . .

RUN yarn build-only

# CMD ["yarn", "preview"]
CMD ["yarn", "dev"]