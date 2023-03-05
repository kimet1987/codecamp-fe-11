import { useRouter } from "next/router";
import { useEffect } from "react";

const LOAD = [];

export default function LazyImg() {
    const router = useRouter();

    useEffect(() => {
        const img = new Image();
        img.src = "/lazy/01.jpeg";
        img.onload = () => {
            LOAD.push(img);
        };
    }, []);
    const onMove = () => {
        router.push("/31/31-3/moved");
    };

    return (
        <>
            <button onClick={onMove}>이미지 보여주지</button>
        </>
    );
}
