import * as yup from "yup";

export const schema = yup.object({
    email: yup
        .string()
        .email("이메일 형식에 적합하지 않습니다.")
        .required("이메일을 필수 입력입니다."),
    password: yup
        .string()
        .min(8, "비밀번호 최소 8자리")
        .max(15, "최대 15자리")
        .required(),
});
