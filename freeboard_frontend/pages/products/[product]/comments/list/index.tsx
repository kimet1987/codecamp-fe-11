import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import CommentItem from "../comment_item";
import * as PC from "../../../../../styles/products/comments/list";

export const FETCH_USED_ITEM_QUESTIONS = gql`
    query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
        fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
            _id
            contents
            createdAt
            user {
                _id
                name
            }
        }
    }
`;

export default function CommentList() {
    const router = useRouter();
    if (typeof router.query.product !== "string") {
        return <></>;
    }

    const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
        variables: {
            useditemId: router.query.product,
        },
    });

    const onLoadMore = () => {
        if (data === undefined) return;
        fetchMore({
            variables: {
                page:
                    Math.ceil(
                        (data?.fetchUseditemQuestions.length ?? 10) / 10
                    ) + 1,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (fetchMoreResult?.fetchUseditemQuestions === undefined)
                    return {
                        fetchUseditemQuestions: [
                            ...prev.fetchUseditemQuestions,
                        ],
                    };
                return {
                    fetchUseditemQuestions: [
                        ...prev.fetchUseditemQuestions,
                        ...fetchMoreResult.fetchUseditemQuestions,
                    ],
                };
            },
        });
    };

    return (
        <PC.Wrapper>
            <InfiniteScroll
                pageStart={0}
                loadMore={onLoadMore}
                hasMore={true}
                useWindow={false}
            >
                <ul>
                    {data?.fetchUseditemQuestions.map((el: any) => (
                        <CommentItem key={el._id} el={el} />
                    ))}
                </ul>
            </InfiniteScroll>
        </PC.Wrapper>
    );
}
