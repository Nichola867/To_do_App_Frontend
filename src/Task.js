import React from "react";

class Task extends React.Component {

    handleDelete = () => {
        this.props.deleteTaskFunc(this.props.ID);
    }

    handleMove = () => {
        this.props.taskCompleteFunc(this.props.ID);
    }

    render() {
        return (

            <div className="container">
              



                <div className="row">

                    <div className="col-3">
                        <p>{this.props.dateAdded}</p>
                    </div>

                    <div className="col-5">
                        <p>{this.props.task}</p>
                    </div>

                    <div className="col-2 buttonMargin">
                        <button
                            type="button"
                            className="btn buttonTaskDone btn-sm TaskButton"
                            onClick={this.handleMove}>
                            <div> Task done!</div>
                            <i className="far fa-check-circle"></i>
                        </button>
                    </div>

                    <div className="col-2 buttonMargin">
                        <button
                            type="button"
                            className="btn buttonDelete btn-sm TaskButton"
                            onClick={this.handleDelete}>
                            <div>Delete me!</div>
                            <i className="far fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task;