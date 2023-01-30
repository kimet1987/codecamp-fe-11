import { MouseEvent } from "react";
import ReactPlayer from "react-player";
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
    Btn_wrap,
} from "../../../../../styles/board";

export interface IMovedConProps {
    onDel: (e: MouseEvent<HTMLButtonElement>) => void;
    onList: (e: MouseEvent<HTMLButtonElement>) => void;
    onEdit: (e: MouseEvent<HTMLButtonElement>) => void;
    data?: any;
    id: string; // 물어보기
}

export default function MovedPre(props: IMovedConProps) {
    return (
        <>
            <Wrapper>
                <Header>
                    <User>
                        <img src="/board/user.svg" />
                        <Info>
                            <span>{props.data?.fetchBoard?.writer}</span>
                            <dl>
                                <dt>Date: </dt>
                                <dd>
                                    {props.data?.fetchBoard?.createdAt
                                        .substr(0, 10)
                                        .replace(/-/g, ".")}
                                </dd>
                            </dl>
                        </Info>
                    </User>
                    <Icon_wrap>
                        <button></button>
                        <button className="location">
                            <p>
                                {`${
                                    props.data?.fetchBoard.boardAddress
                                        ?.address ?? ""
                                } ${
                                    props.data?.fetchBoard.boardAddress
                                        ?.addressDetail ?? ""
                                }`}
                            </p>
                        </button>
                    </Icon_wrap>
                </Header>
                <Contents>
                    <h3>{props.data?.fetchBoard?.title}</h3>
                    <Attach_img>
                        <img src="" />
                    </Attach_img>
                    <Content>{props.data?.fetchBoard.contents}</Content>
                    <Youtube>
                        <ReactPlayer
                            className="react-player"
                            url={props.data?.fetchBoard.youtubeUrl ?? ""}
                            width="100%"
                            height="100%"
                            playing={true}
                            muted={true}
                            controls={true}
                            light={false}
                        />
                        <button
                            style={
                                props.data?.fetchBoard?.youtubeUrl
                                    ? { display: "none" }
                                    : { display: "block" }
                            }
                        >
                            플레이버튼
                        </button>
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
            <Btn_wrap>
                <button className="list_btn" onClick={props.onList}>
                    목록으로
                </button>
                <button className="edit_btn" onClick={props.onEdit}>
                    수정하기
                </button>
                <button
                    id={props.id}
                    className="del_btn"
                    onClick={(event) => {
                        return props.onDel(event), props.onList(event); // 기능구현 맞는지 체크
                    }}
                >
                    삭제하기
                </button>
            </Btn_wrap>
        </>
    );
}
