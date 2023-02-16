import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/stores";

interface IUseMoveTo {
  onMove: (path: string) => () => void;
  visitedPage: string;
}

export const useMoveTo = (): IUseMoveTo => {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);
  const onMove = (path: string) => () => {
    setVisitedPage(path); // 로그인 페이지에는 set 하지 않도록 조건 추가
    // localStorage.setItem("visitedPage", path)
    void router.push(path);
  };

  return {
    onMove,
    visitedPage,
  };
};
