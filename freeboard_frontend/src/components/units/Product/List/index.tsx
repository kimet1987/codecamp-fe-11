import * as L from "../../../../../styles/products/list";
import Main_type from "../../../commons/buttons/main_type";

export default function ProductList() {
    return (
        <>
            <L.Wrapper>
                <L.Header>
                    <L.Sale_wrap>
                        <button className="active">판매중 상품</button>
                        <button>판매된 상품</button>
                    </L.Sale_wrap>
                    <L.Filter_wrap>
                        <L.Search_wrap>
                            <input
                                type="text"
                                placeholder="제품을 검색해주세요"
                            />
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
                    <li>
                        <L.Img_wrap>
                            <img src="/pen.svg" />
                        </L.Img_wrap>
                        <ul>
                            <li>삼성전자 갤탭</li>
                            <li>2022 LTE 32GB</li>
                            <li>#삼성전자 #갤럭시탭</li>
                            <li>
                                <L.Seller>
                                    <img src="/comment/user_img.svg" />
                                    <span>판매자</span>
                                </L.Seller>
                                <L.Like>
                                    <img src="/heart.svg" />
                                    <span>22</span>
                                </L.Like>
                            </li>
                        </ul>
                        <L.price>
                            <span>240,000</span>
                            <span>원</span>
                        </L.price>
                    </li>
                </L.List_wrap>
                <L.Register_btn>상품 등록하기</L.Register_btn>
            </L.Wrapper>
        </>
    );
}
