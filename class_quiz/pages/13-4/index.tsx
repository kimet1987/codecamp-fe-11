import React, { MouseEvent, useState } from "react";
import styled from "@emotion/styled";
const Wrapper = styled.div<IActive>`
    display: flex;
    gap: 10px;
`;
const Button = styled.button<IActive>`
    width: 25px;
    height: 25px;
    border: none;
    background: ${(props) =>
        props.active
            ? "url(star_full.png) no-repeat"
            : "url(star.png) no-repeat"};
    background-size: contain;
    text-indent: -9999px;
    cursor: pointer;
`;
interface IActive {
    active: any;
}

const StarPage = () => {
    const [active, setActive] = useState(false);
    const onStar = (e: MouseEvent<HTMLButtonElement>): void => {
        active ? setActive(false) : setActive(true);
    };
    return (
        <>
            <Wrapper>
                <Button onClick={onStar} active={active}>
                    1점
                </Button>
                <Button onClick={onStar} active={active}>
                    2점
                </Button>
                <Button onClick={onStar} active={active}>
                    3점
                </Button>
                <Button onClick={onStar} active={active}>
                    4점
                </Button>
                <Button onClick={onStar} active={active}>
                    5점
                </Button>
            </Wrapper>
        </>
    );
};

export default StarPage;
