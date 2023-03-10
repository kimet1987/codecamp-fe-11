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
                        <p>?????? ????????? ???????????????!!</p>
                    </Modal>
                </J.Modal_wrap>
            )}
            <J.Background>
                <J.Back_btn>????????????</J.Back_btn>
                <J.Wrapper onSubmit={wrapFormAsync(handleSubmit(onClickJoin))}>
                    <h2>????????????</h2>
                    <J.Input_Wrap>
                        <InputJoin
                            title="?????????"
                            type="text"
                            placeholder="???????????? ??????????????????"
                            register={register("email")}
                            errMsg={formState.errors.email?.message ?? ""}
                        />
                        <InputJoin
                            title="??????"
                            type="text"
                            placeholder="????????? ??????????????????"
                            register={register("name")}
                            errMsg={formState.errors.name?.message ?? ""}
                        />
                        <InputJoin
                            title="????????????"
                            type="password"
                            placeholder="??????????????? ??????????????????"
                            register={register("pw")}
                            errMsg={formState.errors.pw?.message ?? ""}
                        />
                        <InputJoin
                            title="????????????"
                            type="password"
                            placeholder="??????????????? ??????????????????"
                            register={register("pwRe")}
                            errMsg={formState.errors.pwRe?.message ?? ""}
                        />
                    </J.Input_Wrap>
                    <J.Join_btn type="submit">???????????? ??????</J.Join_btn>
                </J.Wrapper>
            </J.Background>
        </>
    );
}
