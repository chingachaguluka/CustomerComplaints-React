import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchComplaints } from '../actions/index';

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

    componentWillMount(){
        this.props.fetchComplaints();
    }

    renderComplaints() {
        return this.props.complaints.map((complaint) => {  
            return (
                <li className="list-group-item" key={complaint.id}>
                    <Link to={`complaints/${complaint.id}`} >
                        <Paper style={style} zDepth={1} >
                            <h3>{complaint.name}</h3><span className="text-xs-right">Case#: <strong>{complaint.id}</strong> </span>
                            Status: <strong>{complaint.status} </strong>Logged: <strong>{complaint.dateLogged} </strong>
                            Branch: <strong>{complaint.branch} </strong>
                        </Paper>
                    </Link>
                </li>
            );

        });     
    }


    render() {
        //console.log(this.props.complaints);
        return (
            <div>
                <Link to="complaints/new">
                    <RaisedButton label="Enter Complaint" style={buttonStyle} primary={true} />
                </Link>
                <ul className="list-group">
                    {this.renderComplaints()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { complaints: state.complaints.all };
}

export default connect(mapStateToProps, { fetchComplaints })(ComplaintsIndex);