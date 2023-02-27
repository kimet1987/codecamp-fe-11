import { useEffect, useState } from "react";
declare const window: typeof globalThis & {
    kakao: any;
};

export default function useKakao() {
    const [loadAddress, setLoadAddress] = useState("");
    const [localAddress, setLocalAddress] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");

    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=46957e776ff266095299f1673dc3b4d4&libraries=services";
        document.head.appendChild(script);
        script.onload = () => {
            window.kakao.maps.load(function () {
                const mapContainer = document.getElementById("map"), // 지도를 표시할 div
                    mapOption = {
                        center: new window.kakao.maps.LatLng(
                            37.566826,
                            126.9786567
                        ), // 지도의 중심좌표
                        level: 3, // 지도의 확대 레벨
                    };

                // 지도를 생성합니다
                const map = new window.kakao.maps.Map(mapContainer, mapOption);

                // 주소-좌표 변환 객체를 생성합니다
                let geocoder = new window.kakao.maps.services.Geocoder();

                let marker = new window.kakao.maps.Marker(), // 클릭한 위치를 표시할 마커입니다
                    infowindow = new window.kakao.maps.InfoWindow({
                        zindex: 1,
                    }); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다

                // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
                searchAddrFromCoords(map.getCenter(), displayCenterInfo);

                // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
                window.kakao.maps.event.addListener(
                    map,
                    "click",
                    function (mouseEvent: any) {
                        searchDetailAddrFromCoords(
                            mouseEvent.latLng,
                            function (result: any, status: any) {
                                if (
                                    status ===
                                    window.kakao.maps.services.Status.OK
                                ) {
                                    !!result[0].road_address
                                        ? (setLoadAddress(
                                              result[0].road_address
                                                  .address_name
                                          ),
                                          setLocalAddress(
                                              result[0].address.address_name
                                          ))
                                        : "";
                                    marker.setPosition(mouseEvent.latLng);
                                    marker.setMap(map);
                                }
                            }
                        );
                        setLat(map.getCenter().getLat());
                        setLng(map.getCenter().getLng());
                    }
                );

                // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
                window.kakao.maps.event.addListener(map, "idle", function () {
                    searchAddrFromCoords(map.getCenter(), displayCenterInfo);
                });

                function searchAddrFromCoords(coords: any, callback: any) {
                    // 좌표로 행정동 주소 정보를 요청합니다
                    geocoder.coord2RegionCode(
                        coords.getLng(),
                        coords.getLat(),
                        callback
                    );
                }

                function searchDetailAddrFromCoords(
                    coords: any,
                    callback: any
                ) {
                    // 좌표로 법정동 상세 주소 정보를 요청합니다
                    geocoder.coord2Address(
                        coords.getLng(),
                        coords.getLat(),
                        callback
                    );
                }

                // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
                function displayCenterInfo(result: any, status: any) {
                    if (status === window.kakao.maps.services.Status.OK) {
                        let infoDiv = document.getElementById("centerAddr");

                        for (var i = 0; i < result.length; i++) {
                            // 행정동의 region_type 값은 'H' 이므로
                            if (result[i].region_type === "H") {
                                if (infoDiv === null) return;
                                infoDiv.innerHTML = result[i].address_name;
                                break;
                            }
                        }
                    }
                }
            });
        };
    }, []);

    return {
        localAddress,
        loadAddress,
        lat,
        lng,
        setLat,
        setLng,
    };
}
