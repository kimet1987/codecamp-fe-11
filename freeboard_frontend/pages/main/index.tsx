import axios from "axios";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Main_Wrap = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 0 100px;
    img {
        width: 80vw;
        cursor: pointer;
    }
`;

export default function Main() {
    const router = useRouter();
    const [img, setImg] = useState("");
    const ranNum = Math.floor(Math.random() * 10);

    const onSync = async () => {
        const result = await axios.get("https://api.artic.edu/api/v1/artworks");
        setImg(result.data.data[ranNum].image_id);
    };
    useEffect(() => {
        onSync();
    }, [img]);

    const onMove = () => {
        router.push(`/boards/`);
    };

    return (
        <Main_Wrap>
            {img ? (
                <img
                    onClick={onMove}
                    src={`https://www.artic.edu/iiif/2/${img}/full/843,/0/default.jpg`}
                />
            ) : (
                <></>
            )}
        </Main_Wrap>
    );
}
