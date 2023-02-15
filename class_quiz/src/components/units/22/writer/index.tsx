import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../commons/stores";

export default function WriterPage() {
    const [isEdit, setIsEdit] = useRecoilState(isEditState);
    useEffect(() => {
        setIsEdit(true);
    }, []);
    return (
        <>
            <h1>{isEdit ? "등록" : "수정"}</h1>
        </>
    );
}
