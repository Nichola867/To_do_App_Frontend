import React from "react";

class Task extends React.Component {
    render() {
        return (

            <div className="row">
                <div className="col-3">
                    <p>{this.props.dateAdded}</p>
                </div>

                <div className="col-5">
                    <p>{this.props.task}</p>
                </div>

                <div className="col-2 buttonMargin">
                    <button type="button" class="btn buttonTaskDone btn-sm TaskButton">
                        <div> Task done!</div> <i class="far fa-check-circle"></i>
                    </button>
                </div>

                <div className="col-2 buttonMargin">
                    <button type="button" class="btn buttonDelete btn-sm TaskButton">
                        <div>Delete me!</div> <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            </div>            
        )
    }
}

export default Task;