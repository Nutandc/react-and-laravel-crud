import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Student from "./Student";

class StudentList extends React.Component {
    delStudent = (id) => {
        if (window.confirm('do you want to delete')) {
            this.props.deleteStudent(id)
        }

    }

    render() {
        const {student} = this.props;
        return (
            <div className='card mb-2'>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="image">
                                {student.id}
                            </div>
                        </div>
                        <div className="col-md-2">
                            {student.name}
                        </div>
                        <div className="col-md-2">
                            {student.address}
                        </div>
                        <div className="col-md-2">
                            {student.phone}
                        </div>
                        <div className="col-md-2">
                            <Link to={`/edit/${student.id}`} className='btn btn-sm btn-primary'> Edit</Link>
                        </div>
                        <div className="col-md-2">
                            <button className='btn btn-sm btn-danger'
                                    onClick={() => this.delStudent(student.id)}> Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default StudentList;
