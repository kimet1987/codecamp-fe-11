import { memo } from "react";

function ChildPage() {
    console.log("자식 컴포넌트 랜더링 함");
    return (
        <>
            <div>===========================</div>
            <h3>자식컴포넌트 입니다</h3>
            <div>===========================</div>
        </>
    );
}

export default memo(ChildPage);
