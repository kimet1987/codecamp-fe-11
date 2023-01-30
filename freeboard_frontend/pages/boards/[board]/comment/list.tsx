import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
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
    onDel: (event: MouseEvent<HTMLButtonElement>) => void;
    isOpenDeleteModal: boolean;
    onClickOpenDelModal: (event: MouseEvent<HTMLButtonElement>) => void;
    onChangeDelPw: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function CommentList() {
    const router = useRouter();

    const [isOpenDelModal, setIsOpenDeleModal] = useState(false);
    const [boardCommentId, setBoardCommentId] = useState("");
    const [pw, setPw] = useState("");

    if (!router || typeof router.query.board !== "string") return <></>;

    const [deleteBoardComment] = useMutation<
        Pick<IMutation, "deleteBoardComment">,
        IMutationDeleteBoardCommentArgs
    >(DELETE_BOARD_COMMENT);

    const { data } = useQuery<
        Pick<IQuery, "fetchBoardComments">,
        IQueryFetchBoardCommentsArgs
    >(FETCH_BOARD_COMMENTS, {
        variables: { boardId: router.query.board },
    });

    const onDel = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
        // const pw = prompt("비밀번호를 입력하세요");
        try {
            await deleteBoardComment({
                variables: {
                    password: pw,
                    boardCommentId,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.board },
                    },
                ],
            });
            setIsOpenDeleModal(false);
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    const onClickOpenDelModal = (
        event: MouseEvent<HTMLButtonElement>
    ): void => {
        setBoardCommentId(event.currentTarget.id);
        setIsOpenDeleModal(true);
    };

    const onChangeDelPw = (event: ChangeEvent<HTMLInputElement>): void => {
        setPw(event.target.value);
    };

    return (
        <>
            {isOpenDelModal && (
                <C.PwModal open={true} onOk={onDel}>
                    <div>비밀번호 입력: </div>
                    <input type="password" onChange={onChangeDelPw} />
                </C.PwModal>
            )}
            <C.List_wrap>
                {data?.fetchBoardComments.map((el) => (
                    <li key={el._id}>
                        <C.User_Img src="/comment/user_img.svg"></C.User_Img>
                        <C.Comment_content>
                            <C.Comment_header>
                                <span>{el.writer}</span>
                                <C.Star_wrap
                                    value={el.rating}
                                    disabled
                                ></C.Star_wrap>
                            </C.Comment_header>
                            <p>{el.contents}</p>
                            <C.Data>{getDate(el?.createdAt)}</C.Data>
                        </C.Comment_content>
                        <C.Btn_wrap>
                            <button></button>
                            <button
                                id={el._id}
                                onClick={onClickOpenDelModal}
                            ></button>
                        </C.Btn_wrap>
                    </li>
                ))}
            </C.List_wrap>
        </>
    );
}
