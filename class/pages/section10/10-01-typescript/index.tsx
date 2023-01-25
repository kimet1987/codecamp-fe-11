export default function TypescriptPage() {
    // 타입 추론 처음 대입된 타입으로 그 변수의 타입을 정함
    let aaa = "안녕하세요";
    aaa = "3";

    // 타입 명시
    let bbb: string = "반갑습니다";
    // bbb = 10

    // 타입명시가 필요한 상황
    let ccc: number | string = 1000;
    ccc = "1000원";

    // 숫자 타입
    let ddd: number = 10;
    // ddd = "철수"

    // 불린 타입
    let eee: boolean = true;
    eee = false;
    // eee = "false" => 빈문자열이 아니라서 True 를 반환 함.

    // 배열 타입
    let fff: number[] = [1, 2, 3, 4, 5]; // => number 만 들어갈수 있는 배열
    let ggg: string[] = ["철수", "영희", "맹구"]; // => string 만 들어갈수 있는 배열
    let hhh: (string | number)[] = ["철수", "영희", "맹구", 10]; // => 타입을 추론해서 어떤 타입인지 알아보기

    // 객체 타입
    interface IProfile {
        name: string;
        age: number | string;
        school: string;
        hobby?: string;
    }

    const profile = {
        name: "철수",
        age: 8,
        school: "다람쥐초",
    };

    profile.name = "훈이"; // => 타입추론으로 이것만 가능
    // profile.age = "10살"
    // profile.hobby = "수영"

    // 함수 타입
    function add(num1: number, num2: number, unit: string): string {
        // 입력 타입
        return num1 + num2 + unit; // 리턴 타입
    }
    const result = add(1000, 2000, "원"); // 결과의 리턴 타입도 예측 가능

    const add2 = (num1: number, num2: number, unit: string): string => {
        // 입력 타입
        return num1 + num2 + unit; // 리턴 타입
    };

    // any 타입
    let qqq: any = "철수"; // => 자바스크립트 처럼 아무 타입이나 가능함
    qqq = 123;
    qqq = true;
    qqq = "철수";

    return;
}
