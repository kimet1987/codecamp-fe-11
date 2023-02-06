import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImgUploadPage(): JSX.Element {
  const [imgUrl, setImgUrl] = useState("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onFile = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = e.target.files?.[0]; // 배열로 들어오는 이유 : multiple 속성일 떄 여러개 등록 가능
    console.log(file);
    const result = await uploadFile({
      variables: { file },
    });
    setImgUrl(result.data?.uploadFile.url ?? "");
  };

  return (
    <>
      <input type="file" onChange={onFile} />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
    </>
  );
}
