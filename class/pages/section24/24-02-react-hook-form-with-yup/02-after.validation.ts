import * as yup from "yup";

export const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요!!"),
  title: yup.string().required("제목을 입력해주세요!!"),
  contents: yup.string().required("내용을 입력해주세요!!"),

  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다.")
    .required("이메일을 필수 입력입니다."),
  password: yup
    .string()
    .min(4, "비밀번호 최소 4자리")
    .max(15, "최대 15자리")
    .required(),
  phone: yup
    .string()
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, "자리수 안맞음")
    .required(),
});
