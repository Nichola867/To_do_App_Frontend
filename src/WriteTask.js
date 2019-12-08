import React from "react";

class WriteTask extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row box-margin">
                    <div className="col-9 ">

                        <div className="form-group myTaskFont">
                            <label for="exampleFormControlTextarea1">My next task...</label>
                            <textarea className="form-control myNextTaskBorder" id="exampleFormControlTextarea1 " rows="2"> </textarea>
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