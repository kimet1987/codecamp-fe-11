import { useEffect, useState } from "react";
import BoardWriter from "../../../src/components/units/22-recoil-state/BoardWriter.con";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/stores";

export default function StateRecoil(props: any): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <BoardWriter />;
}
