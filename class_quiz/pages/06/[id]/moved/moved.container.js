import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PRODUCT } from "./moved.query";
import MovedPresenter from "./moved.presenter";

export default function MovedPage() {
    const router = useRouter();
    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: router.query.id,
        },
    });
    return <MovedPresenter data={data} />;
}
