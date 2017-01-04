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
                <form onSubmit={handleSubmit(this.props.createComplaint)}>
                    <Paper style={style} zDepth={1}>
                        <TextField
                            hintText="Enter customer's name"
                            fullWidth="true"
                            floatingLabelText="Customer's Name" {...name} /><br/>
                        <TextField
                            hintText="Enter phone number(s)"
                            fullWidth="true"
                            floatingLabelText="Phone(s)" {...phone} /><br/>
                        <TextField
                            hintText="Enter email address"
                            fullWidth="true"
                            floatingLabelText="Email address" {...email} /><br/>
                        <TextField
                            hintText="Enter branch"
                            fullWidth="true"
                            floatingLabelText="Branch" {...branch} /><br/>
                        <TextField
                            hintText="Enter date dd-mmm-yy"
                            fullWidth="true"
                            floatingLabelText="Logging Date" {...dateLogged} /><br/>
                        <TextField
                            hintText="Unattended | Customer Contacted | Resolved | Closed"
                            fullWidth="true"
                            floatingLabelText="Status" {...status} /><br/>
                        <TextField
                            floatingLabelText="Description"
                            fullWidth="true"
                            hintText="Enter the complaint details..."
                            multiLine={true}
                            rows={4}
                            rowsMax={6} {...description} /><br />
                        <TextField
                            floatingLabelText="Contacting Customer"
                            fullWidth="true"
                            hintText="Enter the feedback after contacting the customer..."
                            multiLine={true}
                            rows={4}
                            rowsMax={6} {...resolverComments} /><br />
                        <TextField
                            floatingLabelText="Comments by Verifier"
                            fullWidth="true"
                            hintText="Enter the comments after verifying with customer..."
                            multiLine={true}
                            rows={4}
                            rowsMax={6} {...verifierComments} /><br />
                        <RaisedButton label="Save" primary={true} style={buttonStyle} type="submit" />
                        <Link to="/">
                            <RaisedButton label="Cancel" secondary={true} style={buttonStyle} />
                        </Link>
                    </Paper>
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

