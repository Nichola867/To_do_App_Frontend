import React from "react";

class CompletedTasks extends React.Component {
    render() {
        return (

            <div className="row">
                <div className="col-3">
                    <p>{this.props.dateCompleted}</p>
                </div>

                <div className="col-5">
                    <p>{this.props.taskCompleted}</p>
                </div>

                <div className="col-2 buttonMargin">
                    <button type="button" class="btn buttonNotDone btn-sm TaskButton">
                        <div> Not done!</div> <i class="far fa-times-circle"></i>
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

export default CompletedTasks;