import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const router = useRouter();

    const [나의함수] = useMutation(나의그래프큐엘셋팅);

    const Submit = async () => {
        try {
            // try있는 내용을 시도 하다가 실패 하면 다음에 있는 모든 줄을 무시 하고 catch 를 실행하게 됨
            const result = await 나의함수({
                variables: {
                    // variables 이게 $ 역할을 함
                    writer: "훈이",
                    title: "안녕하세요!!",
                    contents: "반갑습니다",
                },
            });
            console.log(result);
            router.push(
                `/section05/05-05-dynamic-routing-board-mutation-moved/${result?.data.createBoard.number}`
            );
        } catch (error) {
            alert(error.message);
        }
    };

    // 한 줄일때 괄호() 필요 없음
    return <button onClick={Submit}>GRAPHQL - API 요청하기</button>;
}
