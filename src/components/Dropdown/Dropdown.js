import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevStatrye => ({ visible: !prevStatrye.visible }));
  };

  // show = () => {
  //   this.setState({ visible: true });
  // };

  // hide = () => {
  //   this.setState({ visible: false });
  // };

  render() {
    return (
      <div className="Dropdown ">
        <button type="button" className="Dropdown__toggle" onClick={this.toggle}>
          {this.state.visible ? 'скрыть' : 'показать'}
        </button>

        {/* <button type="button" className="Dropdown__toggle" onClick={this.show}>
          Показать
        </button>
        <button type="button" className="Dropdown__toggle" onClick={this.hide}>
          Скрыть
        </button> */}

        {this.state.visible && <div className="Dropdown__menu">Віпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
