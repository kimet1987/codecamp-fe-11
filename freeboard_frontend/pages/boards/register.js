import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
    Wrapper,
    Contents,
    WriteWrap,
    Writer,
    Pwd,
    Title,
    Content,
    Address,
    Zip_code,
    Youtube,
    Attach_pic,
    Btn_wrap,
    Attach_btn,
    Main_set,
    Radio_wrap,
    Radio,
    Register_btn,
} from "../../styles/register";

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            writer
            contents
        }
    }
`;

export default function RegisterPage() {
    const [writer, setWriter] = useState("");
    const [pw, setPw] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [err1, setErr1] = useState("");
    const [err2, setErr2] = useState("");
    const [err3, setErr3] = useState("");
    const [err4, setErr4] = useState("");

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

    async function contentsChk() {
        const result = await createBoard({
            variables: {
                createBoardInput: {
                    writer: writer,
                    password: pw,
                    title: title,
                    contents: content,
                },
            },
        });
        console.log("실행2");
    }

    function registerChk() {
        console.log("실행");
        if (writer !== "" && pw !== "" && title !== "" && content !== "") {
            contentsChk();
            setWriter("");
            setPw("");
            setTitle("");
            setContent("");
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
        <Wrapper>
            <h2>게시물 등록</h2>
            <Contents>
                <WriteWrap>
                    <Writer>
                        <label>작성자</label>
                        <input
                            type="text"
                            placeholder="이름을 적어주세요"
                            onChange={wChange}
                            value={writer}
                        />
                        <p>{err1}</p>
                    </Writer>
                    <Pwd>
                        <label>비밀번호</label>
                        <input
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            onChange={pChange}
                            value={pw}
                        />
                        <p>{err2}</p>
                    </Pwd>
                </WriteWrap>
                <Title>
                    <label>제목</label>
                    <input
                        type="text"
                        placeholder="제목을 입력해주세요"
                        onChange={tChange}
                        value={title}
                    />
                    <p>{err3}</p>
                </Title>
                <Content>
                    <label>내용</label>
                    <textarea
                        placeholder="내용을 작성해주세요"
                        onChange={cChange}
                        value={content}
                    />
                    <p>{err4}</p>
                </Content>
                <Address>
                    <label>주소</label>
                    <Zip_code>
                        <input type="text" readOnly value="07250" />
                        <button>우편번호 검색</button>
                    </Zip_code>
                    <input type="text" />
                    <input type="text" />
                </Address>
                <Youtube>
                    <label>유튜브</label>
                    <input type="text" placeholder="링크를 복사해주세요" />
                </Youtube>
                <Attach_pic>
                    <h3>사진 첨부</h3>
                    <Btn_wrap>
                        <Attach_btn>
                            <i></i>
                            <span>Upload</span>
                        </Attach_btn>
                        <Attach_btn>
                            <i></i>
                            <span>Upload</span>
                        </Attach_btn>
                        <Attach_btn>
                            <i></i>
                            <span>Upload</span>
                        </Attach_btn>
                    </Btn_wrap>
                </Attach_pic>
                <Main_set>
                    <h3>메인 설정</h3>
                    <Radio_wrap>
                        <Radio>
                            <input type="radio" name="set" id="tube" />
                            <label htmlFor="tube">유튜브</label>
                        </Radio>
                        <Radio>
                            <input type="radio" name="set" id="pic" />
                            <label htmlFor="pic">사진</label>
                        </Radio>
                    </Radio_wrap>
                </Main_set>
                <Register_btn onClick={registerChk}>등록하기</Register_btn>
            </Contents>
        </Wrapper>
    );
}
