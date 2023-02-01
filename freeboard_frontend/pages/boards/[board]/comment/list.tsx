import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";

import {
    IMutation,
    IMutationDeleteBoardCommentArgs,
    IMutationUpdateBoardCommentArgs,
    IQuery,
    IQueryFetchBoardCommentsArgs,
} from "../../../../src/commons/types/generated/types";
import CommentItem from "../../../../src/components/units/board/comment_item";
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

export const DELETE_BOARD_COMMENT = gql`
    mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
        deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
    }
`;

export interface IFetchBoardComments {
    data?: Pick<IQuery, "fetchBoardComments">;
    onDel: (event: MouseEvent<HTMLButtonElement>) => void;
    isOpenDeleteModal: boolean;
    onClickOpenDelModal: (event: MouseEvent<HTMLButtonElement>) => void;
    onChangeDelPw: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function CommentList() {
    const router = useRouter();

    const [isOpenDelModal, setIsOpenDeleModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [boardCommentId, setBoardCommentId] = useState("");
    const [pw, setPw] = useState("");

    if (!router || typeof router.query.board !== "string") return <></>;

    const [deleteBoardComment] = useMutation<
        Pick<IMutation, "deleteBoardComment">,
        IMutationDeleteBoardCommentArgs
    >(DELETE_BOARD_COMMENT);

    const [updateBoardComment] = useMutation<
        Pick<IMutation, "updateBoardComment">,
        IMutationUpdateBoardCommentArgs
    >(UPDATE_BOARD_COMMENT);

    const { data } = useQuery<
        Pick<IQuery, "fetchBoardComments">,
        IQueryFetchBoardCommentsArgs
    >(FETCH_BOARD_COMMENTS, {
        variables: { boardId: router.query.board },
    });

    const onDel = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
        // const pw = prompt("비밀번호를 입력하세요");
        console.log(boardCommentId);
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

    const onUpdate = async (
        e: MouseEvent<HTMLButtonElement>
    ): Promise<void> => {
        const updateBoardCommentInput = {};
        try {
            await updateBoardComment({
                variables: {
                    boardCommentId,
                    password: pw,
                    updateBoardCommentInput,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardCommentId: router.query.board },
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
        console.log(event.currentTarget.id);
    };

    const onChangeDelPw = (event: ChangeEvent<HTMLInputElement>): void => {
        setPw(event.target.value);
    };

    const onClickUpdate = (): void => {
        setIsEdit(true);
    };

    return (
        <>
            {isOpenDelModal && (
                <C.PwModal
                    open={true}
                    onOk={onDel}
                    onCancel={() => {
                        setIsOpenDeleModal(false);
                    }}
                >
                    <div>비밀번호 입력: </div>
                    <input type="password" onChange={onChangeDelPw} />
                </C.PwModal>
            )}
            <C.List_wrap>
                {data?.fetchBoardComments.map((el) => (
                    <CommentItem
                        key={el._id}
                        el={el}
                        isEdit={isEdit}
                        setIsEdit={setIsEdit}
                        onClickOpenDelModal={onClickOpenDelModal}
                        onUpdate={onUpdate}
                        onClickUpdate={onClickUpdate}
                    />
                ))}
            </C.List_wrap>
        </>
    );
}
