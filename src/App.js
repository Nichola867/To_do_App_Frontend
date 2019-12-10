import React from 'react';
import Header from "./Header";
import WriteTask from "./WriteTask";
import Task from "./Task";
import CompletedTasks from "./CompletedTasks";
import './App.css';


class App extends React.Component {
  state = {
    tasks: [
      { dateAdded: "03/11/19", task: "Feed the cat", completed: false, ID: 1 },
      { dateAdded: "14/11/19", task: "Do laundry", completed: true, ID: 2 },
      { dateAdded: "01/12/19", task: "File notes from lecture", completed: false, ID: 3 },
      { dateAdded: "18/11/19", task: "Put clothes away", completed: false, ID: 4 },
      { dateAdded: "03/11/19", task: "Buy cat food", completed: true, ID: 5 },
      { dateAdded: "01/10/19", task: "Write up notes from lecture", completed: true, ID: 6 },
      { dateAdded: "19/11/19", task: "Buy chocolates for movie night", completed: true, ID: 7 },
    ]
  }

  render() {
    const completedTasks = this.state.tasks.filter(n => {
      return n.completed === true;
    });

    const toDoTasks = this.state.tasks.filter(n => {
      return n.completed === false;
    });

    return (
      <div className="App" >
        <Header />
        <WriteTask />
            
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">

              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center TaskHeaders">
                  <i className="fas fa-list-ul" /> <span> Tasks to do </span>
                  <span className="badge badge-light badge-pill"> {toDoTasks.length} </span>
                </li>
              </ul>

              {toDoTasks.map(n => {
                return (
                  <Task
                    key={n.ID}
                    dateAdded={n.dateAdded}
                    task={n.task}
                  />
                )
              })}
            </div>

            <div className="col-12 col-lg-6">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center TaskHeaders">
                  <i className="fas fa-tasks" /> <span> Completed tasks </span>
                  <span className="badge badge-light badge-pill"> {completedTasks.length}</span>
                </li>
              </ul>

              {completedTasks.map(n => {
                return (
                  <CompletedTasks
                    key={n.ID}
                    dateAdded={n.dateAdded}
                    task={n.task}
                  />
                )
              })}
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default App;
