import styled from "@emotion/styled";
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 64px;
    background-color: #d4d4d4;
    ul {
        display: flex;
        gap: 0 81px;
    }
    li {
        list-style: none;
        position: relative;
        font-size: 18px;
        font-weight: 500;
        color: #757575;
    }
    li:hover {
        font-weight: 700;
        color: tomato;
    }
    .active {
        font-weight: 700;
        color: black;
    }
    li:last-child:after {
        content: none;
    }
    li:after {
        content: "";
        position: absolute;
        top: -2px;
        right: -40px;
        border-left: 1px solid white;
        height: 22px;
    }
`;
