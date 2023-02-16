import InputRegister from "../../../src/components/commons/inputs/register";
import * as P from "../../../styles/products/new";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MainSetRadio from "../../../src/components/commons/inputs/set_radio";
import ImgLoad from "../../../src/components/units/board/img_load";
import Main_type from "../../../src/components/commons/buttons/main_type";

interface IFormData {
    naem: string;
}

export default function Product_register() {
    const { register, handleSubmit, formState } = useForm<IFormData>({
        // resolver: yupResolver(schema),
        mode: "onChange",
    });

    return (
        <>
            <P.Wrapper>
                <h2>상품 등록하기</h2>
                <InputRegister
                    title="상품명"
                    type="text"
                    placeholder="상품명을 입력해주세요"
                    // register={register("pwRe")}
                    // errMsg={formState.errors.pwRe?.message ?? ""}
                />
                <InputRegister
                    title="한줄요약"
                    type="text"
                    placeholder="상품 설명 요약을 입력해주세요"
                    // register={register("pwRe")}
                    // errMsg={formState.errors.pwRe?.message ?? ""}
                />
                <P.Desc>
                    <label>상품설명</label>
                    <textarea placeholder="상품 설명을 입력해주세요." />
                </P.Desc>
                <InputRegister
                    title="판매 가격"
                    type="text"
                    placeholder="판매가격을 입력해주세요"
                    // register={register("pwRe")}
                    // errMsg={formState.errors.pwRe?.message ?? ""}
                />
                <InputRegister
                    title="태그입력"
                    type="text"
                    placeholder="#태그 #태그 #태그"
                    // register={register("pwRe")}
                    // errMsg={formState.errors.pwRe?.message ?? ""}
                />
                <P.Location_wrap>
                    <P.Location_map>
                        <h3>거래위치</h3>
                        <div></div>
                    </P.Location_map>
                    <P.Search_wrap>
                        <P.Gps_wrap>
                            <h3>GPS</h3>
                            <div></div>
                        </P.Gps_wrap>
                        <P.Address>
                            <h3>주소</h3>
                            <input type="text" />
                            <input type="text" />
                        </P.Address>
                    </P.Search_wrap>
                </P.Location_wrap>
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
