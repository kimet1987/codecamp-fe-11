import { Component } from "react";
import type { ReactNode } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0, // 초기값
  };

  CountUp = (): void => {
    this.setState({
      count: 1,
    });
  };

  render(): ReactNode {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.CountUp}>카운트 올리기!!</button>
      </>
    );
  }
}
