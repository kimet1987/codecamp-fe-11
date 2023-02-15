export default function Btn() {
    const onBtn = (num: any) => () => {
        console.log(num);
    };
    return (
        <>
            <button onClick={onBtn(123)}>버튼</button>
        </>
    );
}
