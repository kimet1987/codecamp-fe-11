import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
    Wrapper,
    Header,
    User,
    Info,
    Icon_wrap,
    Contents,
    Attach_img,
    Content,
    Youtube,
    React_wrap,
} from "../../../styles/board";

export default function BoardPage() {
    return (
        <Wrapper>
            <Header>
                <User>
                    <img src="/board/user.svg" />
                    <Info>
                        <span>김병수</span>
                        <dl>
                            <dt>Date: </dt>
                            <dd>2022.01.13</dd>
                        </dl>
                    </Info>
                </User>
                <Icon_wrap>
                    <button></button>
                    <button className="location">
                        <p>
                            서울특별시 영등포구 양산로 200
                            <br />
                            (영등포동 5가,영등포시장역) 영등포 타임스퀘어 2층
                        </p>
                    </button>
                </Icon_wrap>
            </Header>
            <Contents>
                <h3>제목입니다</h3>
                <Attach_img>
                    <img src="" />
                </Attach_img>
                <Content>내용입니다</Content>
                <Youtube>
                    <button>플레이버튼</button>
                </Youtube>
                <React_wrap>
                    <dl className="like">
                        <dt></dt>
                        <dd>1920</dd>
                    </dl>
                    <dl className="dislike">
                        <dt></dt>
                        <dd>1920</dd>
                    </dl>
                </React_wrap>
            </Contents>
        </Wrapper>
    );
}
