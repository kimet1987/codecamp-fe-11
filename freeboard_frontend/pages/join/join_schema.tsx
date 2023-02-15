import * as yup from "yup";

export const schema = yup.object({
    email: yup
        .string()
        .email("이메일 형식에 적합하지 않습니다.")
        .required("이메일을 필수 입력입니다."),
    name: yup.string().required().min(5, "최소 5자 이상 입력"),
    pw: yup
        .string()
        .required()
        .matches(
            /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/,
            "8~16자로 영문, 숫자, 특수기호를 조합해서 사용하세요."
        ),

    pwRe: yup
        .string()
        .required()
        .oneOf([yup.ref("pw")], "비밀번호가 일치 하지 않습니다."),
});
