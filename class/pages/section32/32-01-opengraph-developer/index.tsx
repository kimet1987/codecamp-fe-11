// 개발자 일때 => 디스코드, 카카오톡, 슬랙 등

import axios from "axios";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

export default function OpengraphDeveloperPage(): JSX.Element {
  const onEnter = async (): Promise<void> => {
    // 1. 채팅 데이터에 웹 주소가 있는지 체크하기

    // 2. 해당 주소로 스크랩핑 하기
    const result = await axios.get(
      "http://localhost3000.com/section32/32-01-opengraph-developer"
    );

    // 3. 메타태그에서 오픈그래프(og) 찾기
    result.data.split("<meta ").filter((el: string) => el.includes("og"));
  };

  return (
    <>
      <button onClick={wrapAsync(onEnter)}>채팅입력 후 엔터치기</button>
    </>
  );
}
