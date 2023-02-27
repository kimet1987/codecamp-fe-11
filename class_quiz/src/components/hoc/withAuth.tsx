import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadble } from "../../commons/stores";

export const withAuth = (Componet: any) => (props: any) => {
    const global_Token = useRecoilValueLoadable(restoreAccessTokenLoadble);

    useEffect(() => {
        global_Token.toPromise().then((newAccessToken) => {
            if (newAccessToken === undefined) {
                alert("로그인 후 사용 가능합니다");
            }
        });
    }, []);

    return <Componet {...props} />;
};
