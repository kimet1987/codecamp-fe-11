import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const 나의그래프큐엘셋팅 = gql`
    mutation createBorad($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const [나의함수] = useMutation(나의그래프큐엘셋팅);

    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const Submit = async () => {
        const result = await 나의함수({
            variables: {
                // variables 이게 $ 역할을 함
                writer: writer,
                title: title,
                contents: contents,
            },
        });
        console.log(result);
    };

    const onWriter = (e) => {
        setWriter(e.target.value);
    };
    const onTitle = (e) => {
        setTitle(e.target.value);
    };
    const onContents = (e) => {
        setContents(e.target.value);
    };

    // 한 줄일때 괄호() 필요 없음
    return (
        <div>
            작성자: <input type="text" onChange={onWriter} />
            제목: <input type="text" onChange={onTitle} />
            내용: <input type="text" onChange={onContents} />
            <button onClick={Submit}>GRAPHQL - API 요청하기</button>
        </div>
    );
}
