import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="/home">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" wfd-id="660">
                    <span className="navbar-toggler-icon" wfd-id="472"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01" wfd-id="462">
                    <ul className="navbar-nav mr-auto" wfd-id="464">
                        <li className="nav-item " wfd-id="470">
                            <Link className="nav-link" to="/">Home
                                <span className="sr-only" wfd-id="471">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item" wfd-id="469">
                            <Link className="nav-link" to="/student">Student</Link>
                        </li>
                        <li className="nav-item" wfd-id="468">
                            <Link className="nav-link" to="/addStudent">Add Student</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;
