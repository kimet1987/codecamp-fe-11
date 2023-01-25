import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

// export 골라서 가져오기 가능 import {} from ''
// export default 하마나 가져올수 있음  import  from ''   ====> {} 없이 가져오기

export default function BoardWrite(props) {
    const router = useRouter();
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [나의함수] = useMutation(나의그래프큐엘셋팅);
    const [updateBoard] = useMutation(UPDATE_BOARD);

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
        router.push(
            `/section09/09-04-boards/${result.data.createBoard.number}`
        );
    };

    const onClickUpdate = async () => {
        const myVariables = { number: Number(router.query.number) };
        if (writer) myVariables.writer = writer;
        if (title) myVariables.title = title;
        if (contents !== "") {
            myVariables.contents = contents;
        }

        const result = await updateBoard({
            variables: myVariables,
        });
        router.push(
            `/section09/09-04-boards/${result.data.updateBoard.number}`
        );
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
    return (
        <BoardWriteUI
            onSubmit={Submit}
            onClickUpdate={onClickUpdate}
            onWriter={onWriter}
            onTitle={onTitle}
            onContents={onContents}
            isEdit={props.isEdit}
            data={props.data} // undefinend 이거나 data 이거나
        />
    );
}
