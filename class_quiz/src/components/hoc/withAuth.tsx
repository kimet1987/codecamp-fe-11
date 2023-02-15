import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Componet: any) => (props: any) => {
    const router = useRouter();
    useEffect(() => {
        if (localStorage.getItem("accessToken") === null) {
            alert("로그인 후 가능!!");
            router.push("/23/hoc/login");
        }
    }, []);
    return <Componet {...props} />;
};
