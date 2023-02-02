import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import RegisterPre from "./BoardWrite.presenter";
import {
    IMutation,
    IMutationUpdateBoardArgs,
    IQuery,
    IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import type { Address } from "react-daum-postcode";

export interface IBoardWriteProps {
    isActive?: boolean;
    isEdit: boolean;
    data?: Pick<IQuery, "fetchBoard">;
}
export interface IMyvari {
    boardId: string;
    password?: string;
    title?: string;
    contents?: string;
    updateBoardInput: IUpdateBoardInput;
}

export default function RegisterCon(props: IBoardWriteProps) {
    const [isActive, setIsActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [writer, setWriter] = useState("");
    const [pw, setPw] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [youtube, setYoutube] = useState("");

    const [zipcode, setZipcode] = useState("");
    const [address, setAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("");

    const [err1, setErr1] = useState("");
    const [err2, setErr2] = useState("");
    const [err3, setErr3] = useState("");
    const [err4, setErr4] = useState("");

    const router = useRouter();

    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation<
        Pick<IMutation, "updateBoard">,
        IMutationUpdateBoardArgs
    >(UPDATE_BOARD);

    function wChange(e: ChangeEvent<HTMLInputElement>) {
        setWriter(e.target.value);
        if (e.target.value && title && pw && content) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
        if (e.target.value !== "") {
            setErr1("");
        }
    }
    function pChange(e: ChangeEvent<HTMLInputElement>) {
        setPw(e.target.value);
        if (writer && title && e.target.value && content) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
        if (e.target.value !== "") {
            setErr2("");
        }
    }
    function tChange(e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
        if (writer && e.target.value && pw && content) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
        if (e.target.value !== "") {
            setErr3("");
        }
    }
    function cChange(e: ChangeEvent<HTMLTextAreaElement>) {
        setContent(e.target.value);
        if (writer && title && pw && e.target.value) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
        if (e.target.value !== "") {
            setErr4("");
        }
    }
    function yChange(e: ChangeEvent<HTMLInputElement>) {
        setYoutube(e.target.value);
    }

    const onClickUpdate = async (): Promise<void> => {
        const updateBoardInput: IUpdateBoardInput = {};
        if (typeof router.query.board !== "string") {
            alert("시스템에 문제가 있습니다");
            return;
        }

        if (pw === "") {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        const myVariables: IMyvari = {
            boardId: router.query.board,
            password: pw,
            updateBoardInput,
        };

        if (title) myVariables.updateBoardInput.title = title;
        if (content) myVariables.updateBoardInput.contents = content;
        if (youtube) myVariables.updateBoardInput.youtubeUrl = youtube;
        if (zipcode !== "" || address !== "" || addressDetail !== "") {
            updateBoardInput.boardAddress = {};
            if (zipcode !== "") updateBoardInput.boardAddress.zipcode = zipcode;
            if (address !== "") updateBoardInput.boardAddress.address = address;
            if (addressDetail !== "")
                updateBoardInput.boardAddress.addressDetail = addressDetail;
        }

        const result = await updateBoard({
            variables: myVariables,
        });
        router.push(`/boards/${result.data?.updateBoard._id}`);
    };

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
                        boardAddress: {
                            zipcode,
                            address,
                            addressDetail,
                        },
                    },
                },
            });
            router.push(`/boards/${result?.data.createBoard._id}`);
        } catch (error) {
            if (error instanceof Error) alert("error");
        }
        if (writer !== "" && pw !== "" && title !== "" && content !== "") {
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
    };

    const onChangeAddressDetail = (
        event: ChangeEvent<HTMLInputElement>
    ): void => {
        setAddressDetail(event.target.value);
    };
    const onClickAddressSearch = (): void => {
        setIsOpen((prev) => !prev);
    };
    const onCompleteAddressSearch = (data: Address): void => {
        setAddress(data.address);
        setZipcode(data.zonecode);
        setIsOpen((prev) => !prev);
    };

    return (
        <RegisterPre
            onChangeAddressDetail={onChangeAddressDetail}
            onCompleteAddressSearch={onCompleteAddressSearch}
            onClickAddressSearch={onClickAddressSearch}
            onClickUpdate={onClickUpdate}
            contentsChk={contentsChk}
            writer1={wChange}
            pw1={pChange}
            title1={tChange}
            content1={cChange}
            youtube1={yChange}
            error1={err1}
            error2={err2}
            error3={err3}
            error4={err4}
            isActive={isActive}
            data={props.data}
            isEdit={props.isEdit}
            isOpen={isOpen}
            zipcode={zipcode}
            address={address}
            addressDetail={addressDetail}
        />
    );
}
