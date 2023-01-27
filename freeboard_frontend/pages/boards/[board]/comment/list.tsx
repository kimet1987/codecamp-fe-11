import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { getDate } from "../../../../src/commons/libraries/utils";
import {
    IMutation,
    IMutationDeleteBoardCommentArgs,
    IQuery,
    IQueryFetchBoardCommentsArgs,
} from "../../../../src/commons/types/generated/types";
import * as C from "../../../../styles/board/comment_list";

export const FETCH_BOARD_COMMENTS = gql`
    query fetchBoardComments($boardId: ID!) {
        fetchBoardComments(boardId: $boardId) {
            _id
            writer
            contents
            createdAt
            rating
        }
    }
`;

export const DELETE_BOARD_COMMENT = gql`
    mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
        deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
    }
`;
interface IFetchBoardComments {
    data?: Pick<IQuery, "fetchBoardComments">;
}

export default function CommentList() {
    const router = useRouter();

    if (!router || typeof router.query.board !== "string") return <></>;

    const [deleteBoardComment] = useMutation<
        Pick<IMutation, "deleteBoardComment">,
        IMutationDeleteBoardCommentArgs
    >(DELETE_BOARD_COMMENT, {});

    const { data } = useQuery<
        Pick<IQuery, "fetchBoardComments">,
        IQueryFetchBoardCommentsArgs
    >(FETCH_BOARD_COMMENTS, {
        variables: { boardId: router.query.board },
    });

    const onDel = async (e: MouseEvent<HTMLButtonElement>) => {
        const pw = prompt("비밀번호를 입력하세요");
        try {
            if (!(e.target instanceof HTMLButtonElement)) {
                alert("시스템에 문제가 있음");
                return;
            }
            await deleteBoardComment({
                variables: {
                    password: pw,
                    boardCommentId: e.target.id,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.board },
                    },
                ],
            });
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    return (
        <>
            <C.List_wrap>
                {data?.fetchBoardComments.map((el) => (
                    <li key={el._id}>
                        <C.User_Img src="/comment/user_img.svg"></C.User_Img>
                        <C.Comment_content>
                            <C.Comment_header>
                                <span>{el.writer}</span>
                                <C.Star_wrap>
                                    <button>1</button>
                                    <button>2</button>
                                    <button>3</button>
                                    <button>4</button>
                                    <button>5</button>
                                </C.Star_wrap>
                            </C.Comment_header>
                            <p>{el.contents}</p>
                            <C.Data>{getDate(el?.createdAt)}</C.Data>
                        </C.Comment_content>
                        <C.Btn_wrap>
                            <button></button>
                            <button id={el._id} onClick={onDel}></button>
                        </C.Btn_wrap>
                    </li>
                ))}
            </C.List_wrap>
        </>
    );
}
