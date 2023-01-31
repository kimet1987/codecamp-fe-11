import { gql, useQuery } from "@apollo/client";
import * as S from "../../styles/boards";
import { getDate } from "../../src/commons/libraries/utils";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
    IQuery,
    IQueryFetchBoardsArgs,
    IQueryFetchBoardsCountArgs,
} from "../../src/commons/types/generated/types";
import BasicType from "../../src/components/commons/pagination/basic_type";

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

    const { data: dataBoardsCount } = useQuery<
        Pick<IQuery, "fetchBoardsCount">,
        IQueryFetchBoardsCountArgs
    >(FETCH_BOARDS_COUNT);

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
                    <BasicType
                        refetch={refetch}
                        count={dataBoardsCount?.fetchBoardsCount}
                    />
                    <S.Board_register_btn onClick={onRegister}>
                        <i></i>게시물 등록하기
                    </S.Board_register_btn>
                </S.List_footer>
            </S.List_wrapper>
        </>
    );
}
