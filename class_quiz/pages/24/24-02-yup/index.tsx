import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    writer: yup.string().required().min(5, "최소 5자 이상 입력"),
    password: yup
        .string()
        .required()
        .matches(
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]){,8}$/,
            "영문, 특수, 숫자 조합 바람"
        )
        .max(8, "8자리 이내 입력 바람"),
    title: yup.string().required().max(100, "100자 이하 입력 바람"),
    content: yup.string().required().max(1000, "1000자 이하 입력 바람"),
});

export default function ReactHook() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });
    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <form onSubmit={wrapFormAsync(handleSubmit(onSubmit))}>
            <div>
                <label>작성자</label>
                <input type="text" {...register("writer")} />
                <p style={{ color: "tomato" }}>
                    {formState.errors.writer?.message}
                </p>
            </div>
            <div>
                <label>비밀번호</label>
                <input type="password" {...register("password")} />
                <p style={{ color: "tomato" }}>
                    {formState.errors.password?.message}
                </p>
            </div>
            <div>
                <label>제목</label>
                <input type="text" {...register("title")} />
                <p style={{ color: "tomato" }}>
                    {formState.errors.title?.message}
                </p>
            </div>
            <div>
                <label>내용</label>
                <input type="text" {...register("content")} />
                <p style={{ color: "tomato" }}>
                    {formState.errors.content?.message}
                </p>
            </div>
            <button type="submit">등록하기</button>
        </form>
    );
}
