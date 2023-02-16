import { gql, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../src/commons/libraries/asyncFunc";
import {
    IMutation,
    IMutationCreateUserArgs,
} from "../../src/commons/types/generated/types";
import InputJoin from "../../src/components/commons/inputs/join";
import * as J from "../../styles/join";
import { schema } from "./join_schema";

const CREATE_USER = gql`
    mutation createUser($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
            _id
            email
            name
        }
    }
`;
interface IFormData {
    email: string;
    pw: string;
    pwRe: string;
    name: string;
}

export default function JoinPage() {
    const router = useRouter();
    const [createUser] = useMutation<
        Pick<IMutation, "createUser">,
        IMutationCreateUserArgs
    >(CREATE_USER);

    const [isActive, setIsActive] = useState(false);
    const { register, handleSubmit, formState } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onClickJoin = async (data: IFormData): Promise<void> => {
        console.log(data);
        try {
            const result = await createUser({
                variables: {
                    createUserInput: {
                        name: data.name,
                        password: data.pw,
                        email: data.email,
                    },
                },
            });
            setIsActive(true);
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };
    const handleModal = () => {
        if (isActive) {
            router.push("/main");
        }
        setIsActive((prev) => !prev);
    };
    return (
        <>
            {isActive && (
                <J.Modal_wrap>
                    <Modal
                        open={true}
                        onOk={handleModal}
                        onCancel={handleModal}
                        className="modalStyle"
                    >
                        <h2>
                            <em>Art</em> Center
                        </h2>
                        <p>회원 가입을 축하합니다!!</p>
                    </Modal>
                </J.Modal_wrap>
            )}
            <J.Background>
                <J.Back_btn>뒤로가기</J.Back_btn>
                <J.Wrapper onSubmit={wrapFormAsync(handleSubmit(onClickJoin))}>
                    <h2>회원가입</h2>
                    <J.Input_Wrap>
                        <InputJoin
                            title="이메일"
                            type="text"
                            placeholder="이메일을 입력해주세요"
                            register={register("email")}
                            errMsg={formState.errors.email?.message ?? ""}
                        />
                        <InputJoin
                            title="이름"
                            type="text"
                            placeholder="이름을 입력해주세요"
                            register={register("name")}
                            errMsg={formState.errors.name?.message ?? ""}
                        />
                        <InputJoin
                            title="비밀번호"
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            register={register("pw")}
                            errMsg={formState.errors.pw?.message ?? ""}
                        />
                        <InputJoin
                            title="비밀번호"
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            register={register("pwRe")}
                            errMsg={formState.errors.pwRe?.message ?? ""}
                        />
                    </J.Input_Wrap>
                    <J.Join_btn type="submit">회원가입 하기</J.Join_btn>
                </J.Wrapper>
            </J.Background>
        </>
    );
}
