import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
    IQuery,
    IQueryFetchBoardCommentsArgs,
} from "../../../../src/commons/types/generated/types";
import * as C from "../../../../styles/board/comment_list";
import CommentItem from "../../../../src/components/units/board/comment_item";
import InfiniteScroll from "react-infinite-scroller";
export const FETCH_BOARD_COMMENTS = gql`
    query fetchBoardComments($boardId: ID!, $page: Int) {
        fetchBoardComments(boardId: $boardId, page: $page) {
            _id
            writer
            contents
            createdAt
            rating
        }
    }
`;

export default function CommentList() {
    const router = useRouter();
    if (typeof router.query.board !== "string") return <></>;

    const { data, fetchMore } = useQuery<
        Pick<IQuery, "fetchBoardComments">,
        IQueryFetchBoardCommentsArgs
    >(FETCH_BOARD_COMMENTS, {
        variables: { boardId: router.query.board },
    });

    const onLoadMore = (): void => {
        if (data === undefined) return;

        void fetchMore({
            variables: {
                page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (fetchMoreResult?.fetchBoardComments === undefined)
                    return { fetchBoardComments: [...prev.fetchBoardComments] };

                return {
                    fetchBoardComments: [
                        ...prev.fetchBoardComments,
                        ...fetchMoreResult.fetchBoardComments,
                    ],
                };
            },
        });
    };

    return (
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
            <C.List_wrap>
                {data?.fetchBoardComments.map((el) => (
                    <CommentItem key={el._id} el={el} />
                ))}
            </C.List_wrap>
        </InfiniteScroll>
    );
}
