import React from "react";

class WriteTask extends React.Component {

    state = {
        dateAdded: "10/12/19",
        task: "",
    };

    updateTask = event => {
        console.log(event.target.value)

         this.setState({
        task: event.target.value
       });
    };

    render() {
        return (
            <div className="container">
                <div className="row box-margin">
                    <div className="col-9 ">

                        <div className="form-group myTaskFont">
                            <label form="exampleFormControlTextarea1" >
                                My next task...
                                </label>
                       

                        <textarea className="form-control myNextTask"
                            onChange={this.updateTask}
                            value={this.state.task}
                            id="exampleFormControlTextarea1"
                            rows="2" >
                        </textarea>

                    </div>
                     </div>

                    <div className="col-3">
                        <button className="btn btn-primary addTask-button" type="submit">Add task</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default WriteTask;



