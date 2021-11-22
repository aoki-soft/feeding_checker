// ライブラリインポート
import express from 'express'
import log4js from 'log4js'
import express_logger from 'morgan'
import cors from 'cors'

// ファイルインポート
import getDriver from './db/driver'
import typeDefs from './db/schema'
import apollo_server_setup from './apollo_server/setup'

/**
 * エントリーポイント
 */
async function main() {
    const logger = log4js.getLogger();
    logger.level = 'debug';

    const db_driver = getDriver();
    const apollo_server = await apollo_server_setup(db_driver, typeDefs);

    const app: express.Express = express()
    app.use(express_logger("short"));
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors())

    // CROS対応（というか完全無防備：本番環境ではだめ絶対）
    // app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Methods", "*")
    //     res.header("Access-Control-Allow-Headers", "*");
    //     next();
    // })

    apollo_server.applyMiddleware({ app });

    const port = 3001
    app.listen(port, () => {
        logger.info(`🏃 apiサーバーをスタートしました port: ${port}` )
    })
}

main();