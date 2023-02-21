import { useRouter } from "next/router";
import { useEffect, useState } from "react";

declare const window: typeof globalThis & {
    IMP: any;
};

export default function ChargePage() {
    const [coin, setCoin] = useState();
    const router = useRouter();
    const onCoin = (e: any) => {
        setCoin(e.target.value);
    };
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.iamport.kr/v1/iamport.js";
        document.head.appendChild(script);
    }, []);
    const onPayment = (): void => {
        const IMP = window.IMP;
        IMP.init("imp00243010");
        IMP.request_pay(
            {
                // param
                pg: "kakaopay",
                pay_method: "card",
                // merchant_uid: "ORD20180131-0000011",
                name: "회전 의자",
                amount: coin,
                buyer_email: "gildong@gmail.com",
                buyer_name: "홍길동",
                buyer_tel: "010-4242-4242",
                buyer_addr: "서울특별시 강남구 신사동",
                buyer_postcode: "01181",
                m_redireact_url:
                    "http://localhost:3000/section28/28-01-payment", // 모바일에서 결제시 주소가 바뀜 그래서 이주소를 써 줘야함
            },
            (rsp: any) => {
                if (rsp.success === true) {
                    // 결제 성공시 로직
                    console.log(rsp);
                    router.push("/28/payment/complete");
                    // 백엔드 결제 관려 데이터 넘겨죽기 => 즉, 뮤테이션 실행
                } else {
                    // 결제 실패시 로직
                    alert("충전이 실패 했습니다");
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
            <div>
                <label htmlFor="coin_1">500원</label>
                <input
                    id="coin_1"
                    name="coin"
                    type="radio"
                    value={500}
                    onChange={onCoin}
                />
            </div>
            <div>
                <label htmlFor="coin_2">1000원</label>
                <input
                    id="coin_2"
                    name="coin"
                    type="radio"
                    value={1000}
                    onChange={onCoin}
                />
            </div>
            <div>
                <label htmlFor="coin_3">2000원</label>
                <input
                    id="coin_3"
                    name="coin"
                    type="radio"
                    value={2000}
                    onChange={onCoin}
                />
            </div>
            <div>
                <label htmlFor="coin_4">5000원</label>
                <input
                    id="coin_4"
                    name="coin"
                    type="radio"
                    value={5000}
                    onChange={onCoin}
                />
            </div>
            {typeof window !== "undefined" && (
                <button onClick={onPayment}>충전하기</button>
            )}
        </>
    );
}
