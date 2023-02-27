// import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
// import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { restoreAccessTokenLoadable } from "../../../commons/stores";

export const loginChk = (Componet: any) => (props: any) => {
  // const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // 1. 기존 방식 (refreshToken 이전)
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken") === null) {
  //     alert("로그인 후 이용 가능합니다.");
  //     void router.push("/section23/23-05-login-chk-hoc");
  //   }
  // }, []);

  // 2. 새로운 방식 (refreshToken 이후)
  // useEffect(() => {
  //   void getAccessToken().then((newAccessToken) => {
  //     if(newAccessToken === undefined){
  //       alert("로그인 후 이용 가능합니다.");
  //       void router.push("/section23/23-05-login-chk-hoc");
  //     }
  //   });
  // }, []);

  // 2. 새로운 방식 (refreshToken 이후 => 좋음) 함수를 이용 하므로 총 한번만 렌더링함
  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("로그인 후 이용 가능합니다.");
      }
    });
  }, []);

  return <Componet {...props} />;
};
