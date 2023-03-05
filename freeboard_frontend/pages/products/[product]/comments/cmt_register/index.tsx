import { Dispatch, SetStateAction } from "react";
import { IUseditemQuestion } from "../../../../../src/commons/types/generated/types";
import { useCreateUseditemQuestion } from "../../../../../src/components/commons/useMutation/useCreateUseditemQuestion";
import { useUpdateUseditemQuestion } from "../../../../../src/components/commons/useMutation/useUpdateUseditemQuestion";
import * as CR from "../../../../../styles/products/comments/cmt_register";

export interface IQuestionProps {
    isEdit?: boolean;
    setIsEdit?: Dispatch<SetStateAction<boolean>>;
    el?: IUseditemQuestion;
}

export default function CmtRegister(props: IQuestionProps) {
    const { onQuestion, onCmtRegister, question } = useCreateUseditemQuestion();
    const { onUpdate, setIsEdit } = useUpdateUseditemQuestion(props.setIsEdit);

    console.log(props);
    return (
        <CR.Wrapper isEdit={props.isEdit}>
            {props.isEdit ?? <h3>문의하기</h3>}
            {props.isEdit && (
                <CR.User>
                    <img src="/comment/user_img.svg" />
                    <span>{props.el?.user.name}</span>
                </CR.User>
            )}
            <CR.Contents_wrapper isEdit={props.isEdit}>
                <CR.TextArea
                    onChange={onQuestion}
                    value={question !== "" ? question : props.el?.contents}
                    placeholder={props.isEdit ? "" : "문의사항을 남겨주세요"}
                ></CR.TextArea>
                <CR.Cmt_bottom>
                    <span>
                        {question !== ""
                            ? question.length
                            : props.el?.contents.length ?? 0}
                    </span>{" "}
                    /<span>100</span>
                    <CR.Btn
                        onClick={!props.isEdit ? onCmtRegister : onUpdate}
                        isEdit={props.isEdit}
                    >
                        {!props.isEdit ? "문의하기" : "수정하기"}
                    </CR.Btn>
                </CR.Cmt_bottom>
            </CR.Contents_wrapper>
        </CR.Wrapper>
    );
}
