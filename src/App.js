import React from 'react';
import Header from "./Header";
import WriteTask from "./WriteTask";
import TaskList from "./TaskList";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WriteTask />
      <div className = "container">
       <TaskList dateAdded = "03/12/19" task = "Buy cat food" />
       <TaskList dateAdded = "01/12/19" task = "Write up notes from lecture" />
       <TaskList dateAdded = "14/11/19" task = "Do laundry" />
      </div>
    </div>
  );
}

export default App;
