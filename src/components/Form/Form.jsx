import { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = nanoid();
  tagInputId = nanoid();

  handlChenge = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  hendleLicenceChange = e => {
    this.setState({ licence: e.currentTarget.checked });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Имя
            <input
              type="text"
              name="name"
              value={this.state.name}
              id={this.nameInputId}
              onChange={this.handlChenge}
            />
          </label>
          <label htmlFor={this.tagInputId}>
            Прозвище
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              id={this.tagInputId}
              onChange={this.handlChenge}
            />
          </label>

          <p>Ваш уровень:</p>
          <label>
            <input
              type="radio"
              name="experience"
              value="junior"
              onChange={this.handlChenge}
              checked={this.state.experience === 'junior'}
            />
            Junior
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="middle"
              onChange={this.handlChenge}
              checked={this.state.experience === 'middle'}
            />
            Middle
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="senior"
              onChange={this.handlChenge}
              checked={this.state.experience === 'senior'}
            />
            Senior
          </label>

          <br />
          <label>
            <input
              type="checkbox"
              name="licence"
              checked={this.state.licence}
              onChange={this.hendleLicenceChange}
            />
            Готов работать за еду
          </label>

          <button type="submit" disabled={!this.state.licence}>
            Отправить
          </button>
        </form>
      </>
    );
  }
}

export default Form;
