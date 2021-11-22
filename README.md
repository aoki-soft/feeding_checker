# えさやりチェッカー

## 開発用メモ

docker-compose
```
docker-compose up -d
docker-compose down
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