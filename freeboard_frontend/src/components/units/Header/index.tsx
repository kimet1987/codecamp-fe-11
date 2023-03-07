import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/stores";
import * as H from "../../../../styles/header";
import ChargePage from "../ChargeModal";

export default function Header(): JSX.Element {
    const router = useRouter();
    const [isToken, setIstoken] = useRecoilState(accessTokenState);
    const [toggle, setToggle] = useState(false);
    const onJoin = () => {
        router.push("/join");
    };
    const onLogin = () => {
        router.push("/login");
    };
    const onToggle = () => {
        setToggle((prev) => !prev);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <ChargePage isOpen={isModalOpen} closeModal={closeModal} />
            <H.Wrapper>
                <h2>
                    <em>Art</em> Center
                </h2>
                {isToken !== "" ? (
                    <H.User_wrap onClick={onToggle}>
                        <H.User_info>
                            <img src="/profile.svg" />
                            <i>더보기</i>
                        </H.User_info>
                        {toggle && (
                            <H.Change_wrap>
                                <H.Info>
                                    <img src="/profile.svg" />
                                    <dl>
                                        <dt>김병수</dt>
                                        <dd>100,000 P</dd>
                                    </dl>
                                </H.Info>
                                <H.CBtn_wrap>
                                    <button
                                        className="charge"
                                        onClick={openModal}
                                    >
                                        충전하기
                                    </button>
                                    <button className="logout">로그아웃</button>
                                </H.CBtn_wrap>
                            </H.Change_wrap>
                        )}
                    </H.User_wrap>
                ) : (
                    <H.Btn_wrap>
                        <button onClick={onLogin}>로그인</button>
                        <button className="join_btn" onClick={onJoin}>
                            회원가입
                        </button>
                    </H.Btn_wrap>
                )}
            </H.Wrapper>
        </>
    );
}
