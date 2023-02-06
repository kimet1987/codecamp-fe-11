import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
    IQuery,
    IQueryFetchBoardArgs,
    IMutation,
    IMutationDislikeBoardArgs,
    IMutationLikeBoardArgs,
} from "../../../../commons/types/generated/types";
import MovedPre from "./BoardMoved.presenter";
import {
    FETCH_BOARD,
    DELETE_BOARD,
    FETCH_BOARDS,
    LIKE_BOARD,
    DISLIKE_BOARD,
} from "./BoardMoved.queries";

export default function MovedCon() {
    const router = useRouter();
    const [deleteBoard] = useMutation(DELETE_BOARD);

    const [likeBoard] = useMutation<
        Pick<IMutation, "likeBoard">,
        IMutationLikeBoardArgs
    >(LIKE_BOARD);
    const [dislikeBoard] = useMutation<
        Pick<IMutation, "dislikeBoard">,
        IMutationDislikeBoardArgs
    >(DISLIKE_BOARD);

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
    };

    const onLike = async (): Promise<void> => {
        if (typeof router.query.board !== "string") {
            alert("시스템에 문제가 있습니다.");
            return;
        }

        await likeBoard({
            variables: { boardId: router.query.board },
            refetchQueries: [
                {
                    query: FETCH_BOARD,
                    variables: { boardId: router.query.board },
                },
            ],
        });
    };

    const onDislike = async (): Promise<void> => {
        if (typeof router.query.board !== "string") {
            alert("시스템에 문제가 있습니다.");
            return;
        }

        await dislikeBoard({
            variables: { boardId: router.query.board },
            refetchQueries: [
                {
                    query: FETCH_BOARD,
                    variables: { boardId: router.query.board },
                },
            ],
        });
    };

    console.log(data);
    return (
        <MovedPre
            data={data}
            id={router.query.board}
            onDel={onDel}
            onList={onList}
            onEdit={onEdit}
            onDislike={onDislike}
            onLike={onLike}
        />
    );
}
