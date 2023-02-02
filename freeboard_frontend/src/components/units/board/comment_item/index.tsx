import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import {
    IBoardComment,
    IMutation,
    IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../../../../../pages/boards/[board]/comment/list";
import { useRouter } from "next/router";
import * as C from "../../../../../styles/board/comment_list";
import { getDate } from "../../../../commons/libraries/utils";
import CommentCon from "../comment/Comment.container";

export interface ICommentItem {
    el: IBoardComment;
}

export const DELETE_BOARD_COMMENT = gql`
    mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
        deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
    }
`;

export default function CommentItem(props: ICommentItem) {
    const router = useRouter();
    const [pw, setPw] = useState("");
    const [isOpenDelModal, setIsOpenDeleModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const onClickUpdate = (): void => {
        setIsEdit(true);
    };

    const [deleteBoardComment] = useMutation<
        Pick<IMutation, "deleteBoardComment">,
        IMutationDeleteBoardCommentArgs
    >(DELETE_BOARD_COMMENT);

    const onDel = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
        // const pw = prompt("비밀번호를 입력하세요");
        try {
            await deleteBoardComment({
                variables: {
                    password: pw,
                    boardCommentId: props.el._id,
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

            {!isEdit ? (
                <li key={props.el._id}>
                    <C.User_Img src="/comment/user_img.svg"></C.User_Img>
                    <C.Comment_content>
                        <C.Comment_header>
                            <span>{props.el.writer}</span>
                            <C.Star_wrap
                                value={props.el.rating}
                                disabled
                            ></C.Star_wrap>
                        </C.Comment_header>
                        <p>{props.el.contents}</p>
                        <C.Data>{getDate(props.el?.createdAt)}</C.Data>
                    </C.Comment_content>
                    <C.Btn_wrap>
                        <button
                            className="edit_btn"
                            onClick={onClickUpdate}
                        ></button>
                        <button
                            className="del_btn"
                            onClick={onClickOpenDelModal}
                        ></button>
                    </C.Btn_wrap>
                </li>
            ) : (
                <CommentCon isEdit={true} setIsEdit={setIsEdit} el={props.el} />
            )}
        </>
    );
}
