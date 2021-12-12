import log4js from 'log4js'
const logger = log4js.getLogger();
import neo4j from 'neo4j-driver';

/**
 * dbドライバー 
 * db_driver_config.driver()の中に設定が入っている。  
 * 環境変数でも設定を変えることが出来る。
*/
export default function getDriver() {
    const neo4jUri = process.env.NEO4J_URI || "bolt://neo4j:7687"
    const neo4jUser = process.env.NEO4J_USER || "neo4j"
    const neo4jPassword = process.env.NEO4J_PASSWORD || 'blz'
    const driver = neo4j.driver(neo4jUri, neo4j.auth.basic(neo4jUser, neo4jPassword));
    logger.info("🤝 neo4jのドライバーをセットアップしました。")
    return driver;
}