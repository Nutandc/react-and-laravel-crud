import React from 'react';
import axios from 'axios';


class AddStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phone: '',
            errors: {
                fullName: '',
                email: '',
                password: '',
            }
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    saveStudent = async (e) => {
        e.preventDefault();
        const validate = this.validateForm();
        if (validate) {
            const res = await axios.post('student', this.state)
            console.log(res, res.status)
            if (res.status === 200) {
                this.props.history.push('/student');
            }
        } else console.log('data not validated.')

    }
    validateForm = errors => {
        let valid = true;
        Object.values(errors).forEach(val => val.length > 0 && (valid = false));
        return valid;
    }


    render() {
        return (
            <div>
                <form onSubmit={this.saveStudent}>
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
                        <input type="submit" className="btn btn-dark" value='Create'/>

                    </div>
                </form>
            </div>
        )
    }
}

export default AddStudent
