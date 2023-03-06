import React, { ChangeEvent, useEffect, useState } from "react";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import * as L from "./style";

declare const window: typeof globalThis & {
    kakao: any;
};

export default function Location_wrap(props: any) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [address, setAddress] = useState("");

    const [addrDetail, setAddrDetail] = useState("");
    const [zipCode, setZipCode] = useState(
        props.props.data?.fetchUseditem.useditemAddress.zipcode ?? ""
    );
    const [open, setOpen] = useState(false);

    const HandlerModal = () => {
        setIsModalOpen((prev) => !prev);
        setOpen((prev) => !prev);
    };
    const handleComplete = (data: any) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== ""
                        ? `, ${data.buildingName}`
                        : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        setIsModalOpen((prev) => !prev);
        setZipCode(
            props.props.data?.fetchUseditem.useditemAddress.zipcode == ""
                ? zipCode
                : data.zonecode
        );
        props.setValue("useditemAddress.zipcode", data.zonecode);

        setAddress(fullAddress);
        props.setValue("useditemAddress.address", fullAddress);
        setOpen((prev) => !prev);
    };
    const onDetail = (e: ChangeEvent<HTMLInputElement>) => {
        setAddrDetail(e.currentTarget.value);
        props.setValue("useditemAddress.addressDetail", e.currentTarget.value);
    };

    useEffect(() => {
        setAddress(
            props.props.data?.fetchUseditem.useditemAddress.address !== ""
                ? props.props.data?.fetchUseditem.useditemAddress.address
                : address
        );

        const script = document.createElement("script");
        script.src =
            "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=46957e776ff266095299f1673dc3b4d4&libraries=services";
        document.head.appendChild(script);
        script.addEventListener("load", () => {
            window.kakao.maps.load(() => {
                var container = document.getElementById("map");
                var options = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,
                };

                var map = new window.kakao.maps.Map(container, options);

                // 주소-좌표 변환 객체를 생성합니다
                var geocoder = new window.kakao.maps.services.Geocoder();
                // 주소로 좌표를 검색합니다
                geocoder.addressSearch(
                    props.props.data?.fetchUseditem.useditemAddress.address !==
                        ""
                        ? props.props.data?.fetchUseditem.useditemAddress
                              .address
                        : address,
                    function (result: any, status: any) {
                        // 정상적으로 검색이 완료됐으면
                        if (status === window.kakao.maps.services.Status.OK) {
                            var coords = new window.kakao.maps.LatLng(
                                result[0].y,
                                result[0].x
                            );

                            // 결과값으로 받은 위치를 마커로 표시합니다
                            var marker = new window.kakao.maps.Marker({
                                map: map,
                                position: coords,
                            });

                            props.setValue("useditemAddress.lng", coords.La);
                            props.setValue("useditemAddress.lat", coords.Ma);
                            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                            map.setCenter(coords);
                        }
                    }
                );
            });
        });
    }, [props.props.data?.fetchUseditem.useditemAddress]);

    return (
        <L.Wrap>
            <span>거래 위치</span>
            <L.Content>
                <L.KakaoMap>
                    <div id="map"></div>
                </L.KakaoMap>
                <L.Addr_srh>
                    <L.ZipCode>
                        <input type="text" readOnly value={zipCode} />
                        <button type="button" onClick={HandlerModal}>
                            우편번호 검색
                        </button>
                    </L.ZipCode>

                    <input type="text" readOnly value={address} />
                    <input
                        type="text"
                        id="addr"
                        value={addrDetail}
                        onChange={onDetail}
                    />
                    {open && (
                        <Modal
                            open={isModalOpen}
                            onOk={HandlerModal}
                            onCancel={HandlerModal}
                        >
                            <DaumPostcode onComplete={handleComplete} />
                        </Modal>
                    )}
                </L.Addr_srh>
            </L.Content>
        </L.Wrap>
    );
}
