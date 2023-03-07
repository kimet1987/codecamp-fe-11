import styled from "@emotion/styled";
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0 200px;
    background-color: #e0e0e0;
    h2 {
        font-size: 40px;
        font-weight: 700;
        color: burlywood;
    }
    em {
        color: #b59f2b;
        font-style: normal;
    }
`;
export const Btn_wrap = styled.div`
    display: flex;
    button {
        padding: 0 16px;
        border: none;
        font-size: 16px;
        line-height: 44px;
        font-weight: 700;
        background-color: transparent;
        cursor: pointer;
    }
    .join_btn {
        background-color: #746e6e;
        border-radius: 10px;
        color: #e0e0e0;
    }
`;
export const User_wrap = styled.div`
    position: relative;
`;
export const User_info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 24px;
    cursor: pointer;
    i {
        width: 24px;
        height: 24px;
        background: url(/more.svg) no-repeat;
        background-size: contain;
        text-indent: -9999px;
    }
    img {
        width: 48px;
        height: 48px;
        background: url(/profile.svg) no-repeat;
        background-size: contain;
    }
`;
export const Change_wrap = styled.div`
    z-index: 1;
    position: absolute;
    right: 0;
    top: 120%;
    border-radius: 20px;
    background-color: white;
    width: 258px;
    overflow: hidden;
`;
export const Info = styled.div`
    padding: 24px 26px;
    border-bottom: 1px solid #555;
    display: flex;
    align-items: center;
    gap: 0 12px;
    img {
        width: 48px;
        height: 48px;
        overflow: hidden;
        object-fit: contain;
    }
    dl {
        display: flex;
        flex-direction: column;
        gap: 4px 0;
    }
    dt {
        font-size: 16px;
        font-weight: 700;
    }
    dd {
        font-size: 12px;
        font-weight: 700;
    }
`;
export const CBtn_wrap = styled.div`
    display: flex;
    flex-direction: column;
    button {
        padding: 20px 30px 20px 72px;
        font-size: 14px;
        line-height: 24px;
        position: relative;
        color: #bdbdbd;
        background-color: transparent;
        border: none;
        text-align: left;
        cursor: pointer;
        ::after {
            content: "";
            width: 24px;
            height: 24px;
            position: absolute;
            top: 20px;
            left: 30px;
        }
    }
    .charge {
        border-bottom: 1px solid #e0e0e0;
        ::after {
            background: url(/saving_gray.svg) no-repeat;
            background-size: contain;
        }
    }
    .logout {
        ::after {
            background: url(/logout.svg) no-repeat;
            background-size: contain;
        }
    }
`;
