import React from "react";


class CompletedTasks extends React.Component {

    handleDelete = () => {
        this.props.deleteTaskFunc(this.props.ID);
    }

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
                    <button
                        type="button"
                        className="btn buttonNotDone btn-sm TaskButton">
                        <div> Not done!</div>
                        <i className="far fa-times-circle"></i>
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
        )
    }
}

export default CompletedTasks;