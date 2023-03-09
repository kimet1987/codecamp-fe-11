import styled from "@emotion/styled";
export const Wrapper = styled.div`
    position: fixed;
    z-index: 1;
    right: 118px;
    bottom: 200px;
    background: #ffffff;
    border: 1px solid #bdbdbd;
    padding: 20px;
    width: 198px;
    h4 {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 20px;
    }
    ul {
        display: flex;
        flex-direction: column;

        gap: 20px 0;
        .product {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            list-style: none;
            border: 1px solid #bdbdbd;
            padding: 10px;
            img {
                width: 60px;
                height: 60px;
                overflow: hidden;
                object-fit: contain;
            }
            > div {
                width: 60px;
                height: 60px;
                background-color: #e0e0e0;
                line-height: 60px;
                text-align: center;
            }
            button {
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 12px;
                line-height: 18px;
                font-weight: 500;
                padding-left: 22px;
                border: none;
                background-color: transparent;
                ::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 18px;
                    height: 18px;
                    background: url(/heart.svg) no-repeat;
                    background-size: contain;
                }
            }
        }
    }
`;
export const Info_wrap = styled.dl`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    width: 100%;
    dt {
        font-size: 12px;
        font-weight: 500;
    }
    .remark {
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 4px;
        color: #4f4f4f;
    }
    .price {
        font-size: 16px;
        font-weight: 700;
    }
`;
export const tags = styled.ul`
    width: 100%;
    margin-top: 8px;
    display: flex;
    gap: 0 4px;
    font-size: 10px;
    color: #bdbdbd;
`;
