import axios from "axios";
import { useState } from "react";

export default function CallBack() {
    const [text, setText] = useState([]);

    const onCallback = () => {
        const aaa = new XMLHttpRequest();
        aaa.open("get", `http://numbersapi.com/random?min=1&max=200`);
        aaa.send();
        aaa.addEventListener("load", (res: any) => {
            console.log(res);
            const num = res.target.response.split(" ")[0];

            const bbb = new XMLHttpRequest();
            bbb.open("get", `https://koreanjson.com/posts/${num}`);
            bbb.send();
            bbb.addEventListener("load", (res: any) => {
                console.log(res);
                const userId = JSON.parse(res.target.response).UserId;

                const ccc = new XMLHttpRequest();
                ccc.open(
                    "get",
                    `https://koreanjson.com/posts?userId=${userId}`
                );
                ccc.send();
                ccc.addEventListener("load", (res: any) => {
                    const Text = JSON.parse(res.target.response);
                    setText(Text);
                });
            });
        });
    };

    const onPromise = () => {
        axios
            .get(`http://numbersapi.com/random?min=1&max=200`)
            .then((qqq) => {
                console.log(qqq.data.split(" ")[0]);
                const num = qqq.data.split(" ")[0];
                return axios.get(`https://koreanjson.com/posts/${num}`);
            })
            .then((qqq) => {
                const userId = qqq.data.UserId;
                return axios.get(
                    `https://koreanjson.com/posts?userId=${userId}`
                );
            })
            .then((qqq) => {
                const Text = qqq.data;
                setText(Text);
            });
    };

    const onAsyncAwait = async () => {
        const num = (
            await axios.get(`http://numbersapi.com/random?min=1&max=200`)
        ).data.split(" ")[0];
        const userId = (await axios.get(`https://koreanjson.com/posts/${num}`))
            .data.UserId;
        const Text = (
            await axios.get(`https://koreanjson.com/posts?userId=${userId}`)
        ).data;
        setText(Text);
    };
    return (
        <>
            결과 : <button onClick={onCallback}>Callback</button>
            결과 : <button onClick={onPromise}>Promise</button>
            결과 : <button onClick={onAsyncAwait}>Async/Await</button>
            {text &&
                text.map((el: any, idx: number) => (
                    <li key={el.id}>
                        <span>{idx + 1}</span>
                        <p>{el.title}</p>
                    </li>
                ))}
        </>
    );
}
