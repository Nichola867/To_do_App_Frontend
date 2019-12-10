import React from "react";

class TasksCount extends React.Component {
    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-12 col-lg-6">

                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center TaskHeaders">
                                <i className="fas fa-list-ul" /> <span> Tasks to do </span>
                                <span className="badge badge-light badge-pill"> 7 </span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-lg-6">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center TaskHeaders">
                                <i className="fas fa-tasks" /> <span> Completed tasks </span>
                                <span className="badge badge-light badge-pill">8</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default TasksCount;