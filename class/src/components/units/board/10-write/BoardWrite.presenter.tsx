import { RedInput, BlueBtn } from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
    return (
        <div>
            작성자:{" "}
            <RedInput
                type="text"
                onChange={props.onWriter}
                defaultValue={props.data?.fetchBoard.writer}
            />
            제목:{" "}
            <input
                type="text"
                onChange={props.onTitle}
                defaultValue={props.data?.fetchBoard.title}
            />
            내용:{" "}
            <input
                type="text"
                onChange={props.onContents}
                defaultValue={props.data?.fetchBoard.contents}
            />
            <BlueBtn
                onClick={props.isEdit ? props.onClickUpdate : props.onSubmit}
            >
                {props.isEdit ? "수정" : "등록"}하기
            </BlueBtn>
        </div>
    );
}
