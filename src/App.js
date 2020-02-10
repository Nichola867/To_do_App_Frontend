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
    tasks: []
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

  deleteTask = n => {
    axios.delete(`https://mylpzxt9ef.execute-api.eu-west-1.amazonaws.com/dev/todos/${n}`)
      .then((response) => {
        const filteredTasks = this.state.tasks.filter(x => {
          return x.taskId !== n;
        });

        this.setState({
          tasks: filteredTasks
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };





  //POST
  addNewTask = (xtaskText, yDateAdded) => {
    const newTask = {
      taskText: xtaskText,
      dateAdded: yDateAdded,
      taskComplete: false
      //taskId: uuid()
    };

    axios.post("https://mylpzxt9ef.execute-api.eu-west-1.amazonaws.com/dev/todos", newTask)
      .then((response) => {
        const newTask = response.data;
        const newTaskArray = this.state.tasks.slice();
        newTaskArray.push(newTask);

        this.setState({
          tasks: newTaskArray
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }






  //PUT - not updating database to taskCOmplete = true when task done button is clicked (does move)

  taskComplete = (xID) => {
    axios.put(`https://mylpzxt9ef.execute-api.eu-west-1.amazonaws.com/dev/todos/${xID}`, {
      taskComplete: true
    })
      .then(response => {
        const updatedCompletedTasks = this.state.tasks.map(n => {
          if (n.taskId === xID) {
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

      })
      .catch(err => {
        console.log(err);
      });
  };




  taskNotComplete = (yID) => {
    axios.put(`https://mylpzxt9ef.execute-api.eu-west-1.amazonaws.com/dev/todos/${yID}`, {
      taskComplete: false
    })
      .then(response => {
        const updatedNonCompletedTasks = this.state.tasks.map(n => {
          if (n.taskId === yID) {
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
      })
      .catch(err => {
        console.log(err)
      })
  }





  render() {


    const toDoTasks = this.state.tasks.filter(n => {
      return n.taskComplete === false;
    }).sort((a, b) => a.dateAdded.localeCompare(b.dateAdded));


    const completedTasks = this.state.tasks.filter(n => {
      return n.taskComplete === true;
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
