import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            _id
            likeCount
        }
    }
`;

const LIKE_BOARD = gql`
    mutation likeBoard($boardId: ID!) {
        likeBoard(boardId: $boardId)
    }
`;

export default function OptimisticUI() {
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: "63fdd73daef9f000281b2f94" },
    });

    const [likeBoard] = useMutation(LIKE_BOARD);

    // const onLike = async (): Promise<void> => {
    //     await likeBoard({
    //         variables: { boardId: "63fdd73daef9f000281b2f94" },
    //         refetchQueries: [
    //             {
    //                 query: FETCH_BOARD,
    //                 variables: { boardId: "63fdd73daef9f000281b2f94" },
    //             },
    //         ],
    //     });
    // };

    const onLike = async (): Promise<void> => {
        await likeBoard({
            variables: { boardId: "63fdd73daef9f000281b2f94" },
            optimisticResponse: {
                likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
            },
            update: (cache, { data }) => {
                cache.writeQuery({
                    query: FETCH_BOARD,
                    variables: { boardId: "63fdd73daef9f000281b2f94" },
                    data: {
                        fetchBoard: {
                            _id: "63fdd73daef9f000281b2f94",
                            __typename: "Board",
                            likeCount: data?.likeBoard,
                        },
                    },
                });
            },
        });
    };

    return (
        <>
            <span>좋아요 :{data?.fetchBoard.likeCount}</span>
            <button onClick={onLike}>좋아요 올리기</button>
        </>
    );
}
