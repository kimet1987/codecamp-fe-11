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
} from "../../../../../styles/register";

export default function RegisterPre(data) {
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
                            onChange={data.writer1}
                            value={data.writer2}
                        />
                        <p>{data.error1}</p>
                    </Writer>
                    <Pwd>
                        <label>비밀번호</label>
                        <input
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            onChange={data.pw1}
                            value={data.pw2}
                        />
                        <p>{data.error2}</p>
                    </Pwd>
                </WriteWrap>
                <Title>
                    <label>제목</label>
                    <input
                        type="text"
                        placeholder="제목을 입력해주세요"
                        onChange={data.title1}
                        value={data.title2}
                    />
                    <p>{data.error3}</p>
                </Title>
                <Content>
                    <label>내용</label>
                    <textarea
                        placeholder="내용을 작성해주세요"
                        onChange={data.content1}
                        value={data.content2}
                    />
                    <p>{data.error4}</p>
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
                    <input
                        type="text"
                        placeholder="링크를 복사해주세요"
                        onChange={data.youtube1}
                        value={data.youtube2}
                    />
                </Youtube>
                <Attach_pic>
                    <h3>사진 첨부</h3>
                    <Btn_wrap>
                        <Attach_btn>
                            <label htmlFor="attach1">Upload</label>
                            <input type="file" id="attach1" />
                        </Attach_btn>
                        <Attach_btn>
                            <label htmlFor="attach1">Upload</label>
                            <input type="file" id="attach1" />
                        </Attach_btn>
                        <Attach_btn>
                            <label htmlFor="attach1">Upload</label>
                            <input type="file" id="attach1" />
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
                <Register_btn onClick={data.registerBtn}>등록하기</Register_btn>
            </Contents>
        </Wrapper>
    );
}
