declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage(): JSX.Element {
  const onPayment = (): void => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp00243010"); // 예: imp00000000a

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "회전 의자",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redireact_url: "http://localhost:3000/section28/28-01-payment", // 모바일에서 결제시 주소가 바뀜 그래서 이주소를 써 줘야함
      },
      (rsp: any) => {
        if (rsp.success === true) {
          // 결제 성공시 로직
          console.log(rsp);

          // 백엔드 결제 관려 데이터 넘겨죽기 => 즉, 뮤테이션 실행
        } else {
          // 결제 실패시 로직
        }
      }
    );
  };
  return (
    <>
      <script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></script>
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <button onClick={onPayment}>결제 하기</button>
    </>
  );
}
//
