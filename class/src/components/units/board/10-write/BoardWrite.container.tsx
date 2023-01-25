import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyvari } from "./BoardWrite.types";

// export 골라서 가져오기 가능 import {} from ''
// export default 하마나 가져올수 있음  import  from ''   ====> {} 없이 가져오기

export default function BoardWrite(props: IBoardWriteProps) {
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
            `/section10/10-02-typescript-boards/${result.data.createBoard.number}`
        );
    };

    const onClickUpdate = async () => {
        const myVariables: IMyvari = {
            number: Number(router.query.number),
        };
        if (writer) myVariables.writer = writer;
        if (title) myVariables.title = title;
        if (contents !== "") {
            myVariables.contents = contents;
        }

        const result = await updateBoard({
            variables: myVariables,
        });
        router.push(
            `/section10/10-02-typescript-boards/${result.data.updateBoard.number}`
        );
    };

    const onWriter = (e: ChangeEvent<HTMLInputElement>) => {
        setWriter(e.target.value);
    };
    const onTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    const onContents = (e: ChangeEvent<HTMLInputElement>) => {
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

// shift + cmd + l 선택한것 같은 이름 전체 선택
// shift + cmd + k 선택한것 같은 이름 전체 삭제
//
