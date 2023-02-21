import { useEffect } from "react";
import styled from "@emotion/styled";

export const Map = styled.div`
    width: 100%;
    height: 360px;
`;

declare const window: typeof globalThis & {
    kakao: any;
};

export default function MapCom(props: any) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=46957e776ff266095299f1673dc3b4d4";
        document.head.appendChild(script);
        script.onload = () => {
            window.kakao.maps.load(function () {
                const mapContainer = document.getElementById("map"), // 지도를 표시할 div
                    mapOption = {
                        center: new window.kakao.maps.LatLng(
                            props.lat,
                            props.lng
                        ), // 지도의 중심좌표
                        level: 3, // 지도의 확대 레벨
                    };
                const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
                // 마커가 표시될 위치입니다
                const markerPosition = new window.kakao.maps.LatLng(
                    props.lat,
                    props.lng
                );
                // 마커를 생성합니다
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                });
                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);
            });
        };
    }, []);
    return <Map id="map">지도</Map>;
}
