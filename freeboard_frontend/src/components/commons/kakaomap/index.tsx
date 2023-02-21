import styled from "@emotion/styled";
import useKakao from "./useKakao";
export const Location_wrap = styled.div`
    display: flex;
    gap: 0 24px;
    width: 100%;
    h3 {
        font-size: 20px;
        font-weight: 500;
        color: black;
    }
`;
export const Location_map = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    width: calc(35% - 12px);
    #map {
        width: 100%;
        height: 250px;
    }
`;
export const Search_wrap = styled.div`
    width: calc(65% - 12px);
    display: flex;
    flex-direction: column;
    gap: 40px 0;
`;
export const Gps_wrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    div {
        display: flex;
        align-items: center;
        gap: 0 20px;
        width: 100%;
        height: 52px;
        span {
            border: 1px solid #333;
            height: 100%;
            width: 180px;
            text-align: center;
            line-height: 34px;
            font-weight: 500;
            padding: 10px;
            font-size: 18px;
            border-radius: 5px;
        }
        i {
            width: 36px;
            height: 36px;
            background: url(/board/location.svg) no-repeat;
            background-size: contain;
        }
    }
`;
export const Address = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px 0;
    p {
        width: 100%;
        border: 1px solid #bdbdbd;
        border-radius: 8px;
        padding: 15px;
        font-size: 20px;
        font-weight: 500;
        color: #333;
        height: 55px;
    }
`;

export default function KakaoMap(props: any) {
    return (
        <Location_wrap>
            <Location_map>
                <h3>거래위치</h3>
                <div id="map"></div>
                <div id="centerAddr"></div>
            </Location_map>
            <Search_wrap>
                <Gps_wrap>
                    <h3>GPS</h3>
                    <div>
                        <span>{props.lng}</span>
                        <i className="local_icon"></i>
                        <span>{props.lat}</span>
                    </div>
                </Gps_wrap>
                <Address>
                    <h3>주소</h3>
                    <p>{props.loadAddress}</p>
                    <p>{props.localAddress}</p>
                </Address>
            </Search_wrap>
        </Location_wrap>
    );
}
