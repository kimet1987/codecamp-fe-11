import { useState } from "react";

export default function SignupStatePage() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [rePwd, setRePwd] = useState("");

    console.log(setEmail, pwd, setPwd, rePwd, setRePwd);

    function onChangeEmail(e) {}
    function onChangePwd(e) {}
    function onClickSignup() {
        if (email.includes("@") === false) {
            alert("이메일이 올바르지 않습니다");
        } else {
            alert("가입을 축하드립니다");
        }
    }
    return (
        <div>
            이메일: <input type="text" onChange={onChangeEmail} />
            비밀번호: <input type="password" onChange={onChangePwd} />
            <button onClick={onClickSignup}>회원 가입</button>
        </div>
    );
}
