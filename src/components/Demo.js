import React, { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      counter: 0,
      isCounterHidden: false
    };
  }

  toggleCounter = () => {
    this.setState({
      isCounterHidden: !this.state.isCounterHidden
    });
  };

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1
    }));
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate couter : " + this.state.counter);
    if (this.state.counter == 2) {
      return false;
    }

    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate couter : " + this.state.counter);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate counter: " + this.state.counter);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  renderBoxIncrement() {
    const { counter } = this.state;

    return (
      <div>
        <button onClick={this.incrementCounter}>Increment</button>
        {counter}
        {this.props.test}
      </div>
    );
  }

  render() {
    const { isCounterHidden } = this.state;
    console.log(this.state.counter);
    console.log("render");

    return (
      <div>
        <button onClick={this.toggleCounter}>
          {isCounterHidden ? "Show" : "Hidden"}
        </button>
        {isCounterHidden ? null : this.renderBoxIncrement()}
      </div>
    );
  }
}

export default Demo;
