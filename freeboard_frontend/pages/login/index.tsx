import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/stores";
import {
    IMutation,
    IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import * as L from "../../styles/login";
import { schema } from "./login_schema";
import { wrapFormAsync } from "../../src/commons/libraries/asyncFunc";
import InputLogin from "../../src/components/commons/inputs/login";
import ButtonLogin from "../../src/components/commons/buttons/login";

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            accessToken
        }
    }
`;

interface IFormData {
    email: string;
    password: string;
}

export default function LoginPage() {
    const router = useRouter();
    const [, setAccessToken] = useRecoilState(accessTokenState);

    const { register, handleSubmit, formState } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const [loginUser] = useMutation<
        Pick<IMutation, "loginUser">,
        IMutationLoginUserArgs
    >(LOGIN_USER);

    const onLogin = async (data: IFormData): Promise<void> => {
        try {
            // 1. 로그인 뮤테이션 날려서 accessToken 받아오기
            const result = await loginUser({
                variables: {
                    email: data.email,
                    password: data.password,
                },
            });
            const accessToken = result.data?.loginUser.accessToken;
            console.log(accessToken);

            // 1. 받아온 accessToken을 글로벌스테이스에 저장하기
            if (accessToken === undefined) {
                alert("로그인에 실패 했습니다. 다시 실행해주세요.");
                return;
            }
            setAccessToken(accessToken);
            localStorage.setItem("accessToken", accessToken); // 임시 사용 나중에 지울 예정!!

            // 로그인 성공
            void router.push("/main");
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            }
        }
    };

    return (
        <>
            <L.Background>
                <L.Back_btn>뒤로가기</L.Back_btn>
                <L.Wrapper onSubmit={wrapFormAsync(handleSubmit(onLogin))}>
                    <h2>
                        <em>Art</em> Center
                    </h2>
                    <L.Input_Wrap>
                        <InputLogin
                            type="text"
                            placeholder="이메일을 입력해주세요"
                            register={register("email")}
                            errMsg={formState.errors.email?.message ?? ""}
                        />
                        <InputLogin
                            type="password"
                            placeholder="패스워드를 입력해주세요"
                            register={register("password")}
                            errMsg={formState.errors.password?.message ?? ""}
                        />
                        <L.State>
                            <input type="checkbox" id="aa" />
                            <label htmlFor="aa">로그인 상태 유지</label>
                        </L.State>
                    </L.Input_Wrap>
                    <ButtonLogin title="로그인 하기" />
                    <ul>
                        <li>이메일 찾기</li>
                        <li>비밀번호 찾기</li>
                        <li>회원 가입</li>
                    </ul>
                </L.Wrapper>
            </L.Background>
        </>
    );
}
