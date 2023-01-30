import { gql, useQuery } from "@apollo/client";
import * as S from "../../styles/boards";
import { getDate } from "../../src/commons/libraries/utils";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
    IQuery,
    IQueryFetchBoardsArgs,
    IQueryFetchBoardsCountArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
            _id
            createdAt
            title
            writer
        }
    }
`;

const FETCH_BOARDS_COUNT = gql`
    query {
        fetchBoardsCount
    }
`;

export default function BoardsList() {
    const router = useRouter();
    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const [startPage, setStartPage] = useState(1);
    const [color, setColor] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const { data: dataBoardsCount } = useQuery<
        Pick<IQuery, "fetchBoardsCount">,
        IQueryFetchBoardsCountArgs
    >(FETCH_BOARDS_COUNT);

    const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

    const onBoard = (e: MouseEvent<HTMLLIElement>) => {
        if (e.target instanceof HTMLLIElement) {
            router.push(`/boards/${e.target.id}`);
        }
    };

    const onPrevPage = (): void => {
        if (startPage === 1) return;
        setStartPage(startPage - 10);
        void refetch({ page: startPage - 10 });
    };
    const onNextPage = (): void => {
        if (startPage + 10 <= lastPage) {
            setStartPage(startPage + 10);
            void refetch({ page: startPage + 10 });
        }
    };

    const onRegister = (e: MouseEvent<HTMLButtonElement>) => {
        router.push(`/boards/register`);
    };
    const onClickPage = (e: MouseEvent<HTMLSpanElement>): void => {
        const pageNum = Number(e.currentTarget.id);
        setColor(pageNum);
        void refetch({ page: Number(e.currentTarget.id) });
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
                        {data?.fetchBoards.map((el) => (
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
                        <S.Pager_btn className="prev" onClick={onPrevPage}>
                            이전
                        </S.Pager_btn>
                        <ul>
                            {new Array(10).fill("Num").map(
                                (_, index) =>
                                    index + startPage <= lastPage && (
                                        <li
                                            key={index + startPage}
                                            id={String(index + startPage)}
                                            onClick={onClickPage}
                                            className={
                                                index + startPage === color
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            {index + startPage}
                                        </li>
                                    )
                            )}
                            {/* <li>1</li>
                            <li className="active">2</li> */}
                        </ul>
                        <S.Pager_btn className="next" onClick={onNextPage}>
                            다음
                        </S.Pager_btn>
                    </S.Pager>
                    <S.Board_register_btn onClick={onRegister}>
                        <i></i>게시물 등록하기
                    </S.Board_register_btn>
                </S.List_footer>
            </S.List_wrapper>
        </>
    );
}
