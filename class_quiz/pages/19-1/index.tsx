import { useEffect, useRef } from "react";

export default function FocusPage(): JSX.Element {
    const focusRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        focusRef.current?.focus();
    }, []);
    return (
        <>
            <input type="text" ref={focusRef} />
        </>
    );
}
