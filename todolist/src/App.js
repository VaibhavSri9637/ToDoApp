import React, { Component } from 'react';
import Header from  './Components/Header';
import TaskBar from  './Components/TaskBar';
import TaskList from  './Components/TaskList';
class App extends Component {
  render() {
    return (
      <div style= {{marginLeft: "50px"}}>
        <Header />
        <TaskBar />
        <TaskList />
      </div>
    );
  }
}

export default App;
