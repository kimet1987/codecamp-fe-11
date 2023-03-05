import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { CREATE_USED_ITEM_QUESTION } from "../../../../pages/products/[product]/comments/cmt_register/querise";
import { FETCH_USED_ITEM_QUESTIONS } from "../../../../pages/products/[product]/comments/list";

export const useCreateUseditemQuestion = () => {
    const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
    const router = useRouter();
    const [question, setQuestion] = useState("");

    const onQuestion = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setQuestion(e.target.value);
    };

    const onCmtRegister = async () => {
        try {
            if (typeof router.query.product !== "string") {
                alert("시스템에 문제가 있습니다.");
                return;
            }
            if (question !== "") {
                setQuestion("");
            }

            await createUseditemQuestion({
                variables: {
                    createUseditemQuestionInput: {
                        contents: question,
                    },
                    useditemId: router.query.product,
                },
                refetchQueries: [
                    {
                        query: FETCH_USED_ITEM_QUESTIONS,
                        variables: { useditemId: router.query.product },
                    },
                ],
            });
        } catch (error) {
            if (error instanceof Error) alert("error");
        }
    };
    return { onQuestion, onCmtRegister, question };
};
