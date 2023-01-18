import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";

// export 골라서 가져오기 가능 import {} from ''
// export default 하마나 가져올수 있음  import  from ''   ====> {} 없이 가져오기

export default function BoardWrite() {
    const [isActive, setIsActive] = useState(false);

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
        setIsActive(true);
        console.log(!writer);
        if (e.target.value && title && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };
    const onTitle = (e) => {
        setTitle(e.target.value);
        if (writer && e.target.value && contents) {
            return setIsActive(true);
        } else {
            return setIsActive(false);
        }
    };
    const onContents = (e) => {
        setContents(e.target.value);
        if (writer && title && e.target.value) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };
    return (
        <BoardWriteUI
            Submit={Submit}
            onWriter={onWriter}
            onTitle={onTitle}
            onContents={onContents}
            isActive={isActive}
        />
    );
}
