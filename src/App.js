import React from 'react';
import uuid from "uuid/v4";
import axios from "axios";
import Header from "./Header";
import WriteTask from "./WriteTask";
import Task from "./Task";
import CompletedTasks from "./CompletedTasks";
import './App.css';


class App extends React.Component {
  state = {
    tasks: [
      // { dateAdded: "2019-11-02", taskText: "Feed the cat", completed: false, taskId: uuid() },
      // { dateAdded: "2019-11-14", taskText: "Do laundry", completed: true, taskId: uuid() },
      // { dateAdded: "2019-12-01", taskText: "File notes from lecture", completed: false, taskId: uuid() },
      // { dateAdded: "2019-11-18", taskText: "Put clothes away", completed: false, taskId: uuid() },
      // { dateAdded: "2019-11-03", taskText: "Buy cat food", completed: true, taskId: uuid() },
      // { dateAdded: "2019-10-01", taskText: "Write up notes from lecture", completed: true, taskId: uuid() },
      // { dateAdded: "2019-11-19", taskText: "Buy chocolates for movie night", completed: true, taskId: uuid() },
    ]
  }

  componentDidMount() {
    axios.get("https://mylpzxt9ef.execute-api.eu-west-1.amazonaws.com/dev/todos")
      .then((response) => {
        this.setState({
          tasks: response.data.todos
        })
      })
      .catch((err) => {
        console.log("could not fetch tasks", err)
      })
  }

    //DELETE
  //function 'deleteTask' removes any array where the ID number does not match the ID ('n') passed through
  deleteTask = n => {
    const filteredTasks = this.state.tasks.filter(x => {
      return x.taskId !== n;
    })

    this.setState({
      tasks: filteredTasks
    })
  }

      //POST
  //function 'addNewTask' adds a new task and date to the existing task array. 
  addNewTask = (xtaskText, yDateAdded) => {
    const newTask = {
      taskText: xtaskText,
      dateAdded: yDateAdded,
      taskComplete: false,
      //taskId: uuid()
    };

    const newTaskArray = this.state.tasks.slice();
    newTaskArray.push(newTask);

    this.setState({
      tasks: newTaskArray
    });
  };


  //PUT
  //function 'taskComplete' updates the task array thats in the state by setting the completed property to "true" for any task with the ID matching xID 
  taskComplete = (xID) => {
    const updatedCompletedTasks = this.state.tasks.map(n => {
      if (n.ID === xID) {
        return {
          taskText: n.taskText,
          dateAdded: n.dateAdded,
          taskComplete: true,
          taskId: n.ID
        }
      }
      return n;
    });

    this.setState({
      tasks: updatedCompletedTasks
    });
  };

  taskNotComplete = (yID) => {
    const updatedNonCompletedTasks = this.state.tasks.map(n => {
      if (n.userId === yID) {
        return {
          taskText: n.taskText,
          dateAdded: n.dateAdded,
          taskComplete: false,
          taskId: n.taskId
        }
      }
      return n;
    })

    this.setState({
      tasks: updatedNonCompletedTasks
    });
  };



  render() {

     //changed true to 1 and false to 0 here...
    const completedTasks = this.state.tasks.filter(n => {
      return n.taskComplete === 1;
    }).sort((a, b) => a.dateAdded.localeCompare(b.dateAdded));


    const toDoTasks = this.state.tasks.filter(n => {
      return n.taskComplete === 0;
    }).sort((a, b) => a.dateAdded.localeCompare(b.dateAdded));


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


              <div className="row">
                <div className="col-3 taskHeader">
                  <p> Date Added </p>
                </div>

                <div className="col-5 taskHeader">
                  <p>My Task </p>
                </div>
              </div>

              {toDoTasks.map(n => {
                return (
                  <Task
                    dateAdded={n.dateAdded}
                    taskText={n.taskText}
                    deleteTaskFunc={this.deleteTask}
                    taskCompleteFunc={this.taskComplete}
                    key={n.taskId}
                    taskId={n.taskId}
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

              <div className="row">
                <div className="col-3 taskHeader">
                  <p> Date Added </p>
                </div>

                <div className="col-5 taskHeader">
                  <p>My Task </p>
                </div>
              </div>

              {completedTasks.map(n => {
                return (
                  <CompletedTasks
                    dateAdded={n.dateAdded}
                    taskText={n.taskText}
                    deleteTaskFunc={this.deleteTask}
                    taskNotCompleteFunc={this.taskNotComplete}
                    key={n.taskId}
                    taskId={n.taskId}
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
