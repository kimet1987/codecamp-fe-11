export default function Button(props: any) {
    return (
        <button
            type="submit"
            style={{ backgroundColor: props.isActive ? "tomato" : "" }}
        >
            {props.title}
        </button>
    );
}
