import { useRouter } from "next/router";
import { MouseEvent } from "react";
import * as N from "../../../../styles/navi";

const MEUNS = [
    { name: "MAIN", page: "/main" },
    { name: "FIRE", page: "/fire" },
    { name: "자유게시판", page: "/boards" },
    { name: "중고마켓", page: "/products/new" },
    { name: "마이페이지", page: "/mypages" },
];

export default function Navi(): JSX.Element {
    const router = useRouter();
    const onMenu = (event: MouseEvent<HTMLLIElement>): void => {
        void router.push(event.currentTarget.id);
    };
    return (
        <N.Wrapper>
            <ul>
                {MEUNS.map((el) => (
                    <li
                        key={el.page}
                        id={el.page}
                        onClick={onMenu}
                        className={router.asPath === el.page ? "active" : ""}
                    >
                        {el.name}
                    </li>
                ))}
            </ul>
        </N.Wrapper>
    );
}
