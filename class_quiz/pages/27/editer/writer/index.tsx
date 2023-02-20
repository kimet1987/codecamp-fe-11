import { gql, useMutation } from "@apollo/client";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../../src/commons/libraries/asyncFunc";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(async () => await import("react-quill"), {
    ssr: false,
});

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

export default function WebEditer() {
    const router = useRouter();
    const [createBoard] = useMutation(CREATE_BOARD);
    const { register, setValue, trigger, handleSubmit } = useForm({
        mode: "onChange",
    });

    const onContents = (value: string) => {
        setValue("contents", value === "<p><br></p>" ? "" : value);
        trigger("contents");
    };
    const onSubmit = async (data: any) => {
        const result = await createBoard({
            variables: {
                createBoardInput: {
                    writer: data.wirter,
                    title: data.title,
                    contents: data.contents,
                    password: data.password,
                },
            },
        });
        const { Modal } = await import("antd");
        Modal.success({ content: "게시글 등록에 성공!!" });
        const id = result.data?.createBoard._id;
        router.push(`/27/editer/detail/${id}`);
    };
    return (
        <>
            <form onSubmit={wrapFormAsync(handleSubmit(onSubmit))}>
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
                    <ReactQuill onChange={onContents} />
                </div>
                <button>등록하기</button>
            </form>
        </>
    );
}
