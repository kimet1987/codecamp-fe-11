import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// API DOCK 만들기
const typeDefs = `#graphql
	input CreateBoardInput {
		writer: String
		title: String
		contents: String
	}
  type MyBoard {
	number: Int
	writer: String
	title: String
	contents: String  
}
  
  type Query {
	# fetchBoard: 리턴타입
	fetchBoard: [MyBoard]
  }
  type Mutation {
	# 연습용 (backend-example 방식)
	# createBoard(writer: String, title:String, contents:String): String
	
	# 실무용 (backend-practice 방식)
	createBoard(createBoardInput: CreateBoardInput): String
	updateBoard:String
	deleteBoard:String

  }
`;

// API 만들기
const resolvers = {
    Query: {
        fetchBoard: async () => {
            // 모두 꺼내기
            const result = await Board.find();
            console.log(result);

            // 한개만 꺼내기
            // const result = await Board.findOne({where: {number: 3} })
            return result;
        },
    },
    Mutation: {
        createBoard: async (
            parent: any,
            args: any,
            context: any,
            info: any
        ) => {
            await Board.insert({
                ...args.createBoardInput,

                // 비효율적인 방식
                // writer: args.createBoardInput.writer,
                // title: args.createBoardInput.title,
                // contents: args.createBoardInput.contents
            });
            return "게시글 등록을 성공했어요!!";
        },

        updateBoard: async () => {
            await Board.update({ number: 3 }, { writer: "영희" });
            return "게시글 등록을 성공했어요!!";
        },

        deleteBoard: async () => {
            await Board.delete({ number: 3 }); // 3번 게시글 삭제해줘
            // await Board.update({number: 3}, {isDeleted: true}) // 3번 게시글 삭제 했다 치자 (소프트 삭제)
            // await Board.update({number: 3}, {deletedAt: new Date() }) // deletedAt이 초기값이 null 이면 삭제 안된거, new Date() 들어가 있으면 삭제된것
            return "게시글 등록을 성공했어요!!";
        },
    },
};
// 합치기
const server = new ApolloServer({
    typeDefs,
    resolvers,

    // 선택한 사이트만 풀어주고 싶을때
    // cors: {
    // 	origin: ["http://naver.com","http://coupang.con"]
    // }
});

const AppDataSource = new DataSource({
    type: "postgres",
    host: "34.64.244.122",
    port: 5005,
    username: "postgres",
    password: "postgres2022",
    database: "postgres",
    entities: [Board],
    synchronize: true,
    logging: true,
});

AppDataSource.initialize()
    .then(() => {
        console.log("DB 접속에 성공 했습니다.");

        startStandaloneServer(server).then(() => {
            console.log("그레프큐엘 서버가 실행 되었습니다");
        });
    })
    .catch((error) => {
        console.log("DB 접속에 실패 했습니다");
        console.log("원인 : ", error);
    });
