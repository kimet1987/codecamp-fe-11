import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/commons/stores";
import Product_register from "../../new";
import { FETCH_USED_ITEM } from "./queries";

export default function EditPage() {
    const router = useRouter();
    const [isEdit, setIsEdit] = useRecoilState(isEditState);
    setIsEdit(true);
    const { data } = useQuery(FETCH_USED_ITEM, {
        variables: { useditemId: router.query.product },
    });

    return <Product_register data={data} />;
}
