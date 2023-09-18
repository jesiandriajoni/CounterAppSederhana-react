import React from "react";
import { createRoot } from "react-dom/client";

function CounterDisplay({ count }) {
  if (count == 0) {
    return <p>{count}</p>;
  }
  if (count % 5 === 0 && count % 7 === 0) {
    return <p>FizzBuzz</p>;
  }
  if (count % 5 === 0) {
    return <p>Fizz</p>;
  }
  if(count %  7 === 0) {
    return <p>Buzz</p>;
  }
  else{
    return <p>{count}</p>;
  }
}

function IncreaseButton({ increase }) {
  return (
    <div>
      <button onClick={increase}> + increase</button>
    </div>
  );
}

function ResetButton({ reset }) {
  return (
    <div>
      <button onClick={reset}>- reset</button>
    </div>
  );
}

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.onIncreaeEventHandeler = this.onIncreaeEventHandeler.bind(this);
    this.onResetEventHandeler = this.onResetEventHandeler.bind(this);
  }

  onIncreaeEventHandeler() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  }

  onResetEventHandeler() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <IncreaseButton increase={this.onIncreaeEventHandeler} />
        <CounterDisplay count={this.state.count} />
        <ResetButton reset={this.onResetEventHandeler} />
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<CounterApp />);
