import { gql } from "apollo-server-core";

const typeDefs = gql`
    # ペット
    type Pet {
        id: ID! @id @readonly
        name: String!
        createAt: DateTime @timestamp(operations: [CREATE]) @readonly
        updateAt: DateTime @timestamp(operations: [UPDATE]) @readonly
        eating: [Feeding] @relationship(type: "EATE", direction: IN)
    }
    # えさやり
    type Feeding {
        id: ID! @id @readonly
        createAt: DateTime @timestamp(operations: [CREATE]) @readonly
        updateAt: DateTime @timestamp(operations: [UPDATE]) @readonly
        giver: User @relationship(type: "GIVE", direction: IN)
        eater: Pet @relationship(type: "EATE", direction: OUT)
    }
    # ユーザー
    type User {
        id: ID! @id @readonly
        name: String!
        createAt: DateTime @timestamp(operations: [CREATE]) @readonly
        updateAt: DateTime @timestamp(operations: [UPDATE]) @readonly
        feeding: [Feeding] @relationship(type: "GIVE", direction: OUT)
    }
`

export default typeDefs