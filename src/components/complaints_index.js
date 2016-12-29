import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const style = {
  height: 66,
  margin: 10,
  padding: 3,
  textAlign: 'center'
};

const buttonStyle = {
    margin: 12
};

class ComplaintsIndex extends Component {

    render() {

        return (
            <div>
                <Link to="complaints/new">
                    <RaisedButton label="Enter Complaint" style={buttonStyle} primary={true} />
                </Link>
                <Paper style={style} zDepth={1} >
                    <h3>Chinga Chaguluka</h3><span className="text-xs-right">Case#: <strong>123456789</strong> </span>
                    Status: <strong>Active </strong>Logged: <strong>01-Dec-16 </strong>
                    Branch: <strong>Ntcheu </strong>
                </Paper>
                <Paper style={style} zDepth={1} >
                    <h3>Chinga Chaguluka</h3><span className="text-xs-right">Case#: <strong>123456789</strong> </span>
                    Status: <strong>Active </strong>Logged: <strong>01-Dec-16 </strong>
                    Branch: <strong>Ntcheu </strong>
                </Paper>
            </div>
        );
    }
}

export default ComplaintsIndex;