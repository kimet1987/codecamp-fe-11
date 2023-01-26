import React, { useState } from "react";
import { Button, Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [address, setAddress] = useState("");
    const [open, setOpen] = useState(false);

    const HandlerModal = () => {
        setIsModalOpen((prev) => !prev);
        setOpen((prev) => !prev);
    };
    const handleComplete = (data: any) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== ""
                        ? `, ${data.buildingName}`
                        : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        setIsModalOpen((prev) => !prev);
        console.log(fullAddress);
        setAddress(fullAddress);
        setOpen((prev) => !prev);
    };

    return (
        <>
            <Button type="primary" onClick={HandlerModal}>
                주소
            </Button>
            <span>{address}</span>
            {open && (
                <Modal
                    open={isModalOpen}
                    onOk={HandlerModal}
                    onCancel={HandlerModal}
                >
                    <DaumPostcode onComplete={handleComplete} />
                </Modal>
            )}
        </>
    );
};
export default App;
