import { useRouter } from "next/router";
import { useEffect } from "react";

const qqq = [];

export default function ImgPreLoadPage(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg";
    img.onload = () => {
      qqq.push(img);
    };
  }, []);

  const onMove = (): void => {
    void router.push("/section31/31-09-img-preload-moved");
  };

  return (
    <>
      <button onClick={onMove}>페이지 이동하기</button>
    </>
  );
}
