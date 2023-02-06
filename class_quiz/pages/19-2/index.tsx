import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useRef, useState } from "react";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px 0;
`;

export const Btn_img = styled.button`
    width: 80px;
    height: 45px;
    background-color: blueviolet;
`;

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
        }
    }
`;
const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
            url
        }
    }
`;

export default function ImgUpload() {
    const [imgUrl, setImgUrl] = useState("");
    const ImgRef = useRef<HTMLInputElement>(null);

    const [createBoard] = useMutation(CREATE_BOARD);
    const [input, setInput] = useState({
        writer: "",
        title: "",
        contents: "",
        pw: "",
    });

    const onSave = async (): Promise<void> => {
        const result = await createBoard({
            variables: {
                createBoardInput: {
                    writer: input.writer,
                    title: input.title,
                    contents: input.contents,
                    password: input.pw,
                    images: [imgUrl],
                },
            },
        });
        console.log(result);
    };
    const onChangeInput = (e: any) => {
        setInput({
            ...input,
            [e.target.id]: e.target.value,
        });
    };

    const [uploadFile] = useMutation(UPLOAD_FILE);
    const onFile = async (e: any): Promise<void> => {
        const file = e.target.files?.[0];

        const result = await uploadFile({
            variables: { file },
        });
        setImgUrl(result.data?.uploadFile.url ?? "");
        console.log(file);
        console.log(result.data?.uploadFile.url);
    };

    const onImg = () => {
        ImgRef.current?.click();
    };
    return (
        <>
            <Wrapper>
                <span>작성자 : </span>
                <input type="text" id="writer" onChange={onChangeInput} />
                <span>비밀번호 : </span>
                <input type="password" id="pw" onChange={onChangeInput} />
                <span>제목 : </span>
                <input type="text" id="title" onChange={onChangeInput} />
                <span>내용 : </span>
                <input type="text" id="contents" onChange={onChangeInput} />
            </Wrapper>
            <Btn_img onClick={onImg}>버튼</Btn_img>
            <span>FILE</span>
            <input
                type="file"
                onChange={onFile}
                style={{ display: "none" }}
                ref={ImgRef}
            />
            <button onClick={onSave}>저장하기</button>
        </>
    );
}
