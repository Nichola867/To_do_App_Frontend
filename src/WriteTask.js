import React from "react";

class WriteTask extends React.Component {

    state = {
        task: "",
        dateAdded: "",
    };

    updateTask = e => {
        this.setState({
            task: e.target.value
        });
    };

    updateDate = e => {
        this.setState({
            dateAdded: e.target.value
        })
    }

    writeTask = () => {
        this.props.addNewTaskFunc(this.state.task, this.state.dateAdded)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group myTaskFont">
                            <label form="exampleFormControlTextarea1" >
                                My next task...
                                </label>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-6">
                        <textarea className="form-control myNextTask"
                            onChange={this.updateTask}
                            value={this.state.task}
                            id="exampleFormControlTextarea1"
                            rows="2" >
                        </textarea>
                    </div>


                    <div className="col-2">
                        <input
                            type="date"
                            className="form-control dateBox"
                            value={this.state.dateAdded}
                            onChange={this.updateDate} />
                    </div>

                    <div className="col-3">
                        <button className="btn btn-sm buttonAdd"
                            onClick={this.writeTask}>
                            Add task</button>
                    </div>
                </div>
            </div>


        )
    }
}



export default WriteTask;



