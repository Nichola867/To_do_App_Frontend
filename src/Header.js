import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div class="container">

                <div className="row" >
                    < div className="col-12">
                        <img className = "headerImage" src="feathersCrop.jpg" alt=""/>
                        <h1> My to do list </h1>
                    </div>
                </div>

            </div>

        )
    }
}

export default Header;

