import { RedInput, BlueBtn } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <div>
      작성자:{" "}
      <RedInput type="text" id="writer" onChange={props.onChangeInput} />
      제목: <input type="text" id="title" onChange={props.onChangeInput} />
      내용: <input type="text" id="contents" onChange={props.onChangeInput} />
      <BlueBtn onClick={props.Submit}>GRAPHQL - API 요청하기</BlueBtn>
    </div>
  );
}
