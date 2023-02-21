import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/stores";

const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            accessToken
        }
    }
`;

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [loginUser] = useMutation(LOGIN_USER);

    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

    const onEmail = (e: any) => {
        setEmail(e.currentTarget.value);
    };

    const onPw = (e: any) => {
        setPw(e.currentTarget.value);
    };

    const onLogin = async () => {
        try {
            const result = await loginUser({
                variables: { email, password: pw },
            });
            const accessToken = result.data?.loginUser.accessToken;
            console.log(accessToken);

            if (accessToken === undefined) {
                alert("로그인을 먼저 해주세요");
            }
            setAccessToken(accessToken);

            router.push("/28/payment/loading");
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            }
        }
    };

    return (
        <>
            <div>
                <span>이메일 :</span>
                <input type="text" onChange={onEmail} />
            </div>
            <div>
                <span>아이디 :</span>
                <input type="password" onChange={onPw} />
            </div>
            <button onClick={onLogin}>로그인</button>
        </>
    );
}
