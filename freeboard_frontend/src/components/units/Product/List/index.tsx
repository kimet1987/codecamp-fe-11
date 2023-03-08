import { useRouter } from "next/router";
import { MouseEvent } from "react";
import * as L from "../../../../../styles/products/list";
import { useFetchItems } from "../../../commons/useQuery/useFetchItems";
import { useQuFetchItem } from "../../../../../src/components/commons/useQuery/useFetchUsedItem";
import TodaysProduct from "../../Todays_product";
import ProductItem from "../item";

export default function ProductList() {
    const { data, refetch } = useFetchItems();
    const router = useRouter();

    const onNew = () => {
        router.push("/products/new");
    };

    return (
        <L.Wrapper>
            <TodaysProduct />
            <L.Header>
                <L.Sale_wrap>
                    <button className="active">판매중 상품</button>
                    <button>판매된 상품</button>
                </L.Sale_wrap>
                <L.Filter_wrap>
                    <L.Search_wrap>
                        <input type="text" placeholder="제품을 검색해주세요" />
                    </L.Search_wrap>
                    <L.Date_wrap>
                        <L.Input_wrap>
                            <input type="date" name="start" />
                            <input type="date" name="end" />
                        </L.Input_wrap>
                        <button>검색</button>
                    </L.Date_wrap>
                </L.Filter_wrap>
            </L.Header>

            <L.List_wrap>
                {data?.fetchUseditems.map((el: any) => (
                    <ProductItem
                        key={el._id}
                        data={el}
                        //onClick={onMove}
                    ></ProductItem>
                ))}
            </L.List_wrap>
            <L.Register_btn onClick={onNew}>상품 등록하기</L.Register_btn>
        </L.Wrapper>
    );
}
