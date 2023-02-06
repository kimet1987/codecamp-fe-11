import { DataSource } from "typeorm";
import { Product } from "./Product.progres";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// API DOCK 만들기
const typeDefs = `#graphql

    type MyProduct {
        _id: ID
        seller: String
        name: String
        detail: String
        price: Int
        createAt: String
    }
    type Query {
        fetchProduct: [MyProduct]
    }
`;

// API 만들기
const resolvers = {
    Query: {
        fetchProduct: async () => {
            const result = await Product.find();
            console.log(result);

            return result;
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const AppDataSource = new DataSource({
    type: "postgres",
    host: "34.64.244.122",
    port: 5005,
    username: "postgres",
    password: "postgres2022",
    database: "postgres",
    entities: [Product],
    synchronize: true,
    logging: true,
});

AppDataSource.initialize()
    .then(() => {
        console.log("연결 성공!");
        startStandaloneServer(server).then(() => {
            console.log("그레프큐엘 서버 실행 성공!!");
        });
    })
    .catch((error) => console.log(error, "연결 실패!"));
