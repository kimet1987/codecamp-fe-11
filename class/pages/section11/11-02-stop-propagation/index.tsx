import { gql, useQuery } from "@apollo/client";
import CheckBox from "./CheckBox";
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

    const qqq1 = (e: MouseEvent<HTMLDivElement>) => {
        alert("1번 클릭");
    };

    const qqq4 = (e: MouseEvent<HTMLDivElement>) => {
        alert("4번 클릭");
    };

    return (
        <>
            {data?.fetchBoards.map((el: any) => (
                <div id={el.writer} onClick={qqq1}>
                    <CheckBox />
                    <span style={{ margin: "10px" }} onClick={qqq4}>
                        {el.number}
                    </span>
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
