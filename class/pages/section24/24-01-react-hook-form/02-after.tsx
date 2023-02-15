import { useForm } from "react-hook-form";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}
export default function BoardWrite(): JSX.Element {
  const { register, handleSubmit } = useForm<IFormData>();
  const Submit = (data: IFormData): void => {
    console.log(data);
  };

  return (
    <form onSubmit={wrapAsync(handleSubmit(Submit))}>
      작성자: <input type="text" {...register("writer")} />
      제목: <input type="text" {...register("title")} />
      내용: <input type="text" {...register("contents")} />
      주소: <input type="text" {...register("boardAddress.addressDetail")} />
      <button type="submit">GRAPHQL - API 요청하기</button>
    </form>
  );
}

/*
	<button type="reset">지우자</button>
	<button type="submit">등록하자</button> // 기본값
	<button type="button">지우기</button> // form 태그 안에서 따로 작동 시키는 버튼
*/
