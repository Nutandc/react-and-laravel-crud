import React from 'react';
import StudentList from "./studentList";
import axios from "axios";

class Student extends React.Component {
    state = {
        students: [],
        loading: true
    }

    fetchData = async () => {
        const res = await axios.get('student');
        if (res.data.status === 200) {
            this.setState({students: res.data.students})
            this.setState({loading: false})
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    deleteStudent = async (id) => {
        const res = await axios.delete(`/student/${id}`, this.state)
        if (res.status === 200) {
            this.fetchData();
        }
    }

    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
        }
        return (
            <div>
                {this.state.students.map(student => (
                        < StudentList student={student} key={student.id} deleteStudent={this.deleteStudent}/>
                    )
                )}
            </div>
        )
    }
}

export default Student
