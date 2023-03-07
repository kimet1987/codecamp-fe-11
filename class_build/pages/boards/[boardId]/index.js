import { useRouter } from "next/router";

export default function BoardsPage(params) {
    const router = useRouter();
    return (
        <>
            <div>안녕하세요 게시판 동적 페이지입니다</div>
            <div>게시글 아이디 : {router.query.boardId}</div>;
        </>
    );
}
