import React, { Component } from 'react'
import uuid from 'uuid';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoItem from './TodoItem';



 class App extends Component {
  render() {
    return (
      <div>
      <div className="container">
    <div className="row">
      <TodoInput/>
       <TodoList/>
    </div>
</div>
      
       
      </div>
    )
  }
}

export default App;