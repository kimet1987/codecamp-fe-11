import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import * as S from "../../../../../styles/board/comment";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface ICommentPreProps {
    commentChk: (e: MouseEvent<HTMLButtonElement>) => void;
    wChange: (e: ChangeEvent<HTMLInputElement>) => void;
    pChange: (e: ChangeEvent<HTMLInputElement>) => void;
    contentChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onUpdate: (e: MouseEvent<HTMLButtonElement>) => void;
    setRating: Dispatch<SetStateAction<number>>;
    isEdit?: boolean;
    el?: IBoardComment;
    content: string;
    pw: string;
    writer: string;
}

export default function CommentPre(props: ICommentPreProps) {
    return (
        <S.Wrapper>
            {props.isEdit === false && <S.Header>댓글</S.Header>}
            <S.Register_wrap>
                <S.Register_top>
                    <input
                        className="writer"
                        type="text"
                        placeholder="작성자"
                        value={
                            props.writer !== ""
                                ? props.writer
                                : props.el?.writer ?? ""
                        }
                        onChange={props.wChange}
                        readOnly={props.isEdit}
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
                        value={
                            props.content !== ""
                                ? props.content
                                : props.el?.contents ?? ""
                        }
                        onChange={props.contentChange}
                        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.
"
                    ></textarea>
                    <S.Text_count>
                        <span>
                            {props.content !== ""
                                ? props.content.length
                                : props.el?.contents.length ?? 0}
                        </span>
                        /<span>100</span>
                        <button
                            onClick={
                                props.isEdit === true
                                    ? props.onUpdate
                                    : props.commentChk
                            }
                        >
                            등록하기
                        </button>
                    </S.Text_count>
                </S.Register_bottom>
            </S.Register_wrap>
        </S.Wrapper>
    );
}
