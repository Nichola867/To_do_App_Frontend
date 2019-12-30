import React from 'react';
import uuid from "uuid/v4";
import Header from "./Header";
import WriteTask from "./WriteTask";
import Task from "./Task";
import CompletedTasks from "./CompletedTasks";
import './App.css';


class App extends React.Component {
  state = {
    tasks: [
      { dateAdded: "03/11/19", task: "Feed the cat", completed: false, ID: uuid() },
      { dateAdded: "14/11/19", task: "Do laundry", completed: true, ID: uuid() },
      { dateAdded: "01/12/19", task: "File notes from lecture", completed: false, ID: uuid() },
      { dateAdded: "18/11/19", task: "Put clothes away", completed: false, ID: uuid() },
      { dateAdded: "03/11/19", task: "Buy cat food", completed: true, ID: uuid() },
      { dateAdded: "01/10/19", task: "Write up notes from lecture", completed: true, ID: uuid() },
      { dateAdded: "19/11/19", task: "Buy chocolates for movie night", completed: true, ID: uuid() },
    ]
  }

  //function 'deleteTask' removes any array where the ID number does not match the ID ('n') passed through
  deleteTask = n => {
    const filteredTasks = this.state.tasks.filter(x => {
      return x.ID !== n;
    })

    this.setState({
      tasks: filteredTasks
    })
  }

  //function 'addNewTask' adds a new task and date to the existing task array. 
  addNewTask = (xTask, yDateAdded) => {
    const newTask = {
      task: xTask,
      dateAdded: yDateAdded,
      completed: false,
      ID: uuid()
    };
    const newTaskArray = this.state.tasks.slice();
    newTaskArray.push(newTask);

    this.setState({
      tasks: newTaskArray
    });
  };

  //function 'taskComplete' updates the task array thats in the state by setting the completed property to "true" for any task with the ID matching xID 
  taskComplete = (xID) => {
    const updatedCompletedTasks = this.state.tasks.map(n => {
      if (n.ID === xID) {
        return {
          task:n.task,
          dateAdded:n.dateAdded,
          completed: true,
          ID: n.ID
        }
      }
      return n;
    });

    this.setState({
      tasks:updatedCompletedTasks
    });
  };

taskNotComplete = (yID) => {
  const updatedNonCompletedTasks = this.state.tasks.map (n => {
      if(n.ID === yID) {
        return {
          task:n.task,
          dateAdded:n.dateAdded,
          completed: false,
          ID:n.ID
        }
      }
      return n;
  })

  this.setState({
    tasks:updatedNonCompletedTasks
  });
};



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
        <WriteTask addNewTaskFunc={this.addNewTask} />

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
                    dateAdded={n.dateAdded}
                    task={n.task}
                    deleteTaskFunc={this.deleteTask}
                    taskCompleteFunc={this.taskComplete}
                    key={n.ID}
                    ID={n.ID}
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
                    dateAdded={n.dateAdded}
                    task={n.task}
                    deleteTaskFunc={this.deleteTask}
                    taskNotCompleteFunc={this.taskNotComplete}
                    key={n.ID}
                    ID={n.ID}
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
