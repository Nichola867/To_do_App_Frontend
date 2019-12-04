import React from 'react';
import Header from "./Header";
import WriteTask from "./WriteTask";
import Task from "./Task";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WriteTask />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p> Tasks to do </p>

            <Task dateAdded="03/12/19" task="Feed the cat" />
            <Task dateAdded="01/12/19" task="File notes from lecture" />
            <Task dateAdded="14/11/19" task="Put clothes away" />
          </div>
        
          <div className="col-lg-6">
            <p> Completed tasks </p>

            <Task dateAdded="03/12/20" task="Buy cat food" />
            <Task dateAdded="01/12/20" task= "Write up notes from lecture" />
            <Task dateAdded="14/11/20" task="Do laundry" />
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default App;
