import { RedInput, BlueBtn } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
    return (
        <div>
            작성자: <RedInput type="text" onChange={props.onWriter} />
            제목: <input type="text" onChange={props.onTitle} />
            내용: <input type="text" onChange={props.onContents} />
            <BlueBtn
                onClick={props.isEdit ? props.onClickUpdate : props.onSubmit}
            >
                {props.isEdit ? "수정" : "등록"}하기
            </BlueBtn>
        </div>
    );
}
