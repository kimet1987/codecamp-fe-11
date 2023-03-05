import * as PC from "../../../../../styles/products/comments/item";
import { getDate } from "../../../../../src/commons/libraries/utils";
import { IUseditemQuestion } from "../../../../../src/commons/types/generated/types";
import { useFetchUserLoggedIn } from "../../../../../src/components/commons/useQuery/useFetchUserLoggedin";
import { useDeleteQuestion } from "../../../../../src/components/commons/useMutation/useDeleteQuestion";
import { useState } from "react";
import CmtRegister from "../cmt_register";

interface IProductComment {
    el: IUseditemQuestion;
}

export default function CommentItem(props: IProductComment) {
    const { data } = useFetchUserLoggedIn();
    const { onDel } = useDeleteQuestion();
    const [isEdit, setIsEdit] = useState(false);

    const onClickUpdate = () => {
        setIsEdit(true);
    };

    return (
        <>
            {!isEdit ? (
                <PC.CommentItem>
                    <PC.User_Img>
                        <img src="/comment/user_img.svg" />
                    </PC.User_Img>
                    <PC.Content>
                        <li>{props.el.user.name}</li>
                        <li>{props.el.contents}</li>
                        <li>{getDate(props.el.createdAt)}</li>
                    </PC.Content>

                    {props.el.user._id !== data?.fetchUserLoggedIn._id ? (
                        <PC.Btn_wrap>
                            <button
                                id={props.el._id}
                                className="reply"
                            ></button>
                        </PC.Btn_wrap>
                    ) : (
                        <PC.Btn_wrap>
                            <button
                                id={props.el._id}
                                className="edit"
                                onClick={onClickUpdate}
                            ></button>
                            <button
                                id={props.el._id}
                                className="del"
                                onClick={onDel}
                            ></button>
                        </PC.Btn_wrap>
                    )}
                </PC.CommentItem>
            ) : (
                <CmtRegister
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    el={props.el}
                />
            )}
        </>
    );
}
