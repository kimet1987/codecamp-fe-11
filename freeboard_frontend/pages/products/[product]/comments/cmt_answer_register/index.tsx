import * as CR from "../../../../../styles/products/comments/cmt_answer_register";

export default function CmtAnwserRegister() {
    return (
        <CR.Wrapper>
            <CR.User>
                <img src="/comment/user_img.svg" />
            </CR.User>
            <span>유저 이름</span>
            <CR.Contents_wrapper>
                <CR.TextArea></CR.TextArea>
                <CR.Cmt_bottom>
                    <span>0</span> / <span>100</span>
                    <CR.Btn>답글등록</CR.Btn>
                </CR.Cmt_bottom>
            </CR.Contents_wrapper>
        </CR.Wrapper>
    );
}
