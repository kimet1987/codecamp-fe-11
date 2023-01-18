import styled from "@emotion/styled";

export const RegisterBtn = styled.button`
    background-color: ${(props) =>
        props.isActive === true ? "tomato" : "hotpink"};
`;
