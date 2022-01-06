import React, { Component } from 'react';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
// import colorPickerOptions from './colorPickerOptions.json';
import TodoList from './components/TodoList/Todolist';
import initialTodos from './todos.json';
// import Form from './components/form';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    console.log(todoId);
    this.setState(prestate => ({
      todos: prestate.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    return (
      <>
        {/* <Form onSubmit={this.formSubmitHandler} /> */}

        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        <div>
          <p>Общее кол-во:{totalTodoCount}</p>
          <p>Кол-во выполненных:{completedTodoCount} </p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
