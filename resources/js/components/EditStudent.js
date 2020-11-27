import React from 'react';
import axios from 'axios';

class EditStudent extends React.Component {
    state = {
        name: '',
        address: '',
        phone: '',
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    updateStudent = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/student/${id}`, this.state)
        console.log(res, res.status)
        if (res.status === 200) {
            this.props.history.push('/student');
        }
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        const res = await axios.get(`/student/${id}/edit `)
        this.setState({
            'name': res.data.student.name,
            'address': res.data.student.address,
            'phone': res.data.student.phone,
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.updateStudent}>
                    <div className="form-group">
                        Name:
                        <input type="text" name="name" className="form-control" value={this.state.name}
                               onChange={this.handleInput} placeholder='Enter Name'/>

                    </div>
                    <div className="form-group">
                        Address:
                        <input type="text" name="address" className="form-control" value={this.state.address}
                               onChange={this.handleInput} placeholder='Enter Address'/>

                    </div>
                    <div className="form-group">
                        Phone:
                        <input type="text" name="phone" className="form-control" value={this.state.phone}
                               onChange={this.handleInput} placeholder='Enter Phone'/>

                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-dark" value='Update'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditStudent
