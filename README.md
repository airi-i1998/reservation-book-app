# reservation-book-app
Reservation Book App は、社内で本の貸し出しを効率的に管理するためのWebアプリケーションです。
本の登録、検索、貸し出し、返却、削除といった機能を提供します。

## 機能
- 本の登録
- 本の検索
- 本の貸し出し
- 本の返却
- 登録した本の削除

## プロジェクト構成
- フロントエンド: Vue.js
- バックエンド: NestJS
- データベース: MySQL

## セットアップ方法
### 必要な環境
- Node.js (v16以上)
- npm または yarn
- MySQL

### 手順

#### 1. リポジトリをクローン
```bash
git clone https://github.com/your-repo/reservation-book-app.git
cd reservation-book-app
```

#### 2. バックエンドのセットアップ
```
cd server
npm install
# 環境変数を設定
cp .env.example .env

# Prisma セットアップ
npm install prisma
npx prisma init

# Prisma のデータベースマイグレーション
npx prisma migrate dev
```
#### 3. フロントエンドのセットアップ
```
cd client
npm install
# 環境変数を設定
cp .env.example .env
```

#### 4. アプリケーションの利用
### 本の登録画面

### 貸し出し画面


