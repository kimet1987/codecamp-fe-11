import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./BoardWrite.queries";
import RegisterPre from "./BoardWrite.presenter";

export default function RegisterCon() {
    const [writer, setWriter] = useState("");
    const [pw, setPw] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [youtube, setYoutube] = useState("");

    const [err1, setErr1] = useState("");
    const [err2, setErr2] = useState("");
    const [err3, setErr3] = useState("");
    const [err4, setErr4] = useState("");

    const router = useRouter();
    const [createBoard] = useMutation(CREATE_BOARD);

    function wChange(e) {
        setWriter(e.target.value);
        if (e.target.value !== "") {
            setErr1("");
        }
    }
    function pChange(e) {
        setPw(e.target.value);
        if (e.target.value !== "") {
            setErr2("");
        }
    }
    function tChange(e) {
        setTitle(e.target.value);
        if (e.target.value !== "") {
            setErr3("");
        }
    }
    function cChange(e) {
        setContent(e.target.value);
        if (e.target.value !== "") {
            setErr4("");
        }
    }
    function yChange(e) {
        setYoutube(e.target.value);
    }

    const contentsChk = async () => {
        try {
            const result = await createBoard({
                variables: {
                    createBoardInput: {
                        writer: writer,
                        password: pw,
                        title: title,
                        contents: content,
                        youtubeUrl: youtube,
                    },
                },
            });
            console.log(result);
            router.push(`/boards/${result?.data.createBoard._id}`);
        } catch (error) {
            alert("error");
        }
    };

    function registerChk() {
        console.log("실행");
        if (writer !== "" && pw !== "" && title !== "" && content !== "") {
            contentsChk();
            setWriter("");
            setPw("");
            setTitle("");
            setContent("");
            setYoutube("");
        }

        if (!writer) {
            setErr1("이름을 입력해주세요");
        } else {
            setErr1("");
        }
        if (!pw) {
            setErr2("비밀번호를 입력해주세요");
        } else {
            setErr2("");
        }
        if (!title) {
            setErr3("제목을 입력해주세요");
        } else {
            setErr3("");
        }
        if (!content) {
            setErr4("내용을 입력해주세요");
        } else {
            setErr4("");
        }
    }

    return (
        <RegisterPre
            registerBtn={registerChk}
            writer1={wChange}
            writer2={writer}
            pw1={pChange}
            pw2={pw}
            title1={tChange}
            title2={title}
            content1={cChange}
            content2={content}
            youtube1={yChange}
            youtube2={youtube}
            error1={err1}
            error2={err2}
            error3={err3}
            error4={err4}
        />
    );
}
