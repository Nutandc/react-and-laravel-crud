import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from './Nav';
import Student from "./Student";
import AddStudent from "./AddStudent";
import Home from "./Home";
import EditStudent from "./EditStudent";

function Example() {
    return (
        <Router>
            <>
                <Nav/>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <Switch>
                                <Route path="/student" exact component={Student}/>
                                <Route path="/home" exact component={Home}/>
                                <Route path="/addStudent" exact component={AddStudent}/>
                                <Route path="/edit/:id" exact component={EditStudent}/>
                            </Switch>

                        </div>
                    </div>
                </div>
            </>
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example/>, document.getElementById('example'));
}
