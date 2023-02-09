import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import { checkValidationImage } from "./Img.validation";
export const Attach_btn = styled.div`
    width: 78px;
    height: 78px;
    background: #bdbdbd;
    label {
        display: block;
        box-sizing: border-box;
        padding: 23px 18px 18px;
        width: 100%;
        height: 100%;
        font-size: 12px;
        color: #4f4f4f;
        position: relative;
        line-height: 54px;
        text-align: center;
        cursor: pointer;
    }
    input {
        width: 1px;
        height: 1px;
        opacity: 0;
    }
    label::after {
        content: "";
        position: absolute;
        top: 22px;
        left: 50%;
        transform: translateX(-50%);
        width: 14px;
        height: 14px;
        background: url(/plus.svg);
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

interface IImgLoad {
    index: number;
    fileUrl: string;
    defaultFileUrl?: string;
    onImgUrls: (fileUrl: string, index: number) => void;
}
export const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
            url
        }
    }
`;

export default function ImgLoad(props: IImgLoad) {
    console.log(props.fileUrl);
    const imgRef = useRef<HTMLInputElement>(null);
    const [uploadFile] = useMutation(UPLOAD_FILE);

    const onUpload = (): void => {
        imgRef.current?.click();
    };

    const onFile = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
        const file = e.target.files?.[0];
        const isValid = checkValidationImage(file);
        if (!isValid) return;

        try {
            const result = await uploadFile({ variables: { file } });
            props.onImgUrls(result.data.uploadFile.url, props.index);
        } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
        }
    };

    return (
        <>
            {props.fileUrl !== "" ? (
                <Attach_btn onClick={onUpload}>
                    <img
                        src={`https://storage.googleapis.com/${props.fileUrl}`}
                    />
                </Attach_btn>
            ) : (
                <Attach_btn onClick={onUpload}>
                    <label>Upload</label>
                    <input type="file" ref={imgRef} onChange={onFile} />
                </Attach_btn>
            )}
        </>
    );
}
