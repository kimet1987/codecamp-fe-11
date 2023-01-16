export default function ProdPresenter(props) {
    return (
        <>
            <div>
                <label>판매자: </label>
                <input type="text" onChange={props.seller} />
            </div>
            <div>
                <label>상품명: </label>
                <input type="text" onChange={props.name} />
            </div>
            <div>
                <label>상품내용: </label>
                <input type="text" onChange={props.detail} />
            </div>
            <div>
                <label>가격: </label>
                <input type="text" onChange={props.price} />
            </div>
            <button onClick={props.register}>상품등록</button>
        </>
    );
}
