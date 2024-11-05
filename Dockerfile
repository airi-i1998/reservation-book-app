FROM node:20.12-alpine3.18

WORKDIR /app

RUN apk update
RUN npm install -g pm2

# package.jsonとyarn.lockをコピーして依存関係をインストール
COPY package.json yarn.lock ./
RUN yarn install

# アプリケーションのソースコードをコピー
COPY . .

# Prisma Clientの生成
RUN npx prisma generate

RUN yarn global add @nestjs/cli
# RUN yarn build

EXPOSE 3000

# 開発環境変数を設定
ENV NODE_ENV=development

# 開発サーバーとドキュメントサーバー、デバッグを起動
CMD ["sh", "-c", "yarn start --watch & yarn doc & yarn start:debug"]