import DOMPurify from "dompurify";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import Main_type from "../../../src/components/commons/buttons/main_type";
import * as P from "../../../styles/products/product";
import { useMuDeleteItem } from "./querys/useMuDeleteItem";
import { useQuFetchItem } from "./querys/useQuFetchItem";

export default function Product_page() {
    const router = useRouter();

    const { data } = useQuFetchItem({
        useditemId: String(router.query.product),
    });
    // const [ data ] = useMuDeleteItem();
    // const onDel = (e: MouseEvent<HTMLButtonElement>) => {
    //     deleteUseditem({
    //         variables: { productId: router.query.productId },
    //         refetchQueries: [{ query: FETCH_ }],
    //     });
    // };

    return (
        <>
            <P.Wrapper>
                <P.Header>
                    <P.User>
                        <img src="/board/user.svg" />
                        <P.Info>
                            <span>{data?.fetchUseditem?.seller?.name}</span>
                            <dl>
                                <dt>Date: </dt>
                                <dd>
                                    {data?.fetchUseditem?.createdAt
                                        .substr(0, 10)
                                        .replace(/-/g, ".")}
                                </dd>
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
                        <h3>{data?.fetchUseditem?.name}</h3>
                        <p>{data?.fetchUseditem?.remarks}</p>
                        <span>{data?.fetchUseditem?.price} 원</span>
                    </P.Info_wrap>
                    <P.Like type="button">
                        {data?.fetchUseditem?.pickedCount}
                    </P.Like>
                    <P.Img_slide>이미지 슬라이드</P.Img_slide>
                    {typeof window !== "undefined" && (
                        <P.Content
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    String(data?.fetchUseditem?.contents)
                                ), /// 물어보가
                            }}
                        />
                    )}
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
                            isActive={true}
                            type="button"
                            title="삭제"
                            //onFunc={onDel}
                        />
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
function deleteUseditem(arg0: {
    variables: { productId: string | string[] | undefined };
}) {
    throw new Error("Function not implemented.");
}
