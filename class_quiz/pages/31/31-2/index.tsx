import { gql, useMutation } from "@apollo/client";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { ChangeEvent, useState } from "react";

export const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            writer
            title
            contents
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

export default function WebEditer() {
    const [imgUrl, setImgUrl] = useState("");
    const [file, setFile] = useState<File>();

    const [createBoard] = useMutation(CREATE_BOARD);
    const { register, handleSubmit } = useForm({
        mode: "onChange",
    });
    const [uploadFile] = useMutation(UPLOAD_FILE);

    const onSubmit = async (data: any) => {
        const resultFile = await uploadFile({ variables: { file } });
        const url = resultFile.data.uploadFile.url;

        const result = await createBoard({
            variables: {
                createBoardInput: {
                    writer: data.wirter,
                    title: data.title,
                    contents: data.contents,
                    password: data.password,
                    images: [url],
                },
            },
        });
        const { Modal } = await import("antd");
        Modal.success({ content: "게시글 등록에 성공!!" });
    };

    const onFile = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file === undefined) return;

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (e) => {
            if (typeof e.target?.result === "string") {
                setImgUrl(e.target.result);
                setFile(file);
            }
        };
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <span>작성자 :</span>
                    <input type="text" {...register("wirter")} />
                </div>
                <div>
                    <span>패스워드 :</span>
                    <input type="password" {...register("password")} />
                </div>
                <div>
                    <span>제목 :</span>
                    <input type="text" {...register("title")} />
                </div>
                <div>
                    <span>내용 :</span>
                    <input type="text" {...register("contents")} />
                </div>
                <div>
                    <input type="file" onChange={onFile} />
                    <img src={imgUrl} style={{ width: 200 }} />
                </div>
                <button>등록하기</button>
            </form>
        </>
    );
}
