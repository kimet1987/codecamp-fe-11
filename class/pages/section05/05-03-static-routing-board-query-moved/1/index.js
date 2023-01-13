import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
    query {
        fetchBoard(number: 1) {
            number
            writer
            title
            contents
        }
    }
`;

export default function staticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARD);

    console.log(data);

    return (
        <>
            <div>작성자 : {data?.fetchBoard.writer}</div>
            <div>제목 : {data?.fetchBoard.title}</div>
            <div>내용 : {data?.fetchBoard.contents}</div>
            <div>1번 게시글 이동이 완료 되었습니다</div>;
        </>
    );
}
