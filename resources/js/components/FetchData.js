import React from "react";

class FetchData extends React.Component {

    fetchData = async () => {
        const res = await axios.get('student');
        if (res.data.status === 200) {
            this.setState({students: res.data.students})
            this.setState({loading: false})
        }
    }
}
