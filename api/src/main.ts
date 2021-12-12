// ライブラリインポート
import express from 'express'
import log4js from 'log4js'
import express_logger from 'morgan'

// ファイルインポート
import getDriver from './db/driver'
import typeDefs from './db/schema'
import apollo_server_setup from './apollo_server/setup'

/**
 * エントリーポイント
 */
async function main() {
	const logger = log4js.getLogger();
	logger.level = process.env.LOG_LEVEL || 'debug';

	const password =  process.env.LOGIN_PASSWORD || "danger"
	const db_driver = getDriver();
	const apollo_server = await apollo_server_setup(db_driver, typeDefs);

	const app: express.Express = express()
	app.use(express_logger("short"));
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))
	// app.use(cors())

	app.use((req, res, next)=>{
		// 認証コードを検証する
		let bearer: null | string = null;
		const auth_bearer = req.headers.authorization;
		if (auth_bearer) {
			const auth = auth_bearer.split(' ');
			if (auth[1]) {
				bearer = auth[1]
			}
		}
		if (!bearer) {
			console.log("bearerがありません");
			res.status(401)
			res.send(JSON.stringify({
				data: null,
				errors: [
					{
						message: "bearerがありません"
					}
				]
			}))
			return;
		}
		if (bearer != password) {
			console.log('認証コードが誤っています:' + bearer)
			res.status(401)
			res.send(JSON.stringify({
				data: null,
				errors: [
					{
						message: "認証コードが誤っています"
					}
				]
			}))
			return;
		}
		console.log('auth: ok')
		next();
	})

	const path = process.env.API_PATH || '/api'
	apollo_server.applyMiddleware({ 
		app,
		// cors: true,
		path: path,
	});

	const port = process.env.API_PORT || 3001
	app.listen(port, () => {
		logger.info(`🏃 apiサーバーをスタートしました port: ${port}` )
	})
}

main();