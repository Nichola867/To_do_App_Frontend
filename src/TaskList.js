import React from "react";

class TaskList extends React.Component {
    render() {
        return (
            <div className="row">

                <div className="col-lg-3">
                    <p>{this.props.dateAdded}</p>
                </div>

                <div className="col-lg-5">
                    <p>{this.props.task}</p>
                </div>

                <div className="col-lg-2">
                    <button type="button" class="btn btn-outline-success btn-sm button-width">
                        <div> Task done!</div> <i class="far fa-check-circle"></i>
                    </button>
                </div>

                <div className="col-lg-2">
                    <button type="button" class="btn btn-outline-danger btn-sm button-width">
                        <div>Delete me!</div> <i class="far fa-trash-alt"></i>
                    </button>
                </div>

            </div>
        )
    }
}

export default TaskList;