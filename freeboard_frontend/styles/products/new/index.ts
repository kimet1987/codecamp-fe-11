import styled from "@emotion/styled";

export const Wrapper = styled.form`
    margin: 50px auto 0;
    width: 1200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 40px 0;
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    padding: 60px 100px 100px;
    h2 {
        font-size: 36px;
        font-weight: 700;
        color: black;
        padding-bottom: 40px;
    }
`;
export const Desc = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    label {
        font-size: 20px;
        font-weight: 500;
        color: black;
    }
    .quill {
        border-radius: 8px;
        font-size: 20px;
        height: 280px;
        ::placeholder {
            color: #bdbdbd;
            font-size: 20px;
        }
    }
`;
export const Location_wrap = styled.div`
    display: flex;
    gap: 0 24px;
    width: 100%;
    h3 {
        font-size: 20px;
        font-weight: 500;
        color: black;
    }
`;
export const Location_map = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    width: calc(35% - 12px);
    div {
        width: 100%;
        height: 250px;
        background-color: beige;
    }
`;
export const Search_wrap = styled.div`
    width: calc(65% - 12px);
    display: flex;
    flex-direction: column;
    gap: 40px 0;
`;
export const Gps_wrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    div {
        width: 100%;
        height: 52px;
        background-color: aqua;
    }
`;
export const Address = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px 0;
    input {
        width: 100%;
        border: 1px solid #bdbdbd;
        border-radius: 8px;
        padding: 15px;
        font-size: 20px;
        font-weight: 500;
        color: #333;
        ::placeholder {
            color: #bdbdbd;
        }
    }
`;

export const Attach_pic = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    color: black;
    padding: 40px 0;
    h3 {
        font-size: 16px;
        font-weight: 500;
    }
`;
export const Img_wrap = styled.div`
    display: flex;
    gap: 0 24px;
`;
export const Main_set = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    color: black;
    h3 {
        font-size: 16px;
        font-weight: 500;
    }
`;
export const Radio_wrap = styled.div`
    display: flex;
    gap: 0 20px;
`;
export const Btn_wrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0 16px;
`;
