import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApi() {
    const [dog, setDog] = useState("");
    const onSync = async () => {
        const result = await axios.get(
            "https://dog.ceo/api/breeds/image/random"
        );
        setDog(result.data.message);
        console.log();
    };
    useEffect(() => {
        onSync();
    }, []);

    return (
        <>
            <img src={dog} />
            <button onClick={onSync}>클릭!!</button>
        </>
    );
}
