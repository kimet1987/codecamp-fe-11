export default function Input(props: any) {
    return (
        <>
            <div>
                <label>{props.title}</label>
                <input type={props.type} {...props.register} />
                <p style={{ color: props.isErr ? "tomato" : "" }}>
                    {props.errMsg}
                </p>
            </div>
        </>
    );
}
