import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import { fetchComplaint } from '../actions/index';

const buttonStyle = {
  margin: 12,
};

class ComplaintsShow extends Component {
    componentWillMount() {
        this.props.fetchComplaint(this.props.params.id);
    }

    render() {
        
        const { complaint } = this.props;

        if(!complaint) {
            return <div>Loading...</div>
        }


        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 class="panel-title">{complaint.name}<span class="text-right"> Complaint#: {complaint.id}</span></h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-4 text-right">
                            Phone(s):
                        </div>
                        <div className="col-md-8">
                            <strong>{complaint.phone}</strong> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-right">
                            Email:
                        </div>
                        <div className="col-md-8">
                            <strong>{complaint.email}</strong> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-right">
                            Branch:
                        </div>
                        <div className="col-md-8">
                            <strong>{complaint.branch}</strong> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-right">
                            Logged:
                        </div>
                        <div className="col-md-8">
                            <strong>{complaint.dateLogged}</strong> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-right">
                            Status:
                        </div>
                        <div className="col-md-8">
                            <strong>{complaint.status}</strong> 
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-md-4 text-right">
                            Description:
                        </div>
                        <div className="col-md-8">
                            <strong>{complaint.description}</strong> 
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-md-4 text-right">
                            Resolver's Comments:
                        </div>
                        <div className="col-md-8">
                            <strong>{complaint.resolverComments}</strong> 
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-md-4 text-right">
                            Verifier's Comments:
                        </div>
                        <div className="col-md-8">
                            <strong>{complaint.verifierComments}</strong> 
                        </div>
                    </div><br/>
                    <div class="row">
                        <div class="col-md-8 offset-md-4">
                            <RaisedButton label="Update" primary={true} style={buttonStyle} />
                            <Link to="/">
                                <RaisedButton label="Cancel" secondary={true} style={buttonStyle} />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        );
    }

}

function mapStateToProps(state) {
    return { complaint: state.complaints.complaint };
}

export default connect(mapStateToProps, { fetchComplaint })(ComplaintsShow);