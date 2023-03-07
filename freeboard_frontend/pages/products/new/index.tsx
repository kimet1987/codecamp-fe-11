import InputRegister from "../../../src/components/commons/inputs/register";
import * as P from "../../../styles/products/new";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MainSetRadio from "../../../src/components/commons/inputs/set_radio";
import ImgLoad from "../../../src/components/units/board/img_load";
import Main_type from "../../../src/components/commons/buttons/main_type";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USED_ITME } from "./queries";
import "react-quill/dist/quill.snow.css";
import {
    IMutation,
    IMutationCreateUseditemArgs,
    IMutationUpdateUseditemArgs,
    IQuery,
    IUpdateUseditemInput,
    IUseditem,
} from "../../../src/commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
import { schema } from "./schema";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/stores";
import { loginChk } from "../../../src/components/commons/hocs/loginChk";
import Location_wrap from "../../../src/components/units/location";
const ReactQuill = dynamic(async () => await import("react-quill"), {
    ssr: false,
});

export interface IRegisterProps {
    //isEdit: boolean;
    data?: Pick<IQuery, "fetchUseditem">;
}

function Product_register(props: IRegisterProps) {
    const [isEdit, setIsEdit] = useRecoilState(isEditState);
    const router = useRouter();
    const [tags, setTags] = useState<string[]>();
    const [fileUrls, setFileUrls] = useState(["", "", ""]);

    const { register, trigger, setValue, handleSubmit, formState, reset } =
        useForm({
            defaultValues: props.data?.fetchUseditem,
            resolver: yupResolver(schema),
            mode: "onChange",
        });

    useEffect(() => {
        reset(props.data?.fetchUseditem);
    }, [props.data?.fetchUseditem, reset]);

    const onContents = (value: string): void => {
        console.log(value, "v");
        setValue("contents", value === "<p><br></p>" ? "" : value);
        void trigger("contents");
    };

    const [createUsedItem] = useMutation<
        Pick<IMutation, "createUseditem">,
        IMutationCreateUseditemArgs
    >(CREATE_USED_ITEM);

    const [updateUseditem] = useMutation<
        Pick<IMutation, "updateUseditem">,
        IMutationUpdateUseditemArgs
    >(UPDATE_USED_ITME);

    const onFunc = (e: ChangeEvent<HTMLInputElement>) => {
        let tagsArr = e.currentTarget.value.split(" ");
        setTags(tagsArr);
    };

    const onUpdate = async (data: IUseditem) => {
        const updateUseditemInput: IUpdateUseditemInput = {};
        const currentFiles = JSON.stringify(fileUrls);
        const defaultFiles = JSON.stringify(props.data?.fetchUseditem.images);
        const isChangedFiles = currentFiles !== defaultFiles;

        if (isChangedFiles) updateUseditemInput.images = fileUrls;

        if (typeof router.query.product !== "string") {
            alert("시스템에 문제가 있습니다");
            return;
        }

        const myVariables = {
            useditemId: router.query.product,
            updateUseditemInput: {
                name: data.name,
                remarks: data.remarks,
                contents: data.contents,
                price: Number(data.price),
                tags: tags,
                useditemAddress: {
                    lat: Number(data.useditemAddress?.lat),
                    lng: Number(data.useditemAddress?.lng),
                    address: data.useditemAddress?.address,
                    addressDetail: data.useditemAddress?.addressDetail,
                    zipcode: data.useditemAddress?.zipcode,
                },
                images: [...fileUrls],
            },
        };

        const result = await updateUseditem({
            variables: myVariables,
        });
        console.log(data);
        router.push(`/products/${result.data?.updateUseditem._id}`);
    };

    const onRegister = async (data: IUseditem): Promise<void> => {
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
                            lat: Number(data.useditemAddress?.lat),
                            lng: Number(data.useditemAddress?.lng),
                            address: data.useditemAddress?.address,
                            addressDetail: data.useditemAddress?.addressDetail,
                            zipcode: data.useditemAddress?.zipcode,
                        },
                        images: [...fileUrls],
                    },
                },
            });

            router.push(`/products/${result?.data?.createUseditem._id}`);
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            }
        }
    };

    const onImgUrls = (fileUrl: string, index: number): void => {
        const newFileUrls = [...fileUrls];
        newFileUrls[index] = fileUrl;
        setFileUrls(newFileUrls);
    };
    useEffect(() => {
        const images = props.data?.fetchUseditem.images;
        if (images !== undefined && images !== null) setFileUrls([...images]);
    }, [props.data]);

    return (
        <>
            <P.Wrapper
                onSubmit={
                    isEdit ? handleSubmit(onUpdate) : handleSubmit(onRegister)
                }
                autoComplete="on"
            >
                <h2>상품 등록하기</h2>
                <InputRegister
                    title="상품명"
                    type="text"
                    placeholder="상품명을 입력해주세요"
                    register={register("name")}
                    errMsg={formState.errors.name?.message ?? ""}
                    default={props.data?.fetchUseditem.name ?? ""}
                />
                <InputRegister
                    title="한줄요약"
                    type="text"
                    placeholder="상품 설명 요약을 입력해주세요"
                    register={register("remarks")}
                    errMsg={formState.errors.remarks?.message ?? ""}
                    default={props.data?.fetchUseditem.remarks ?? ""}
                />
                <P.Desc>
                    <label>상품설명</label>
                    {props.data?.fetchUseditem.contents && isEdit ? (
                        <ReactQuill
                            onChange={onContents}
                            defaultValue={
                                props.data?.fetchUseditem.contents ?? ""
                            }
                        />
                    ) : (
                        <ReactQuill onChange={onContents} />
                    )}

                    <p>{formState.errors.contents?.message ?? ""}</p>
                </P.Desc>
                <InputRegister
                    title="판매 가격"
                    type="text"
                    placeholder="판매가격을 입력해주세요"
                    register={register("price")}
                    errMsg={formState.errors.price?.message ?? ""}
                    default={props.data?.fetchUseditem.price ?? ""}
                />
                <InputRegister
                    title="태그입력"
                    type="text"
                    placeholder="#태그 #태그 #태그"
                    register={register("tags")}
                    errMsg={formState.errors.tags?.message ?? ""}
                    onFunc={onFunc}
                    default={props.data?.fetchUseditem.tags?.join(" ") ?? ""}
                />
                <Location_wrap
                    setValue={setValue}
                    register={register}
                    props={props}
                />
                <P.Attach_pic>
                    <h3>사진 첨부</h3>
                    <P.Img_wrap>
                        {fileUrls.map((el, index) => (
                            <ImgLoad
                                key={uuidv4()}
                                index={index}
                                fileUrl={el}
                                onImgUrls={onImgUrls}
                            />
                        ))}
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
                    {isEdit ? (
                        <Main_type
                            isActive={true}
                            type="submit"
                            title="수정하기"
                        />
                    ) : (
                        <Main_type
                            isActive={true}
                            type="submit"
                            title="등록하기"
                        />
                    )}
                </P.Btn_wrap>
            </P.Wrapper>
        </>
    );
}

export default loginChk(Product_register);
