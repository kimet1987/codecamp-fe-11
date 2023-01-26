import React, { useState } from "react";
import { Button, Modal } from "antd";

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const HandlerModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    return (
        <>
            <Button type="primary" onClick={HandlerModal}>
                모달열기
            </Button>
            <Modal
                open={isModalOpen}
                onOk={HandlerModal}
                onCancel={HandlerModal}
            >
                <h1>게시글 등록</h1>
                <p>게시글이 등록 되었습니다</p>
            </Modal>
        </>
    );
};
export default App;
