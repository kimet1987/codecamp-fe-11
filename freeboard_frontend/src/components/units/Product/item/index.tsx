import { useRouter } from "next/router";
import { MouseEvent } from "react";
import * as L from "../../../../../styles/products/list/item";
import { IUseditem } from "../../../../commons/types/generated/types";

interface IProductItem {
    data?: IUseditem;
}

export default function ProductItem(props: IProductItem) {
    const router = useRouter();
    const onMove = (e: MouseEvent<HTMLLIElement>) => {
        if (e.currentTarget instanceof HTMLLIElement) {
            router.push(`/products/${e.currentTarget.id}`);
        }
        //onTodayProduct(props);
        // console.log(e.currentTarget);
    };
    const onTodayProduct = (today: IProductItem) => {
        console.log(today.data);
        // 1. 기존 장바구나 담은 것 가져오기
        const todays = JSON.parse(localStorage.getItem("todays") ?? "[]"); // 문자열을 객체나 배열로 바꾸기

        // 1-1. 이미 장바구니에 담긴 것인지 확인하기
        const temp = todays.filter((el: any) => el._id === today.data?._id);
        if (temp.length >= 1) {
            return;
        }

        // 2. 내가 클릭한것 장바구니 추가로 담기
        const { ...newBasket } = today.data; // 안전한 사례  ==> ...rest 사용해서

        todays.push(today.data);

        // 3. 추가된 장바구니로 변경하기
        localStorage.setItem("todays", JSON.stringify(todays));
    };

    let img;
    if (props.data?.images !== null && props.data?.images !== undefined) {
        img = props.data?.images[0];
    }

    return (
        <L.Wrapper
            id={props.data?._id}
            onClick={(e) => {
                onMove(e);
                onTodayProduct(props);
            }}
        >
            <L.Img_wrap>
                {img !== "" && img !== undefined ? (
                    <img src={`https://storage.googleapis.com/${img}`} />
                ) : (
                    <p>이미지 없음</p>
                )}
            </L.Img_wrap>
            <ul>
                <li>{props.data?.name}</li>
                <li>{props.data?.remarks}</li>
                <li>{props.data?.tags}</li>
                <li>
                    <L.Seller>
                        <img src="/comment/user_img.svg" />
                        <span>{props.data?.seller?.name}</span>
                    </L.Seller>
                    <L.Like>
                        <img src="/heart.svg" />
                        <span>{props.data?.pickedCount}</span>
                    </L.Like>
                </li>
            </ul>
            <L.price>
                <span>{props.data?.price}</span>
                <span>원</span>
            </L.price>
        </L.Wrapper>
    );
}
