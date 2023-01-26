import { Modal } from "antd";

export default function ModalAlertPage(): JSX.Element {
  const onClickSuccess = (): void => {
    Modal.success({
      content: "게시글 등록에 성공했습니다!!",
    });
  };

  const onClickFail = (): void => {
    Modal.error({
      content: "비밀번호를 틀리셨습니다!!",
    });
  };

  return (
    <>
      <button onClick={onClickSuccess}>성공 했을때!!</button>
      <button onClick={onClickFail}>실패 했을때!!</button>
    </>
  );
}
