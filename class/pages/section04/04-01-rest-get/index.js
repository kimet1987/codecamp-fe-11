import axios from "axios";

export default function RestGetPage() {
  function onAsync() {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result); // Promise
  }

  // async function onSync() {
  //     const result = await axios.get("https://koreanjson.com/posts/1");
  //     console.log(result);
  // } ==> 함수의 중복선언 문제

  const onSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
  };

  return (
    <div>
      <button onClick={onAsync}>REST_API(비동기) 요청하기</button>
      <button onClick={onSync}>REST_API(동기) 요청하기</button>
    </div>
  );
}
