import styled from "@emotion/styled";
export const Wrap = styled.div`
    width: 100%;
    span {
        width: 100px;
        font-size: 24px;
        font-weight: 500;
        line-height: 56px;
    }
`;
export const Content = styled.div`
    display: flex;
    gap: 0 26px;
`;
export const KakaoMap = styled.div`
    width: 384px;
    height: 252px;
    #map {
        width: 100%;
        height: 100%;
    }
`;

export const Addr_srh = styled.div`
    width: calc(100% - 410px);
    display: flex;
    flex-direction: column;
    gap: 25px 0;
    > input {
        border: none;
        width: 100%;
        height: 56px;
        background-color: #e9e9e9;
        padding: 0 19px;
        ::placeholder {
            font-size: 15px;
            color: #a9a9a9;
        }
    }
`;
export const ZipCode = styled.div`
    display: flex;
    gap: 0 16px;
    input {
        width: 77px;
        height: 52px;
        line-height: 52px;
        color: #bdbdbd;
        border: 1px solid #bdbdbd;
        padding: 0 16px;
        text-align: center;
    }
    button {
        width: 124px;
        height: 52px;
        border: none;
        background-color: black;
        color: white;
        font-weight: 500;
        cursor: pointer;
    }
`;
