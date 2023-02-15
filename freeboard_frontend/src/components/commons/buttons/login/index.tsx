import styled from "@emotion/styled";
export const Login_btn = styled.button`
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin-top: 15px;
    line-height: 60px;
    color: white;
    background-color: #b59f2b96;
`;

export default function ButtonLogin(props: any) {
    return <Login_btn type="submit">{props.title}</Login_btn>;
}
