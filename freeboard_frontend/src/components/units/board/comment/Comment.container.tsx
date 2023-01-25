import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
    IMutation,
    IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import CommentPre from "./Comment.presenter";

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

export default function CommentCon() {
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

    const ratingChk = (e: MouseEvent<HTMLButtonElement>) => {};

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
                        rating: 0,
                    },
                    boardId: router.query.board,
                },
            });
            console.log(router.query);
        } catch (error) {
            if (error instanceof Error) alert("error");
        }
    };

    return (
        <CommentPre
            commentChk={commentChk}
            ratingChk={ratingChk}
            wChange={wChange}
            pChange={pChange}
            contentChange={contentChange}
            content={content}
            writer={writer}
            pw={pw}
        />
    );
}
