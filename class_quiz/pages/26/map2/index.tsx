import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMoved() {
    const router = useRouter();

    const onMove = () => {
        router.push("/26/map1");
    };
    return (
        <>
            <button onClick={onMove}>페이지 이동 버튼</button>
            <Link href="/26/map1">페이지 이동 링크</Link>
        </>
    );
}
