import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {items: [{text:"Learn React", priority:5, dueDate: new Date() },
    {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
    {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }], text: '', priority:0, dueDate:moment()};
  }

  render() {
    const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
          {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
          {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TODO React App</h2>
        </div>
        <br/>
        <br/>
        <div>
          <form>
            <h2> New Todo </h2>
            <input id='text' onChange={this.handleChangeText} value={this.state.text} ></input>
            <input id='priority' onChange={this.handleChangePriority} value={this.state.priority} ></input>
            <input id='dueDate' onChange={this.handleChangeDate} value={this.state.dueDate} ></input>
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        <br/>
        </div>
        <TodoList todoList={todos}/>
      </div>
    );
  }

  handleChangeText(e) {
    this.setState({ text: e.target.value });
  }

  handleChangePriority(e) {
    this.setState({ priority: e.target.value });
  }

  handleChangeDate(e) {
    this.setState({ dueDate: date(e.target.value) });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority:this.state.priority,
      dueDate: this.state.dueDate
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
      priority: '',
      dueDate: ''
    }));
  }

}

export default App;
