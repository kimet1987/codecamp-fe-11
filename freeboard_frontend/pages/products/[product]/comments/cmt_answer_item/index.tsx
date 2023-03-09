import * as CA from "../../../../../styles/products/comments/cmt_answer_item";

export default function CmtAnswerItem() {
    return (
        <CA.Wrapper>
            <i></i>
            <CA.Answer_wrap>
                <img src="/comment/user_img.svg" />
                <dl>
                    <dt>유저</dt>
                    <dd>답글</dd>
                </dl>
            </CA.Answer_wrap>
        </CA.Wrapper>
    );
}
