import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import * as P from "./style";

export interface IPagiBasicProps {
    count?: number;
    refetch: (
        variables: Partial<IQueryFetchBoardsArgs>
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export default function BasicType(props: IPagiBasicProps) {
    const [startPage, setStartPage] = useState(1);
    const [color, setColor] = useState(1);

    const lastPage = Math.ceil((Number(props.count) ?? 10) / 10);

    const onPrevPage = (): void => {
        if (startPage === 1) return;
        setStartPage(startPage - 10);
        void props.refetch({ page: startPage - 10 });
    };
    const onNextPage = (): void => {
        if (startPage + 10 <= lastPage) {
            setStartPage(startPage + 10);
            void props.refetch({ page: startPage + 10 });
        }
    };

    const onClickPage = (e: MouseEvent<HTMLLIElement>): void => {
        const pageNum = Number(e.currentTarget.id);
        setColor(pageNum);
        void props.refetch({ page: pageNum });
    };

    return (
        <P.Pager>
            <P.Pager_btn className="prev" onClick={onPrevPage}>
                이전
            </P.Pager_btn>
            <ul>
                {new Array(10).fill("Num").map(
                    (_, index) =>
                        index + startPage <= lastPage && (
                            <li
                                key={index + startPage}
                                id={String(index + startPage)}
                                onClick={onClickPage}
                                className={
                                    index + startPage === color ? "active" : ""
                                }
                            >
                                {index + startPage}
                            </li>
                        )
                )}
            </ul>
            <P.Pager_btn className="next" onClick={onNextPage}>
                다음
            </P.Pager_btn>
        </P.Pager>
    );
}
