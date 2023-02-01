import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ChangePage(): JSX.Element {
    const [isChanged, setIsChanged] = useState(false);
    const router = useRouter();

    useEffect(() => {
        alert("Rendered");
    }, []);

    useEffect(() => {
        alert("Changed!!");
    }, [isChanged]);

    useEffect(() => {
        return () => {
            alert("Bye!!");
        };
    }, [router.route]);

    const onMove = () => {
        router.push("/");
    };
    const onChange = () => {
        setIsChanged(true);
    };

    return (
        <>
            <button onClick={onChange}>변경</button>
            <button onClick={onMove}>이동</button>
        </>
    );
}
