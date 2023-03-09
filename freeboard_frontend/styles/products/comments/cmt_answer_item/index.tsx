import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    gap: 0 20px;
    align-items: center;
    padding: 20px 0 20px 56px;
    i {
        width: 24px;
        height: 24px;
        background: url(/right.svg) no-repeat;
        background-size: contain;
    }
`;
export const Answer_wrap = styled.div`
    display: flex;
    gap: 0 16px;
    align-items: center;
    img {
        width: 40px;
        height: 40px;
        object-fit: contain;
        overflow: hidden;
    }
    dl {
        display: flex;
        flex-direction: column;
        gap: 4px;
        dt {
            font-size: 16px;
            line-height: 24px;
            font-weight: 500;
        }
        dd {
            font-size: 16px;
            color: #4f4f4f;
        }
    }
`;
