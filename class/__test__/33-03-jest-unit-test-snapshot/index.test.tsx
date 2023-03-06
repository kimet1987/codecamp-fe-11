// import JestUnitTestPage from "../../pages/section33/33-02-jest-unit-test";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";

// it("내가 원하는대로 그려지는지 테스트하기", () => {
//   render(<JestUnitTestPage />);

//   const myText = screen.getByText("철수는 13살 입니다.");
//   expect(myText).toBeInTheDocument();

//   const myText2 = screen.getByText("철수의 취미 입력하기:");
//   expect(myText2).toBeInTheDocument();

//   const myText3 = screen.getByText("철수랑 놀러가기");
//   expect(myText3).toBeInTheDocument();
// })

import JestUnitTestPage from "../../pages/section33/33-03-jest-unit-test-snapshot";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

it("기존 사진이랑 바뀐게 없는지 비교해 보자", () => {
  const result = render(<JestUnitTestPage />);

  expect(result.container).toMatchSnapshot();
});
