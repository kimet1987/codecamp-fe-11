export default function MapElPage(): JSX.Element {
  // 1. 기본 방법
  // ["철수", "영희", "훈이"].forEach((el, index) => {
  // 	console.log("el: ", el)
  // 	console.log("index: ", index)
  // })

  // // 2. 매개변수 변경
  // ["철수", "영희", "훈이"].forEach((aaa, ccc) => {
  // 	console.log("el: ", aaa)
  // 	console.log("index: ", ccc)
  // })

  // // 3. 함수 선언식 방법
  // ["철수", "영희", "훈이"].forEach((function(aaa, ccc){
  // 	console.log("el: ", aaa)
  // 	console.log("index: ", ccc)
  // })

  // 3. el과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("el: ", index);
    console.log("index: ", el);
  });

  return <></>;
}
