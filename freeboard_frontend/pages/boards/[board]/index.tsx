import MovedCon from "../../../src/components/units/board/moved/BoardMoved.container";
import Comment from "../[board]/comment";
import CommentList from "./comment/list";

export default function BoardPage() {
    return (
        <>
            <MovedCon />
            <Comment />
            <CommentList />
        </>
    );
}
