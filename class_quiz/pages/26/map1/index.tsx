import { useEffect } from "react";
declare const window: typeof globalThis & {
    kakao: any;
};

export default function KakaoMap() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=46957e776ff266095299f1673dc3b4d4";
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(function () {
                const container = document.getElementById("map");

                const options = {
                    center: new window.kakao.maps.LatLng(37.500918, 127.089969),
                    level: 3,
                };
                const map = new window.kakao.maps.Map(container, options);

                const imageSrc =
                        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
                    imageSize = new window.kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
                    imageOption = {
                        offset: new window.kakao.maps.Point(27, 69),
                    };

                const markerImage = new window.kakao.maps.MarkerImage(
                    imageSrc,
                    imageSize,
                    imageOption
                );

                const position = new window.kakao.maps.LatLng(
                    37.500918,
                    127.089969
                );
                const marker = new window.kakao.maps.Marker({
                    position: position,
                    clickable: true,
                    image: markerImage,
                });

                marker.setMap(map);

                window.kakao.maps.event.addListener(
                    map,
                    "click",
                    function (mouseEvent: any) {
                        // 클릭한 위도, 경도 정보를 가져옵니다
                        const latlng = mouseEvent.latLng;

                        // 마커 위치를 클릭한 위치로 옮깁니다
                        marker.setPosition(latlng);

                        let message =
                            "클릭한 위치의 위도는 " +
                            latlng.getLat() +
                            " 이고, ";
                        message += "경도는 " + latlng.getLng() + " 입니다";

                        const resultDiv =
                            document.getElementById("clickLatlng");
                        resultDiv.innerHTML = message;
                    }
                );
            });
        };
    }, []);

    return (
        <>
            <div id="map" style={{ width: 500, height: 500 }}></div>
            <div id="clickLatlng"></div>
        </>
    );
}
