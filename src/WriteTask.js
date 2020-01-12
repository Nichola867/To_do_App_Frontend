import React from "react";


class WriteTask extends React.Component {

    state = {
        task: "",
        dateAdded:
        //set date to today's date:
        new Date().toISOString().substr(0,10)
        

        //format date as eg 6 Jan 2020:
       /* new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit"
        }).format(new Date()) */
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
        this.setState({
            task: ""
        })
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
                    <div className="col-5 paddingSmall">
                        <textarea className="form-control myNextTask"
                            onChange={this.updateTask}
                            value={this.state.task}
                            placeholder="Write your task here..."
                            id="exampleFormControlTextarea1"
                            rows="2" >
                        </textarea>
                    </div>


                    <div className="col-4  col-md-2 paddingSmall">
                        <input
                            type="date"
                            className="form-control dateBox"
                            value={this.state.dateAdded}
                            onChange={this.updateDate}
                            
                        />
                    </div>

                    <div className="col-2 paddingSmall">
                        {this.state.task !== "" ?
                            <button
                                className="btn btn-sm enabledButton"
                                onClick={this.writeTask} >
                                <i className="fas fa-check-circle medium"></i>
                            </button> :

                            <button
                                disabled className="btn btn-sm disabledButton">
                                <i className="fas fa-check-circle medium"></i>
                            </button>
                        }
                    </div>

                </div>
            </div>


        )
    }
}



export default WriteTask;



