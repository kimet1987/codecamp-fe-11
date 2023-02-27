import axios from "axios";
import { useState } from "react";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

export default function RestGetPage(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSync = async (): Promise<void> => {
    setIsSubmitting(true);
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);

    setIsSubmitting(false);
  };

  return (
    <div>
      <button onClick={wrapAsync(onSync)} disabled={isSubmitting}>
        REST_API(동기) 요청하기
      </button>
    </div>
  );
}
