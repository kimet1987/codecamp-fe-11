import { useState } from "react";

export default function change() {
    const [num, setNum] = useState("000000");
    // function onChange() {
    //     let aaa = document.getElementById("aaa");
    //     aaa.innerText = String(Math.floor(Math.random() * 1000000)).padStart(
    //         6,
    //         "0"
    //     );
    // }
    function onChange() {
        setNum(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"));
    }

    return (
        <div>
            <p id="aaa">{num}</p>
            <button onClick={onChange}>인증번호전송</button>
        </div>
    );
}
