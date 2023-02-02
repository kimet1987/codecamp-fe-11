import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
    ChangeEvent,
    Dispatch,
    MouseEvent,
    SetStateAction,
    useState,
} from "react";
import { FETCH_BOARD_COMMENTS } from "../../../../../pages/boards/[board]/comment/list";
import {
    IBoardComment,
    IMutation,
    IMutationCreateBoardCommentArgs,
    IMutationUpdateBoardCommentArgs,
    IUpdateBoardCommentInput,
} from "../../../../commons/types/generated/types";
import CommentPre from "./Comment.presenter";

export const UPDATE_BOARD_COMMENT = gql`
    mutation updateBoardComment(
        $password: String
        $updateBoardCommentInput: UpdateBoardCommentInput!
        $boardCommentId: ID!
    ) {
        updateBoardComment(
            password: $password
            boardCommentId: $boardCommentId
            updateBoardCommentInput: $updateBoardCommentInput
        ) {
            _id
        }
    }
`;

const CREATE_COMMENT = gql`
    mutation createBoardComment(
        $createBoardCommentInput: CreateBoardCommentInput!
        $boardId: ID!
    ) {
        createBoardComment(
            boardId: $boardId
            createBoardCommentInput: $createBoardCommentInput
        ) {
            _id
            contents
            rating
            createdAt
            updatedAt
        }
    }
`;

interface ICommentConProps {
    isEdit?: boolean;
    setIsEdit?: Dispatch<SetStateAction<boolean>>;
    el?: IBoardComment;
}

export default function CommentCon(props: ICommentConProps) {
    const router = useRouter();
    const [writer, setWriter] = useState("");
    const [pw, setPw] = useState("");
    const [content, setContent] = useState("");
    const [rating, setRating] = useState(0);

    const [createComment] = useMutation<
        Pick<IMutation, "createBoardComment">,
        IMutationCreateBoardCommentArgs
    >(CREATE_COMMENT);

    const wChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWriter(e.target.value);
    };
    const pChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
    };
    const contentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const commentChk = async () => {
        try {
            if (typeof router.query.board !== "string") {
                alert("시스템에 문제가 있습니다.");
                return;
            }
            if (writer !== "" && pw !== "" && content !== "") {
                setWriter("");
                setPw("");
                setContent("");
            }
            await createComment({
                variables: {
                    createBoardCommentInput: {
                        writer: writer,
                        password: pw,
                        contents: content,
                        rating: rating,
                    },
                    boardId: router.query.board,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.board },
                    },
                ],
            });
            console.log(router.query);
        } catch (error) {
            if (error instanceof Error) alert("error");
        }
    };

    const [updateBoardComment] = useMutation<
        Pick<IMutation, "updateBoardComment">,
        IMutationUpdateBoardCommentArgs
    >(UPDATE_BOARD_COMMENT);

    const onUpdate = async (
        e: MouseEvent<HTMLButtonElement>
    ): Promise<void> => {
        if (content === "") {
            alert("내용이 수정되지 않았습니다.");
            return;
        }
        if (pw === "") {
            alert("비밀번호가 입력되지 않았습니다.");
            return;
        }

        try {
            const updateBoardCommentInput: IUpdateBoardCommentInput = {};
            if (content !== "") updateBoardCommentInput.contents = content;
            if (rating !== props.el?.rating)
                updateBoardCommentInput.rating = rating;

            if (typeof props.el?._id !== "string") {
                alert("시스템에 문제가 있습니다.");
                return;
            }

            await updateBoardComment({
                variables: {
                    boardCommentId: props.el?._id,
                    password: pw,
                    updateBoardCommentInput,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.board },
                    },
                ],
            });
            props.setIsEdit?.(false);
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    return (
        <CommentPre
            commentChk={commentChk}
            wChange={wChange}
            pChange={pChange}
            contentChange={contentChange}
            onUpdate={onUpdate}
            content={content}
            writer={writer}
            pw={pw}
            setRating={setRating}
            el={props.el}
            isEdit={props.isEdit}
        />
    );
}
