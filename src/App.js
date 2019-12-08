import React from 'react';
import Header from "./Header";
import WriteTask from "./WriteTask";
import Task from "./Task";
import CompletedTasks from "./CompletedTasks";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WriteTask />
      <div className="container">

        <div className="row">
          <div className="col-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center TaskHeaders">
                <i className="fas fa-list-ul" /> <span>Tasks to do </span>
                <span className="badge badge-primary badge-pill">3</span>
              </li>
            </ul>

            <Task dateAdded="03/12/19" task="Feed the cat" />
            <Task dateAdded="01/12/19" task="File notes from lecture" />
            <Task dateAdded="14/11/19" task="Put clothes away" />
          </div>



          <div className="col-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center TaskHeaders">
                <i className="fas fa-tasks" /> <span> Completed tasks </span>
                  <span className="badge badge-primary badge-pill">3</span>
              </li>
            </ul>

              <CompletedTasks dateCompleted="03/12/20" taskCompleted="Buy cat food" />
              <CompletedTasks dateCompleted="01/12/20" taskCompleted="Write up notes from lecture" />
              <CompletedTasks dateCompleted="14/11/20" taskCompleted="Do laundry" />
          </div>

          </div>
        </div>

      </div>
      );
    }
    
    export default App;
