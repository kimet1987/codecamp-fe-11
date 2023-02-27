import { useRouter } from "next/router";
import { useEffect } from "react";

export const loginChk = (Componet: any) => (props: any) => {
    const router = useRouter();

    useEffect(() => {
        if (localStorage.getItem("accessToken") === null) {
            alert("로그인 후 이용 가능합니다.");
            void router.push("/login");
        }
    }, []);

    return <Componet {...props} />;
};
