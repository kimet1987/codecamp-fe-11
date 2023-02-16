import Main_type from "../../../src/components/commons/buttons/main_type";
import * as P from "../../../styles/products/product";

export default function Product_page() {
    return (
        <>
            <P.Wrapper>
                <P.Header>
                    <P.User>
                        <img src="/board/user.svg" />
                        <P.Info>
                            {/* <span>{props.data?.fetchBoard?.writer}</span> */}
                            <dl>
                                <dt>Date: </dt>
                                {/* <dd>
                                    {props.data?.fetchBoard?.createdAt
                                        .substr(0, 10)
                                        .replace(/-/g, ".")}
                                </dd> */}
                            </dl>
                        </P.Info>
                    </P.User>
                    <P.Icon_wrap>
                        <button></button>
                        <button className="location">
                            <p>
                                {/* {`${
                                    props.data?.fetchBoard.boardAddress
                                        ?.address ?? ""
                                } ${
                                    props.data?.fetchBoard.boardAddress
                                        ?.addressDetail ?? ""
                                }`} */}
                            </p>
                        </button>
                    </P.Icon_wrap>
                </P.Header>
                <P.Contents>
                    <P.Info_wrap>
                        <h3>상품명</h3>
                        <p>요약설명</p>
                        <span>가격</span>
                    </P.Info_wrap>
                    <P.Like type="button">20</P.Like>
                    <P.Img_slide>이미지 슬라이드</P.Img_slide>
                    <P.Content>설명 내용</P.Content>
                    <P.Tag_list>
                        <li>#태그</li>
                        <li>#태그</li>
                        <li>#태그</li>
                    </P.Tag_list>
                    <P.Map_wrap>
                        <div>지도</div>
                    </P.Map_wrap>
                    <P.Btn_wrap>
                        <Main_type
                            isActive={false}
                            type="button"
                            title="목록으로"
                        />
                        <Main_type
                            isActive={true}
                            type="button"
                            title="구매하기"
                        />
                    </P.Btn_wrap>
                </P.Contents>
            </P.Wrapper>
        </>
    );
}
