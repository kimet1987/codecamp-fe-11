import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../src/components/button";
import Input from "../../../src/components/input";

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
            <Input
                type="text"
                title={"작성자"}
                register={register("writer")}
                isErr={formState.errors}
                errMsg={formState.errors.writer?.message}
            />
            <Input
                type="password"
                title={"비밀번호"}
                register={register("password")}
                isErr={formState.errors}
                errMsg={formState.errors.password?.message}
            />
            <Input
                type="text"
                title={"제목"}
                register={register("title")}
                isErr={formState.errors}
                errMsg={formState.errors.title?.message}
            />
            <Input
                type="text"
                title={"내용"}
                register={register("content")}
                isErr={formState.errors}
                errMsg={formState.errors.content?.message}
            />
            <Button title="등록하기" isActive={formState.isValid} />
        </form>
    );
}
