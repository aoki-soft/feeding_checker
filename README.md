# えさやりチェッカー
## デプロイ方法
### 1. 動作環境のセットアップ
dockerとdocker-composeをインストールし、  
このリポジトリをクローンする。

### 2. 証明書を入れる
`nginx/key_cert/`に
- 証明書を`cert.pem`
- 秘密鍵を`privkey.pem`
というファイル名で配置する。  

### 3. デプロイを実行する
リポジトリのルートで以下のコマンドを実行するとデプロイが実行される。
```
docker-compose up -d
```

## アンデプロイ
リポジトリのルートで以下のコマンドを実行すると、アンデプロイされる。
新しいバージョンのデプロイを行う場合は、`再デプロイ`の手順を行う。
```
docker-compose down
```

## 再デプロイ
新しいバージョンをクローン・フェッチした場合は、以前のバージョンのコンテナイメージを上書きするために以下のコマンドを実行してデプロイを行う。
```
docker-compose up -d --build 
```

## 開発用メモ

docker-compose
```
docker-compose -f docker-compose_Dev.yml up -d
docker-compose -f docker-compose_Dev.yml down
```

frontエンドコンテナに入る
```
docker exec -it feeding_checker_front_1 bash
```

apiコンテナに入る
```
docker exec -it feeding_checker_api_1 bash
```

```
npm run dev
```

ビルドし直し
```
docker-compose up --build -d
```