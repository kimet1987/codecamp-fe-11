import { gql, useQuery, useMutation } from "@apollo/client";

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

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int) {
        deleteBoard(number: $number) {
            message
        }
    }
`;

export default function staticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS);
    const [deleteBoard] = useMutation(DELETE_BOARD);

    const onDelete = (e) => {
        Number(e.target.id);
        deleteBoard({
            variables: { number: Number(e.target.id) },
            refetchQueries: [{ query: FETCH_BOARDS }],
        });
    };

    return (
        <>
            {data?.fetchBoards.map((el, index) => (
                <div key={el.number}>
                    {/*index는 게시글을 삭제 할때 다음 게시글이 올라오면서 기존의 index와 동일하는 착시 발생*/}
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{ margin: "10px" }}>{el.number}</span>
                    <span style={{ margin: "10px" }}>{el.title}</span>
                    <span style={{ margin: "10px" }}>{el.writer}</span>
                    <span>
                        <button id={el.number} onClick={onDelete}>
                            삭제
                        </button>
                    </span>
                </div>
            ))}
            {/* <div>작성자 : {data?.fetchBoard.writer}</div>
            <div>제목 : {data?.fetchBoard.title}</div>
            <div>내용 : {data?.fetchBoard.contents}</div>
            <div>1번 게시글 이동이 완료 되었습니다</div>; */}
        </>
    );
}
