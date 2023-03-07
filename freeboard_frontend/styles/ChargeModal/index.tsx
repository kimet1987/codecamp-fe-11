import styled from "@emotion/styled";

export const Bg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 5;
`;
export const Wrapper = styled.div`
    position: absolute;
    top: 360px;
    left: 50%;
    transform: translateX(-50%);
    width: 464px;
    padding: 68px 40px 40px;
    background-color: white;
    display: flex;
    flex-direction: column;
    z-index: 1;
    i {
        width: 78px;
        height: 55px;
        background: url(/charge_icon.svg) no-repeat;
        background-size: contain;
        margin: 0 auto;
        text-indent: -9999px;
    }
    p {
        padding: 40px 0;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
    }
    .close {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 24px;
        height: 24px;
        background: url(/x.svg) no-repeat;
        background-size: contain;
        text-indent: -9999px;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`;
export const Charge_btn = styled.button`
    width: 100%;
    background-color: ${(props: { point: boolean }) =>
        props.point ? "#bdbaba" : "black"};
    padding: 14px 0;
    border: none;
    color: white;
    font-size: 14px;
    cursor: pointer;
    margin-top: 40px;
`;
export const Select_Wrap = styled.div`
    display: flex;
    flex-direction: column;
    button {
        position: relative;
        border: none;
        border-bottom: 3px solid black;
        font-size: 16px;
        line-height: 20px;
        padding: 0 10px 16px;
        color: #828282;
        cursor: pointer;
        background-color: transparent;
        text-align: left;
        ::after {
            content: "";
            position: absolute;
            top: 0;
            right: 10px;
            width: 24px;
            height: 24px;
            background: url(/arrow.svg) no-repeat;
            background-size: contain;
        }
    }
`;
export const Point_List = styled.ul<{ select: boolean }>`
    height: ${(props) => (props.select ? "fit-content" : 0)};
    display: flex;
    flex-direction: column;
    margin-top: 17px;
    border-radius: 18px;
    border: ${(props) => (props.select ? "1px solid #c4c4c4" : "none")};
    overflow: hidden;
    li {
        cursor: pointer;
        list-style: none;
        padding: 16px 18px;
        font-size: 16px;
        font-weight: 700;
        border-bottom: 1px solid #e0e0e0;
        color: #e0e0e0;
    }
    li:last-of-type {
        border-bottom: none;
    }
    li:hover {
        background-color: #555;
        color: white;
    }
    li.active {
        color: black;
    }
`;
