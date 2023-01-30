import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import * as S from "../../../../../styles/board/comment";

export interface ICommentPreProps {
    commentChk: (e: MouseEvent<HTMLButtonElement>) => void;
    wChange: (e: ChangeEvent<HTMLInputElement>) => void;
    pChange: (e: ChangeEvent<HTMLInputElement>) => void;
    contentChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    content: string;
    pw: string;
    writer: string;
    setRating: Dispatch<SetStateAction<number>>;
}

export default function CommentPre(props: ICommentPreProps) {
    return (
        <S.Wrapper>
            <S.Header>댓글</S.Header>
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
                        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.
"
                    ></textarea>
                    <S.Text_count>
                        <span>{props.content.length}</span>/<span>100</span>
                        <button onClick={props.commentChk}>등록하기</button>
                    </S.Text_count>
                </S.Register_bottom>
            </S.Register_wrap>
        </S.Wrapper>
    );
}
