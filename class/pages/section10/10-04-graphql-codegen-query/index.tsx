import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
    IQuery,
    IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
    query fetchBoard($number: Int) {
        fetchBoard(number: $number) {
            number
            writer
            title
            contents
        }
    }
`;

export default function staticRoutingMovedPage() {
    const router = useRouter();
    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
        FETCH_BOARD,
        {
            variables: { number: Number(router.query.board) },
        }
    );

    return (
        <>
            <div>작성자 : {data?.fetchBoard?.writer}</div>
            <div>제목 : {data?.fetchBoard?.title}</div>
            <div>내용 : {data?.fetchBoard?.contents}</div>
            <div>{router.query.board}번 게시글 이동이 완료 되었습니다</div>;
        </>
    );
}
