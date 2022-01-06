import React from 'react';
import Controls from './Controls';
import './Counter.css';

class Counter extends React.Component {
  static defaultProps = { initialValue: 0 };

  state = {
    value: this.props.initialValue,
  };

  hendelIncrement = () => {
    this.setState(prestate => {
      return { value: prestate.value + 1 };
    });
  };

  hendelDescrement = () => {
    this.setState(prestate => {
      return { value: prestate.value - 1 };
    });
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <Controls increment={this.hendelIncrement} decrement={this.hendelDescrement} />

        {/* или:
        <div className="Counter__controls">
          <button type="button" onClick={this.hendelIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.hendelDescrement}>
            Уменьшить на 1
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
