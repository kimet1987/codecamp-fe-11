import { useState } from "react";

export default function change() {
    const [text, setText] = useState("안녕하세요");
    // function onChange() {
    //     document.getElementById("aaa").innerText = "반갑습니다";
    // }
    function onChange() {
        setText("반갑습니다");
    }

    return (
        <div>
            <button id="aaa" onClick={onChange}>
                {text}
            </button>
        </div>
    );
}
