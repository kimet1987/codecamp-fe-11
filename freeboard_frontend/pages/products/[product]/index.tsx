import DOMPurify from "dompurify";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import Main_type from "../../../src/components/commons/buttons/main_type";
import * as P from "../../../styles/products/product";

import { useMuDeleteItem } from "../../../src/components/commons/useMutation/useDeleteUsedItem";
import { useQuFetchItem } from "../../../src/components/commons/useQuery/useFetchUsedItem";
import Img_slide from "../../../src/components/units/board/img_load/img_slide";
import CommentList from "./comments/list";
import CmtRegister from "./comments/cmt_register";
import MapCom from "../../../src/components/units/location/map_com/MapCom";

function Product_page() {
    const router = useRouter();
    const { data } = useQuFetchItem({
        useditemId: String(router.query.product),
    });

    const onEdit = (e: MouseEvent<HTMLButtonElement>) => {
        router.push(`/products/${router.query.product}/edit`);
    };
    const [onDel] = useMuDeleteItem();

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
                    <P.Img_slide>
                        {data?.fetchUseditem.images?.length !== 0 ? (
                            <Img_slide data={data} />
                        ) : (
                            <></>
                        )}
                    </P.Img_slide>
                    {typeof window !== "undefined" && (
                        <P.Content
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    data?.fetchUseditem?.contents
                                ),
                            }}
                        />
                    )}
                    <P.Tag_list>
                        {data?.fetchUseditem.tags.map((el: string) => (
                            <li key={uuidv4()}>{el}</li>
                        ))}
                    </P.Tag_list>
                    <P.Map_wrap>
                        <MapCom data={data} />
                    </P.Map_wrap>
                    <P.Btn_wrap>
                        <Main_type
                            id={`${router.query.product}`}
                            isActive={true}
                            type="button"
                            title="삭제"
                            onFunc={onDel}
                        />
                        <Main_type
                            isActive={false}
                            type="button"
                            title="목록으로"
                        />
                        {}
                        <Main_type
                            isActive={true}
                            type="button"
                            title="구매하기"
                        />
                        <Main_type
                            isActive={true}
                            type="button"
                            title="수정하기"
                            onFunc={onEdit}
                        />
                    </P.Btn_wrap>
                </P.Contents>
            </P.Wrapper>
            <CmtRegister />
            <CommentList />
        </>
    );
}
export default Product_page;
