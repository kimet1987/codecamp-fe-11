import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled";

const Scroll_List = styled.div`
    margin: 20px 30px;
    padding: 20px;
    border: 3px solid black;
`;
const Scroll_Item = styled.div`
    display: flex;
    gap: 0 20px;
    border: 1px solid black;
    :nth-child(2n - 1) {
        border-bottom: none;
    }
    :nth-child(2n) {
        border-bottom: none;
    }
    span {
        text-align: center;
    }
    span:nth-of-type(1) {
        width: 20%;
    }
    span:nth-of-type(2) {
        width: 30%;
    }
    span:nth-of-type(3) {
        width: 40%;
    }
`;

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
            writer
            title
        }
    }
`;
export default function staticRoutingMovedPage(): JSX.Element {
    const { data, fetchMore } = useQuery(FETCH_BOARDS);

    const onLoadMore = (): void => {
        if (data === undefined) return;
        void fetchMore({
            variables: {
                page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (fetchMoreResult.fetchBoards === undefined) {
                    return {
                        fetchBoards: [...prev.fetchBoards],
                    };
                }

                return {
                    fetchBoards: [
                        ...prev.fetchBoards,
                        ...fetchMoreResult.fetchBoards,
                    ],
                };
            },
        });
    };

    return (
        <Scroll_List>
            <InfiniteScroll
                pageStart={0}
                loadMore={onLoadMore}
                hasMore={true}
                useWindow={false}
            >
                {data?.fetchBoards.map((el: any, index: number) => (
                    <Scroll_Item key={index + 1}>
                        <span>{el.title}</span>
                        <span>{el.writer}</span>
                        <span>{el.contents}</span>
                    </Scroll_Item>
                )) ?? <></>}
            </InfiniteScroll>
        </Scroll_List>
    );
}
