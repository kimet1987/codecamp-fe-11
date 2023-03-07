import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import * as C from "../../../../styles/ChargeModal";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "../../commons/useMutation/useCreatePointLoading";
declare const window: typeof globalThis & {
    IMP: any;
};

export default function ChargePage({ isOpen, closeModal }: any) {
    if (!isOpen) return null;
    const [point, setPoint] = useState("포인트 선택");
    const [select, setSelect] = useState(false);
    const onSelect = () => {
        setSelect((prev) => !prev);
    };

    const onPoint = (e: any) => {
        setPoint(e.target.innerText);
        setSelect((prev) => !prev);
        console.log(isNaN(Number(point)));
    };

    const onSucess = () => {
        setPoint("포인트 선택");
        closeModal();
    };

    const [createPointTransactionOfLoading] = useMutation(
        CREATE_POINT_TRANSACTION_OF_LOADING
    );

    useEffect(() => {
        const script = document.createElement("script");
        const script2 = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        script2.src = "https://cdn.iamport.kr/v1/iamport.js";
        document.head.appendChild(script);
        document.head.appendChild(script2);
    }, []);

    const onPayment = (): void => {
        if (isNaN(Number(point))) return;
        const IMP = window.IMP; // 생략 가능
        IMP.init("imp49910675"); // 예: imp00000000a

        IMP.request_pay(
            {
                // param
                pg: "kakaopay",
                pay_method: "card",
                amount: Number(point),
                name: "포인트",
            },
            (rsp: any) => {
                if (rsp.success === true) {
                    // 결제 성공시 로직
                    console.log(rsp.imp_uid);
                    createPointTransactionOfLoading({
                        variables: {
                            impUid: rsp.imp_uid,
                        },
                    });
                    onSucess();
                    // 백엔드 결제 관려 데이터 넘겨죽기 => 즉, 뮤테이션 실행
                } else {
                    // 결제 실패시 로직
                    onSucess();
                }
            }
        );
    };

    return (
        <C.Bg>
            <C.Wrapper>
                <i>충전 아이콘</i>
                <p>충전하실 금액을 선택해주세요.</p>
                <button className="close" onClick={closeModal}>
                    닫기
                </button>
                <C.Select_Wrap>
                    <button onClick={onSelect}>{point}</button>
                    <C.Point_List select={select}>
                        <li onClick={onPoint}>1000</li>
                        <li onClick={onPoint}>3000</li>
                        <li onClick={onPoint}>5000</li>
                        <li onClick={onPoint}>10000</li>
                    </C.Point_List>
                </C.Select_Wrap>
                <C.Charge_btn
                    className="charge_btn"
                    onClick={onPayment}
                    point={isNaN(Number(point))}
                >
                    충전하기
                </C.Charge_btn>
            </C.Wrapper>
        </C.Bg>
    );
}
