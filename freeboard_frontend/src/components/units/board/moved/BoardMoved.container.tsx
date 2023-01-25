import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
    IQuery,
    IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import MovedPre from "./BoardMoved.presenter";
import { FETCH_BOARD, DELETE_BOARD, FETCH_BOARDS } from "./BoardMoved.queries";

export default function MovedCon() {
    const router = useRouter();
    const [deleteBoard] = useMutation(DELETE_BOARD);

    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
        FETCH_BOARD,
        {
            variables: {
                boardId: `${router.query.board}`,
            },
        }
    );
    if (!router || typeof router.query.board !== "string") return <></>;

    const onDel = (e: MouseEvent<HTMLButtonElement>) => {
        deleteBoard({
            variables: { boardId: router.query.board },
            refetchQueries: [{ query: FETCH_BOARDS }],
        });
    };
    const onList = (e: MouseEvent<HTMLButtonElement>) => {
        router.push(`/boards`);
    };
    const onEdit = (e: MouseEvent<HTMLButtonElement>) => {
        router.push(`/boards/${router.query.board}/edit`);
        console.log(data);
    };
    return (
        <MovedPre
            data={data}
            id={router.query.board}
            onDel={onDel}
            onList={onList}
            onEdit={onEdit}
        />
    );
}
