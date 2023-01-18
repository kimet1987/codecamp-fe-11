export default function MovedPresenter(data, onMove) {
    return (
        <>
            <div>작성자 : {data.data?.fetchProduct?.seller}</div>
            <div>제목 : {data.data?.fetchProduct?.name}</div>
            <div>내용 : {data.data?.fetchProduct?.detail}</div>
            <div>
                가격 :{" "}
                {data.data ? data.data.fetchProduct?.price : "loading..."}
            </div>
            <button onClick={data.onMove}>수정하러가기</button>
        </>
    );
}
