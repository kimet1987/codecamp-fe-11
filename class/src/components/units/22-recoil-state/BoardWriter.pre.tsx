import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/stores";

export default function BoardWriterUI(): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  return <div>{isEdit ? "수정" : "등록"}</div>;
}
