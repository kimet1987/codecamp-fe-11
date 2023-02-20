import * as yup from "yup";

export const schema = yup.object({
    name: yup.string().required("필수 입력입니다."),
    remarks: yup.string().required("필수 입력입니다."),
    contents: yup.string().required("필수 입력입니다."),
    price: yup.string().required("필수 입력입니다."),
});
