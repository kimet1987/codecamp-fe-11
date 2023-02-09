import { ChangeEvent, MouseEvent } from "react";
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
    Main_set,
    Radio_wrap,
    Radio,
    Register_btn,
    AddressModal,
    AddressSearchInput,
} from "../../../../../styles/register";
import { IQuery } from "../../../../commons/types/generated/types";
import ImgLoad from "../img_load";
import { v4 as uuidv4 } from "uuid";

export interface IRegisterPreProps {
    isActive?: boolean;
    isEdit: boolean;
    onClickUpdate: (e: MouseEvent<HTMLButtonElement>) => void;
    contentsChk: (e: MouseEvent<HTMLButtonElement>) => void;
    writer1: (e: ChangeEvent<HTMLInputElement>) => void;
    pw1: (e: ChangeEvent<HTMLInputElement>) => void;
    title1: (e: ChangeEvent<HTMLInputElement>) => void;
    content1: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    youtube1: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeAddressDetail: (e: ChangeEvent<HTMLInputElement>) => void;
    onClickAddressSearch: () => void;
    onCompleteAddressSearch: (data: any) => void;
    onImgUrls: (fileUrls: string, index: number) => void;
    error1: string;
    error2: string;
    error3: string;
    error4: string;
    data?: Pick<IQuery, "fetchBoard">;
    isOpen: boolean;
    zipcode: string;
    address: string;
    addressDetail: string;
    fileUrls: string[];
}
export default function RegisterPre(props: IRegisterPreProps) {
    console.log(props.fileUrls);
    return (
        <>
            {props.isOpen && (
                <AddressModal open={true}>
                    <AddressSearchInput
                        onComplete={props.onCompleteAddressSearch}
                    />
                </AddressModal>
            )}
            <Wrapper>
                <h2>게시물 등록</h2>
                <Contents>
                    <WriteWrap>
                        <Writer>
                            <label>작성자</label>
                            <input
                                type="text"
                                placeholder="이름을 적어주세요"
                                onChange={props.writer1}
                                defaultValue={
                                    props.data?.fetchBoard.writer ?? ""
                                }
                                readOnly={props.isEdit ? true : false}
                            />
                            <p>{props.error1}</p>
                        </Writer>
                        <Pwd>
                            <label>비밀번호</label>
                            <input
                                type="password"
                                placeholder="비밀번호를 입력해주세요"
                                onChange={props.pw1}
                            />
                            <p>{props.error2}</p>
                        </Pwd>
                    </WriteWrap>
                    <Title>
                        <label>제목</label>
                        <input
                            type="text"
                            placeholder="제목을 입력해주세요"
                            onChange={props.title1}
                            defaultValue={props.data?.fetchBoard.title}
                        />
                        <p>{props.error3}</p>
                    </Title>
                    <Content>
                        <label>내용</label>
                        <textarea
                            placeholder="내용을 작성해주세요"
                            onChange={props.content1}
                            defaultValue={props.data?.fetchBoard.contents}
                        />
                        <p>{props.error4}</p>
                    </Content>
                    <Address>
                        <label>주소</label>
                        <Zip_code>
                            <input
                                type="text"
                                readOnly
                                value={
                                    props.zipcode !== ""
                                        ? props.zipcode
                                        : props.data?.fetchBoard.boardAddress
                                              ?.zipcode ?? ""
                                }
                                placeholder="07250"
                            />
                            <button onClick={props.onClickAddressSearch}>
                                우편번호 검색
                            </button>
                        </Zip_code>
                        <input
                            type="text"
                            readOnly
                            value={
                                props.address !== ""
                                    ? props.address
                                    : props.data?.fetchBoard.boardAddress
                                          ?.address ?? ""
                            }
                        />
                        <input
                            type="text"
                            onChange={props.onChangeAddressDetail}
                            defaultValue={
                                props.data?.fetchBoard.boardAddress
                                    ?.addressDetail ?? ""
                            }
                        />
                    </Address>
                    <Youtube>
                        <label>유튜브</label>
                        <input
                            type="text"
                            placeholder="링크를 복사해주세요"
                            onChange={props.youtube1}
                            defaultValue={
                                props.data?.fetchBoard.youtubeUrl ?? ""
                            }
                        />
                    </Youtube>
                    <Attach_pic>
                        <h3>사진 첨부</h3>
                        <Btn_wrap>
                            {props.fileUrls.map((el, index) => (
                                <ImgLoad
                                    key={uuidv4()}
                                    index={index}
                                    fileUrl={el}
                                    onImgUrls={props.onImgUrls}
                                />
                            ))}
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
                    <Register_btn
                        isActive={props.isActive}
                        onClick={
                            props.isEdit
                                ? props.onClickUpdate
                                : props.contentsChk
                        }
                    >
                        {props.isEdit ? "수정하기" : "등록하기"}
                    </Register_btn>
                </Contents>
            </Wrapper>
        </>
    );
}
