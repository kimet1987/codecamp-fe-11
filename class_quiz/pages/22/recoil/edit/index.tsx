import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/commons/stores";
import WriterPage from "../../../../src/components/units/22/writer";

export default function EditPage() {
    const [isEdit, setIsEdit] = useRecoilState(isEditState);

    return <WriterPage />;
}
