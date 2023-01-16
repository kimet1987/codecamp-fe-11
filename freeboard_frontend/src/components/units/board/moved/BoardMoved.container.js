import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MovedPre from "./BoardMoved.presenter";
import { FETCH_BOARD } from "./BoardMoved.queries";

export default function MovedCon() {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.board,
        },
    });
    console.log(data);

    return <MovedPre data={data} />;
}
