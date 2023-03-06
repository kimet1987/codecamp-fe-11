import { useRouter } from "next/router";

export default function CypressPage(): JSX.Element {
  const router = useRouter();

  const onMove = (): void => {
    void router.push("/section33/33-06-cypress-e2e-test-moved");
  };
  return <button onClick={onMove}>철수랑 놀러가기</button>;
}
