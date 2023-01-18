import { gql, useQuery } from "@apollo/client";
import * as S from "../../styles/boards";
import { getDate } from "../../src/commons/libraries/utils";

const FETCH_BOARDS = gql`
    query {
        fetchBoards {
            _id
            createdAt
            title
            writer
        }
    }
`;
export default function BoardsList() {
    const { data } = useQuery(FETCH_BOARDS);

    return (
        <>
            <S.List_wrapper>
                <S.Header>
                    <span>번호</span>
                    <span>제목</span>
                    <span>작성자</span>
                    <span>날짜</span>
                </S.Header>
                <S.Contents>
                    <ul>
                        {data?.fetchBoards.map((el) => (
                            <li key={el._id}>
                                <span>
                                    {String(el._id).slice(-4).toUpperCase()}
                                </span>
                                <span>{el.title}</span>
                                <span>{el.writer}</span>
                                <span>{getDate(el.createdAt)}</span>
                            </li>
                        ))}
                    </ul>
                </S.Contents>
                <S.List_footer>
                    <S.Pager>
                        <S.Pager_btn className="prev">이전</S.Pager_btn>
                        <ul>
                            <li>1</li>
                            <li className="active">2</li>
                        </ul>
                        <S.Pager_btn className="next">다음</S.Pager_btn>
                    </S.Pager>
                    <S.Board_register_btn>
                        <i></i>게시물 등록하기
                    </S.Board_register_btn>
                </S.List_footer>
            </S.List_wrapper>
        </>
    );
}
