import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 1200px;
    margin: 20px auto;
    height: 500px;
    overflow: auto;
    ul {
        display: flex;
        flex-direction: column;
        gap: 10px 0;
        width: 100%;
    }
    ::-webkit-scrollbar {
        display: none;
    }
`;
