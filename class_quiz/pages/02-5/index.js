import { useState } from "react";
import {
    Wrapper,
    Header,
    Form,
    Input_wrap,
    Signin_btn,
    Sub_list,
    Kakao_btn,
} from "../../styles/02-index";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    const [err1, setErr1] = useState("");
    const [err2, setErr2] = useState("");

    function emailChk(e) {
        setEmail(e.target.value);
    }
    function pwChk(e) {
        setPw(e.target.value);
    }
    function login() {
        if (setEmail !== "") {
            if (email.includes("@") !== true) {
                setErr1("이메일 주소를 다시 확인해 주세요");
            } else {
                setErr1("");
            }
        }
        if (setEmail !== "") {
            if (pw.length < 8 || pw.length > 16) {
                setErr2("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다");
            } else {
                setErr2("");
            }
        }
    }

    return (
        <Wrapper>
            <Header>
                <img src="/location.svg" />
                <h2>잇츠로드</h2>
            </Header>
            <Form>
                <Input_wrap>
                    <input type="text" onChange={emailChk} />
                    <span></span>
                    <p>{err1}</p>
                </Input_wrap>
                <Input_wrap className="last">
                    <input type="password" onChange={pwChk} />
                    <span></span>
                    <p>{err2}</p>
                </Input_wrap>
                <Signin_btn onClick={login}>로그인</Signin_btn>
            </Form>
            <Sub_list>
                <li>이메일 찾기</li>
                <li>비밀번호 찾기</li>
                <li>회원가입</li>
            </Sub_list>
            <Kakao_btn>카카오톡으로 로그인</Kakao_btn>
        </Wrapper>
    );
}
