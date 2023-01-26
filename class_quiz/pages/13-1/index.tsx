import React, { useState } from "react";
import { Rate } from "antd";
import styled from "@emotion/styled";
const StarPage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px 0;
`;

const desc = ["1점", "2점", "3점", "4점", "5점"];

const App: React.FC = () => {
    const [value, setValue] = useState(0);
    const onAlert = (num: number) => {
        setValue(num);
        alert(`${num}점`);
    };

    return (
        <StarPage>
            <Rate onChange={onAlert} value={value} />
            {value ? (
                <span className="ant-rate-text">{desc[value - 1]}</span>
            ) : (
                ""
            )}
        </StarPage>
    );
};

export default App;
