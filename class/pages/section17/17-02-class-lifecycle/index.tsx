import { Component } from "react";
import type { ReactNode } from "react";
import Router from "next/router";

export default class ClassCounterPage extends Component {
  state = {
    count: 0, // 초기값
  };

  componentDidMount(): void {
    console.log("그려지고 나서 실행");
  }

  componentDidUpdate(): void {
    console.log("변경되고 나서 실행");
  }

  componentWillUnmount(): void {
    console.log("사라지기 전에 실행");
    // 예) 채팅방 나가기 API
  }

  CountUp = (): void => {
    this.setState({
      count: 1,
    });
  };

  Move = (): void => {
    void Router.push("/");
  };

  render(): ReactNode {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.CountUp}>카운트 올리기!!</button>
        <button onClick={this.Move}>나가기</button>
      </>
    );
  }
}
