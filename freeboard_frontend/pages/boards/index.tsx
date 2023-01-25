import { gql, useQuery } from "@apollo/client";
import * as S from "../../styles/boards";
import { getDate } from "../../src/commons/libraries/utils";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
    query {
        fetchBoards {
            _id
            createdAt
            title
            writer
        }
    }
`;

export default function BoardsList() {
    const { data } = useQuery(FETCH_BOARDS);
    const router = useRouter();

    const onBoard = (e: MouseEvent<HTMLLIElement>) => {
        if (e.target instanceof HTMLLIElement) {
            router.push(`/boards/${e.target.id}`);
        }
    };

    const onRegister = (e: MouseEvent<HTMLButtonElement>) => {
        router.push(`/boards/register`);
    };

    return (
        <>
            <S.List_wrapper>
                <S.Header>
                    <span>번호</span>
                    <span>제목</span>
                    <span>작성자</span>
                    <span>날짜</span>
                </S.Header>
                <S.Contents>
                    <ul>
                        {data?.fetchBoards.map((el: any) => (
                            <li id={el._id} key={el._id} onClick={onBoard}>
                                <span>
                                    {String(el._id).slice(-4).toUpperCase()}
                                </span>
                                <span>{el.title}</span>
                                <span>{el.writer}</span>
                                <span>{getDate(el.createdAt)}</span>
                            </li>
                        ))}
                    </ul>
                </S.Contents>
                <S.List_footer>
                    <S.Pager>
                        <S.Pager_btn className="prev">이전</S.Pager_btn>
                        <ul>
                            <li>1</li>
                            <li className="active">2</li>
                        </ul>
                        <S.Pager_btn className="next">다음</S.Pager_btn>
                    </S.Pager>
                    <S.Board_register_btn onClick={onRegister}>
                        <i></i>게시물 등록하기
                    </S.Board_register_btn>
                </S.List_footer>
            </S.List_wrapper>
        </>
    );
}
