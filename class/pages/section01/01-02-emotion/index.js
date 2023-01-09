import { MyEmailInput, MyEmail } from "../../../styles/01-02-emotion";

export default function EmotionPage() {
    // 여기는 자바스크립트 쓰는법

    return (
        <div>
            <MyEmail>이메일: </MyEmail>
            <MyEmailInput type="text" />
            <button>클릭 하세요!!</button>
            <img src="/next.svg" />
        </div>
    );
}
