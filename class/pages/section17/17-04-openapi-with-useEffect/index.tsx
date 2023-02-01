import axios from "axios";
import { useEffect, useState } from "react";

export default function RestGetPage(): JSX.Element {
  const [dog, setDog] = useState("");

  useEffect(() => {
    const onSync = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(result);
      setDog(result.data.message);
    };
    void onSync();
  }, []);

  return (
    <div>
      <img src={dog} />
      {/* <button onClick={onSync}>REST_API(동기) 요청하기</button> */}
    </div>
  );
}
