import axios from "axios";

export default function QuizRest() {
    // const onRest = () => {
    //     const result = axios.get("https://koreanjson.com/users");
    //     console.log(result);
    // };

    const onRest = async () => {
        const result = await axios.get("https://koreanjson.com/users");
        console.log(result);
    };

    return (
        <>
            <button onClick={onRest}>REST-API 요청하기</button>
        </>
    );
}
