import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
    query {
        fetchBoards {
            number
            writer
            title
            contents
        }
    }
`;

export default function staticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS);

    const event = (e: MouseEvent<HTMLDivElement>) => {
        alert(e.currentTarget.id);
    };

    return (
        <>
            {data?.fetchBoards.map((el: any) => (
                <div id={el.writer} onClick={event}>
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{ margin: "10px" }}>{el.number}</span>
                    <span style={{ margin: "10px" }}>{el.title}</span>
                    <span style={{ margin: "10px" }}>{el.writer}</span>
                </div>
            ))}
            {/* <div>작성자 : {data?.fetchBoard.writer}</div>
            <div>제목 : {data?.fetchBoard.title}</div>
            <div>내용 : {data?.fetchBoard.contents}</div>
            <div>1번 게시글 이동이 완료 되었습니다</div>; */}
        </>
    );
}
