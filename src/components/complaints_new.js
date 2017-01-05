import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createComplaint } from '../actions/index';

const style = {
  padding: 3,
  margin: 20,
};

const buttonStyle = {
  margin: 12,
};

//The branches in the bank
const branches = [
  <MenuItem key={1} value={1} primaryText="Limbe" />,
  <MenuItem key={2} value={2} primaryText="Lilongwe" />,
  <MenuItem key={3} value={3} primaryText="Malangalanga" />,
  <MenuItem key={4} value={4} primaryText="Mzuzu" />,
  <MenuItem key={5} value={5} primaryText="Zomba" />,
  <MenuItem key={6} value={6} primaryText="Mulanje" />,
  <MenuItem key={7} value={7} primaryText="Salima" />,
  <MenuItem key={8} value={8} primaryText="Karonga" />,
  <MenuItem key={9} value={9} primaryText="Blantyre Market" />,
  <MenuItem key={10} value={10} primaryText="Mmitundu" />,
];



class ComplaintsNew extends Component {
        
    constructor(props) {
        super(props);

        this.state = {
            controlledDate: null,
            value: null
        };

    }

    handleStatusChange = (event, index, value) => this.setState({value});

    handleBranchChange = (event, index, value) => this.setState({value});

    handleDateChange = (event, date) => {
        this.setState({
        controlledDate: date,
        });
    };

    render() {

        const { fields: {name, phone, email, branch, dateLogged, status, description, resolverComments, verifierComments}, handleSubmit } = this.props;

        return (
            <div>
                <h4 className="text-xs-center">Enter complaint</h4>
                <form className="form-horizontal" onSubmit={handleSubmit(this.props.createComplaint)}>
                    <div className="form-group">
                        <label htmlFor="name" className="col-sm-2 control-label">Customer's Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" defaultValue={complaint.name} {...name}  />
                        </div>
                        {complaint.name}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="col-sm-2 control-label">Phone(s)</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="phone" defaultValue={complaint.phone} {...phone} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="email" defaultValue={complaint.email} {...email} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="branch" className="col-sm-2 control-label">Branch</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="branch" defaultValue={complaint.branch} {...branch} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateLogging" className="col-sm-2 control-label">Logging Date</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="dateLogging" defaultValue={complaint.dateLogged} {...dateLogged}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="status" className="col-sm-2 control-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" defaultValue={complaint.status} {...status} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="col-sm-2 control-label">Description</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="description" defaultValue={complaint.description} {...description} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="resolverComments" className="col-sm-2 control-label">Comments By Resolver</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="resolverComments" defaultValue={complaint.resolverComments} {...resolverComments} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="verifierComments" className="col-sm-2 control-label">Comments By Verifier</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="verifierComments" defaultValue={complaint.verifierComments} {...verifierComments} />
                        </div>
                    </div>

                    
                    <button type="submit" className="btn btn-primary">Save</button>
                    <Link to="/">
                        <button className="btn btn-danger" >Cancel</button>
                    </Link>
                </form>
                
            </div>
        );
    }
}


export default reduxForm({
    form: 'ComplaintsNewForm',
    fields: ['name', 'phone', 'email', 'branch', 'dateLogging', 'status', 'description', 
    'resolverComments', 'verifierComments']
}, 
null, { createComplaint })(ComplaintsNew);

