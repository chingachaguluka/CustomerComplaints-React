import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { fetchComplaint } from '../actions/index';




class ComplaintsUpdate extends Component {
    componentWillMount() {
        this.props.fetchComplaint(this.props.params.id);
    }

    handleSubmit() {
        console.log("Hooray!!!");
    }

    render() {
        const { complaint } = this.props;

        if(!complaint) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h4 className="text-xs-center">Enter complaint</h4>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="col-sm-2 control-label">Customer's Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" value={complaint.name}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="col-sm-2 control-label">Phone(s)</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="phone" value={complaint.phone} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="email" value={complaint.email} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="branch" className="col-sm-2 control-label">Branch</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="branch" value={complaint.branch} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateLogging" className="col-sm-2 control-label">Logging Date</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="dateLogging" value={complaint.dateLogging} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="status" className="col-sm-2 control-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" value={complaint.status} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="col-sm-2 control-label">Description</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="description" value={complaint.description} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="resolverComments" className="col-sm-2 control-label">Comments By Resolver</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="resolverComments" value={complaint.resolverComments} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="verifierComments" className="col-sm-2 control-label">Comments By Verifier</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="verifierComments" value={complaint.verifierComments} />
                        </div>
                    </div>

                    
                    <button className="btn btn-primary">Save</button>
                    <Link to="/">
                        <button className="btn btn-danger" >Cancel</button>
                    </Link>
                    
                </form>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        complaint: state.complaints.complaint
    };
}


ComplaintsUpdate = reduxForm({
  form: 'ComplaintsUpdateForm',
  fields: ['customerName', 'phone', 'email', 'branch', 'status',  
    'dateLogging', 'description', 'resolverComments', 'verifierComments' ]
}, mapStateToProps, { fetchComplaint })(ComplaintsUpdate);

export default ComplaintsUpdate;

