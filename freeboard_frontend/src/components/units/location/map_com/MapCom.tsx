import { useEffect } from "react";
import styled from "@emotion/styled";

export const Map = styled.div`
    width: 100%;
    height: 448px;
`;

declare const window: typeof globalThis & {
    kakao: any;
};

export default function MapCom(props: any) {
    useEffect(() => {
        if (props.data?.fetchUseditem.useditemAddress?.address) {
            const script = document.createElement("script");
            script.src =
                "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=46957e776ff266095299f1673dc3b4d4&libraries=services";
            document.head.appendChild(script);

            script.onload = () => {
                window.kakao.maps.load(function () {
                    let mapContainer = document.getElementById("map"), // 지도를 표시할 div
                        mapOption = {
                            center: new window.kakao.maps.LatLng(
                                33.450701,
                                126.570667
                            ), // 지도의 중심좌표
                            level: 3, // 지도의 확대 레벨
                        };

                    // 지도를 생성합니다
                    let map = new window.kakao.maps.Map(
                        mapContainer,
                        mapOption
                    );

                    // 주소-좌표 변환 객체를 생성합니다
                    let geocoder = new window.kakao.maps.services.Geocoder();

                    // 주소로 좌표를 검색합니다
                    geocoder.addressSearch(
                        props.data?.fetchUseditem.useditemAddress?.address,
                        function (result: any, status: any) {
                            // 정상적으로 검색이 완료됐으면
                            if (
                                status === window.kakao.maps.services.Status.OK
                            ) {
                                let coords = new window.kakao.maps.LatLng(
                                    result[0].y,
                                    result[0].x
                                );
                                // 결과값으로 받은 위치를 마커로 표시합니다
                                let marker = new window.kakao.maps.Marker({
                                    map: map,
                                    position: coords,
                                });
                                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                                map.setCenter(coords);
                            }
                        }
                    );
                });
            };
        }
    }, [props.data?.fetchUseditem.useditemAddress?.address]);
    return <Map id="map">지도</Map>;
}
