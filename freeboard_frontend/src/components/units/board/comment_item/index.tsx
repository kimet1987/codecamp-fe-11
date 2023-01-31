import { MouseEvent, useState } from "react";
import * as C from "../../../../../styles/board/comment_list";
import * as S from "../../../../../styles/board/comment";
import { IBoardComment } from "../../../../commons/types/generated/types";
import { getDate } from "../../../../../src/commons/libraries/utils";

interface ICommentItem {
    el: IBoardComment;
    onClickOpenDelModal: (event: MouseEvent<HTMLButtonElement>) => void;
    onUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
    isEdit?: boolean;
}

export default function CommentItem(props: ICommentItem) {
    return (
        <>
            {!props.isEdit ? (
                <li>
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
                            id={props.el._id}
                            className="edit_btn"
                            onClick={props.onClickOpenDelModal}
                        ></button>
                        <button
                            id={props.el._id}
                            className="del_btn"
                            onClick={props.onClickOpenDelModal}
                        ></button>
                    </C.Btn_wrap>
                </li>
            ) : (
                <li>
                    {/* <C.Comment_content>
                        <C.Comment_header>
                            <span>{props.el.writer}</span>
                            <C.Star_wrap
                                value={props.el.rating}
                                disabled
                            ></C.Star_wrap>
                        </C.Comment_header>

                        <S.Register_wrap>
                            <S.Register_top>
                                <input
                                    className="writer"
                                    type="text"
                                    placeholder="작성자"
                                    value={props.writer}
                                    onChange={props.wChange}
                                />
                                <input
                                    className="password"
                                    type="password"
                                    placeholder="비밀번호"
                                    value={props.pw}
                                    onChange={props.pChange}
                                />
                                <S.Star_wrap onChange={props.setRating} />
                            </S.Register_top>
                            <S.Register_bottom>
                                <textarea
                                    maxLength={100}
                                    value={props.content}
                                    onChange={props.contentChange}
                                ></textarea>
                                <S.Text_count>
                                    <span>{props.content.length}</span>/
                                    <span>100</span>
                                    <button onClick={props.commentChk}>
                                        등록하기
                                    </button>
                                </S.Text_count>
                            </S.Register_bottom>
                        </S.Register_wrap>
                    </C.Comment_content> */}
                </li>
            )}
        </>
    );
}
