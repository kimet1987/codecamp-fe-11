import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPage(): JSX.Element {
  const router = useRouter();
  const onMove = (): void => {
    void router.push("/section25/25-02-kakao-map-routing-moved");
  };
  return (
    <>
      <button onClick={onMove}>페이지 이동</button>

      {/* 매 페이지마다 다운을 받으므로 SPA 활용을 못함 */}
      <a href="/section25/25-02-kakao-map-routing-moved">페이지 이동하기</a>
      {/* NEXT에서 제공하는 a태그이므로 검색이 좋아짐. */}
      <Link href="/section25/25-02-kakao-map-routing-moved">페이지 이동!!</Link>
      {/* 백에서 정보를 받고 나서 이동하는 페이지는 Router를 사용  ==> 단순 이동은 Link 태그 이용 */}
    </>
  );
}
