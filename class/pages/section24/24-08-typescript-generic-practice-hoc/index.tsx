import { useRouter } from "next/router";
import type { ReactElement } from "react";
import { useEffect } from "react";

export const loginChk =
  (Componet: () => JSX.Element) =>
  <P extends Record<string, unknown>>(props: P): ReactElement<P> => {
    const router = useRouter();

    useEffect(() => {
      if (localStorage.getItem("accessToken") === null) {
        alert("로그인 후 이용 가능합니다.");
        void router.push("/section23/23-05-login-chk-hoc");
      }
    }, []);

    return <Componet {...props} />;
  };
