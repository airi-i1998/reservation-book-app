FROM node:22.10.0-alpine3.19

WORKDIR /workspace/server

RUN apk update && \
  apk add git

# package.jsonとyarn.lockをコピーして依存関係をインストール
COPY package.json yarn.lock ./

# もしnode_modulesが存在する場合に削除する
RUN rm -rf node_modules

# 依存関係をインストール
RUN yarn install

# アプリケーションのソースコードをコピー
COPY . .

# Prisma Clientの生成
RUN npx prisma generate

RUN yarn global add pm2
RUN yarn global add @nestjs/cli
# RUN yarn build

EXPOSE 3000

# 開発環境変数を設定
ENV NODE_ENV=development

# 開発サーバーとドキュメントサーバー、デバッグを起動
CMD ["sh", "-c", "yarn start --watch & yarn doc & yarn start:debug"]