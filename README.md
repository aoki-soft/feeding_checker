# えさやりチェッカー

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
docker-compose up --build
```