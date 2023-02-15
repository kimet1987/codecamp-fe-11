import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";

export default function ReactHook() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });
    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <form onSubmit={wrapFormAsync(handleSubmit(onSubmit))}>
            <div>
                <label>작성자</label>
                <input
                    type="text"
                    {...register("writer", {
                        required: "필수값 입니다",
                        minLength: {
                            value: 5,
                            message: "5자 이상 입력해주세요",
                        },
                    })}
                />
                <p style={{ color: "tomato" }}>{errors?.writer?.message}</p>
            </div>
            <div>
                <label>비밀번호</label>
                <input
                    type="password"
                    {...register("password", {
                        required: "필수값 입니다",
                        maxLength: {
                            value: 8,
                            message: "8자 이내 입력해주세요",
                        },
                        pattern: {
                            value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]){,8}$/,
                            message: "영문, 특수, 숫자 조합 바람",
                        },
                    })}
                />
                <p style={{ color: "tomato" }}>{errors?.password?.message}</p>
            </div>
            <div>
                <label>제목</label>
                <input
                    type="text"
                    {...register("title", {
                        required: "필수값 입니다",
                        maxLength: {
                            value: 100,
                            message: "100자 이내 입력해주세요",
                        },
                    })}
                />
                <p style={{ color: "tomato" }}>{errors?.title?.message}</p>
            </div>
            <div>
                <label>내용</label>
                <input
                    type="text"
                    {...register("content", {
                        required: "필수값 입니다",
                        maxLength: {
                            value: 1000,
                            message: "1000자 이내 입력해주세요",
                        },
                    })}
                />
                <p style={{ color: "tomato" }}>{errors?.content?.message}</p>
            </div>
            <button type="submit">등록하기</button>
        </form>
    );
}
