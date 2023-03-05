import { useQuery, gql, useMutation } from "@apollo/client";
import {
  type IMutation,
  type IMutationLikeBoardArgs,
  type IQuery,
  type IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

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

export default function OptimisticUIpage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: "63fdcd44aef9f000281b2f8d" },
    }
  );

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const onLike = (): void => {
    void likeBoard({
      variables: {
        boardId: "63fdcd44aef9f000281b2f8d",
      },
      // refetchQueries:[{}]
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "63fdcd44aef9f000281b2f8d" },
          data: {
            fetchBoard: {
              _id: "63fdcd44aef9f000281b2f8d",
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
      <span>좋아요: {data?.fetchBoard.likeCount}</span>
      <button onClick={onLike}>좋아요 올리기</button>
    </>
  );
}
