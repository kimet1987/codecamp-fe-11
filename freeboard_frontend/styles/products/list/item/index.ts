import styled from "@emotion/styled";

export const Wrapper = styled.li`
    list-style: none;
    width: calc(25% - 15px);
    border: 1px solid #bdbdbd;
    border-radius: 0 0 15px 0;
    padding: 14px;
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    ul {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        li {
            list-style: none;
        }
        li:nth-of-type(1) {
            font-size: 24px;
            font-weight: 500;
        }
        li:nth-of-type(2) {
            font-size: 18px;
            color: #333;
        }
        li:nth-of-type(3) {
            font-size: 16px;
            color: #eee;
        }
        li:nth-of-type(4) {
            display: flex;
            width: 100%;
            gap: 0 20px;
        }
    }
`;
export const Img_wrap = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        object-fit: contain;
    }
`;
export const Seller = styled.button`
    display: flex;
    gap: 0 8px;
    font-size: 18px;
    line-height: 24px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    img {
        width: 24px;
        height: 24px;
        object-fit: contain;
    }
`;
export const Like = styled.button`
    display: flex;
    gap: 0 8px;
    font-size: 18px;
    line-height: 24px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    img {
        width: 24px;
        height: 24px;
        object-fit: contain;
    }
`;
export const price = styled.div`
    display: flex;
    gap: 0 5px;
    font-size: 24px;
    padding: 10px 0;
    span:nth-of-type(1) {
        font-weight: 700;
    }
    span:nth-of-type(2) {
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
    }
`;
