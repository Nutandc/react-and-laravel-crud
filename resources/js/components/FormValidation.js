import React from 'react'

class FormValidation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                error: false,
            }, address: {
                value: '',
                error: false
            }, phone: {
                value: '',
                error: false
            }
        }
    }


}

export default FormValidation
