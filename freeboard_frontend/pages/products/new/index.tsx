import InputRegister from "../../../src/components/commons/inputs/register";
import * as P from "../../../styles/products/new";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MainSetRadio from "../../../src/components/commons/inputs/set_radio";
import ImgLoad from "../../../src/components/units/board/img_load";
import Main_type from "../../../src/components/commons/buttons/main_type";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM } from "./queries";
import "react-quill/dist/quill.snow.css";
import {
    ICreateUseditemInput,
    IMutation,
    IMutationCreateUseditemArgs,
} from "../../../src/commons/types/generated/types";
import { schema } from "./schema";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import KakaoMap from "../../../src/components/commons/kakaomap";
import useKakao from "../../../src/components/commons/kakaomap/useKakao";
const ReactQuill = dynamic(async () => await import("react-quill"), {
    ssr: false,
});

export default function Product_register() {
    const router = useRouter();
    const [tags, setTags] = useState<string[]>();
    const { lat, lng, loadAddress, localAddress } = useKakao();
    const { register, trigger, setValue, handleSubmit, formState } =
        useForm<ICreateUseditemInput>({
            resolver: yupResolver(schema),
            mode: "onChange",
        });
    const onContents = (value: string): void => {
        setValue("contents", value === "<p><br></p>" ? "" : value);
        void trigger("contents");
    };

    const [createUsedItem] = useMutation<
        Pick<IMutation, "createUseditem">,
        IMutationCreateUseditemArgs
    >(CREATE_USED_ITEM);

    const onFunc = (e: ChangeEvent<HTMLInputElement>) => {
        let tagsArr = e.currentTarget.value.split(" ");
        setTags(tagsArr);
    };
    console.log(Number(lat));
    const onRegister = async (data: ICreateUseditemInput): Promise<void> => {
        try {
            const result = await createUsedItem({
                variables: {
                    createUseditemInput: {
                        name: data.name,
                        remarks: data.remarks,
                        contents: data.contents,
                        price: Number(data.price),
                        tags: tags,
                        useditemAddress: {
                            lat: Number(lat),
                            lng: Number(lng),
                            address: loadAddress,
                        },
                    },
                },
            });
            console.log(result);
            router.push(`/products/${result?.data?.createUseditem._id}`);
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            }
        }
    };

    return (
        <>
            <P.Wrapper onSubmit={handleSubmit(onRegister)}>
                <h2>상품 등록하기</h2>
                <InputRegister
                    title="상품명"
                    type="text"
                    placeholder="상품명을 입력해주세요"
                    register={register("name")}
                    errMsg={formState.errors.name?.message ?? ""}
                />
                <InputRegister
                    title="한줄요약"
                    type="text"
                    placeholder="상품 설명 요약을 입력해주세요"
                    register={register("remarks")}
                    errMsg={formState.errors.remarks?.message ?? ""}
                />
                <P.Desc>
                    <label>상품설명</label>
                    <ReactQuill onChange={onContents} />
                    <p>{formState.errors.contents?.message ?? ""}</p>
                </P.Desc>
                <InputRegister
                    title="판매 가격"
                    type="text"
                    placeholder="판매가격을 입력해주세요"
                    register={register("price")}
                    errMsg={formState.errors.price?.message ?? ""}
                />
                <InputRegister
                    title="태그입력"
                    type="text"
                    placeholder="#태그 #태그 #태그"
                    register={register("tags")}
                    errMsg={formState.errors.tags?.message ?? ""}
                    onFunc={onFunc}
                />

                {/* 카카오 맵 */}
                <KakaoMap
                    lng={lng}
                    lat={lat}
                    loadAddress={loadAddress}
                    localAddress={localAddress}
                />
                <P.Attach_pic>
                    <h3>사진 첨부</h3>
                    <P.Img_wrap>
                        {/* {fileUrls.map((el, index) => (
							<ImgLoad
								key={uuidv4()}
								index={index}
								fileUrl={el}
								onImgUrls={onImgUrls}
							/>
						))} */}
                    </P.Img_wrap>
                </P.Attach_pic>
                <P.Main_set>
                    <h3>메인 설정</h3>
                    <P.Radio_wrap>
                        <MainSetRadio
                            id="img_1"
                            name="main"
                            title="사진 1"
                            type="radio"
                        />
                        <MainSetRadio
                            id="img_2"
                            name="main"
                            title="사진 2"
                            type="radio"
                        />
                    </P.Radio_wrap>
                </P.Main_set>
                <P.Btn_wrap>
                    <Main_type
                        isActive={false}
                        type="button"
                        title="취소하기"
                    />
                    <Main_type isActive={true} type="submit" title="등록하기" />
                </P.Btn_wrap>
            </P.Wrapper>
        </>
    );
}
