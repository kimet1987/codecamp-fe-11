import React from "react";
import type { DatePickerProps } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useState } from "react";
import { DatePicker, Space } from "antd";

dayjs.extend(customParseFormat);

const dateFormat = "YYYY/MM/DD";

const App: React.FC = () => {
    const [day, setDay] = useState("");

    const onChange: DatePickerProps["onChange"] = (date, dateString) => {
        setDay(dateString);
    };

    return (
        <Space direction="vertical" size={12}>
            <DatePicker
                defaultValue={dayjs("2023/01/01", dateFormat)}
                format={dateFormat}
                onChange={onChange}
            />
            <span>{day}</span>
        </Space>
    );
};

export default App;
