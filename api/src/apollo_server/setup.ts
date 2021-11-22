import log4js from 'log4js'
const logger = log4js.getLogger();

import type { Driver } from 'neo4j-driver';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { ApolloServer } from 'apollo-server-express'
import { DocumentNode } from 'graphql-compose/lib/graphql';


const apollo_server_setup = async (driver: Driver, typeDefs: DocumentNode) => {
    const neoSchema = new Neo4jGraphQL({ 
        typeDefs, 
        driver,
        config: {
            skipValidateTypeDefs: true,
        }
    });
    const server = new ApolloServer({
        schema: neoSchema.schema,
        debug: true,
        logger: logger,

    });
    await server.start();
    logger.info("🚀 apollo_serverをセットアップしました")
    return server;
}

export default apollo_server_setup