import { RedInput, BlueBtn } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
    return (
        <div>
            작성자: <RedInput type="text" onChange={props.onWriter} />
            제목: <input type="text" onChange={props.onTitle} />
            내용: <input type="text" onChange={props.onContents} />
            <BlueBtn onClick={props.Submit} isActive={props.isActive}>
                GRAPHQL - API 요청하기
            </BlueBtn>
        </div>
    );
}
