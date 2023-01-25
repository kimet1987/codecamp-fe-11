import * as C from "../../../../styles/board/comment_list";

export default function CommentList() {
    return (
        <>
            <C.List_wrap>
                <li>
                    <C.User_Img src="/comment/user_img.svg"></C.User_Img>
                    <C.Comment_content>
                        <C.Comment_header>
                            <span>작성자</span>
                            <C.Star_wrap>
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                                <button>5</button>
                            </C.Star_wrap>
                        </C.Comment_header>
                        <p></p>
                        <C.Data></C.Data>
                    </C.Comment_content>
                    <C.Btn_wrap>
                        <button></button>
                        <button></button>
                    </C.Btn_wrap>
                </li>
            </C.List_wrap>
        </>
    );
}
