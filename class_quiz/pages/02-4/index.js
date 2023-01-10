import { useState } from "react";

export default function change() {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [rePw, setRePw] = useState("");
    const [eErr, setEErr] = useState("");
    const [err, setErr] = useState("");

    function emailChk(e) {
        setEmail(e.target.value);
    }
    function pwChk(e) {
        setPw(e.target.value);
    }
    function rePwChk(e) {
        setRePw(e.target.value);
    }

    function chkSign() {
        if (email !== "") {
            if (email.includes("@") === false) {
                setEErr("@ 포함한 올바른 이메일을 입력해주세요");
            } else {
                setEErr("");
            }
        }
        if (pw !== "" && rePw !== "") {
            if (pw !== rePw) {
                setErr("비밀번호를 확인해 주세요");
            } else {
                setErr("");
            }
        }
    }

    return (
        <div>
            <div>
                <label>이메일:</label>
                <input type="text" onChange={emailChk} />
                <div style={{ color: "red" }}>{eErr}</div>
            </div>
            <div>
                <label>비밀번호:</label>
                <input type="password" onChange={pwChk} />
                <div style={{ color: "red" }}>{err}</div>
            </div>
            <div>
                <label>비밀번호 확인:</label>
                <input type="password" onChange={rePwChk} />
                <div style={{ color: "red" }}>{err}</div>
            </div>
            <button onClick={chkSign}>가입하기</button>
        </div>
    );
}
