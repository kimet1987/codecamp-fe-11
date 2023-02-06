import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useRef, useState } from "react";

export const Btn_Wrap = styled.div`
    display: flex;
    gap: 0 30px;
`;
export const ImgBtn = styled.button`
    position: relative;
    width: 200px;
    height: 200px;
    background-color: #bdbdbd;
    cursor: pointer;
    label {
        display: inline-block;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        line-height: 200px;
        color: #757575;
    }
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        //display: none;
    }
`;

export default function ImgUpload() {
    const [imgUrl, setImgUrl] = useState([]);
    const [prevImg, setPrevImg] = useState([]);
    const ImgRef = useRef<HTMLInputElement>(null);

    const onFile = async (e: any): Promise<void> => {
        const file = e.target.files;
        // console.log(file);
        let reader = new FileReader();

        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            console.log(imgUrl);
            setImgUrl([...imgUrl, e.target.files[0]]);
        }

        reader.onloadend = () => {
            const previewImgUrl = reader.result;
            if (previewImgUrl) {
                setPrevImg([...imgUrl, previewImgUrl]);
            }
        };
    };

    const onImg = () => {
        ImgRef.current?.click();
    };
    return (
        <>
            <Btn_Wrap>
                <ImgBtn onClick={onImg}>
                    <img src={prevImg} />
                    <label>UPLOAD</label>
                    <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={onFile}
                        ref={ImgRef}
                        multiple
                    />
                </ImgBtn>
                <ImgBtn onClick={onImg}>
                    <img src={prevImg} />
                    <label>UPLOAD</label>
                    <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={onFile}
                        ref={ImgRef}
                        multiple
                    />
                </ImgBtn>
                <ImgBtn onClick={onImg}>
                    <img src={prevImg} />
                    <label>UPLOAD</label>
                    <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={onFile}
                        ref={ImgRef}
                        multiple
                    />
                </ImgBtn>
            </Btn_Wrap>
        </>
    );
}
