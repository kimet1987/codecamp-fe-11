interface IButtonProps {
  title: string;
  isActive: boolean;
}

export default function Buttom01(props: IButtonProps): JSX.Element {
  return (
    <button
      type="submit"
      style={{ backgroundColor: props.isActive ? "yellow" : "" }}
    >
      {props.title}
    </button>
  );
}
