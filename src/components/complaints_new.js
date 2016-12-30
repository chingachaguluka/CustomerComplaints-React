import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import { Link } from 'react-router';

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
        injectTapEventPlugin();
    }

    handleStatusChange = (event, index, value) => this.setState({value});

    handleBranchChange = (event, index, value) => this.setState({value});

    handleDateChange = (event, date) => {
        this.setState({
        controlledDate: date,
        });
    };

    render() {

        return (
            <div>
                <h4 className="text-xs-center">Enter complaint</h4>
                <form >
                    <Paper style={style} zDepth={1}>
                        <TextField
                            hintText="Enter customer's name"
                            floatingLabelText="Customer's Name"/><br/>
                        <TextField
                            hintText="Enter phone number(s)"
                            floatingLabelText="Phone(s)"/><br/>
                        <TextField
                            hintText="Enter email address"
                            floatingLabelText="Email address"/><br/>
                        <SelectField
                            value={this.state.value}
                            onChange={this.handleBranchChange}
                            floatingLabelText="Branch"
                            >
                            {branches}
                        </SelectField><br/>
                        <DatePicker
                            floatingLabelText="Logging Date"
                            hintText="Select date"
                            value={this.state.controlledDate}
                            onChange={this.handleDateChange}
                        /><br/>
                        <SelectField
                            floatingLabelText="Status"
                            value={this.state.value}
                            onChange={this.handleStatusChange}
                            >
                            <MenuItem value={1} primaryText="Unattended" />
                            <MenuItem value={2} primaryText="Customer Contacted" />
                            <MenuItem value={3} primaryText="Resolved" />
                            <MenuItem value={4} primaryText="Closed" />
                        </SelectField><br/>
                        <TextField
                            floatingLabelText="Description"
                            hintText="Enter the complaint details..."
                            multiLine={true}
                            rows={4}
                            rowsMax={6}/><br />
                        <TextField
                            floatingLabelText="Contacting Customer"
                            hintText="Enter the feedback after contacting the customer..."
                            multiLine={true}
                            rows={4}
                            rowsMax={6}/><br />
                        <TextField
                            floatingLabelText="Comments by Verifier"
                            hintText="Enter the comments after verifying with customer..."
                            multiLine={true}
                            rows={4}
                            rowsMax={6}/><br />
                        <RaisedButton label="Save" primary={true} style={buttonStyle} />
                        <Link to="/">
                            <RaisedButton label="Cancel" secondary={true} style={buttonStyle} />
                        </Link>
                    </Paper>
                </form>
            </div>
        );
    }
}

export default ComplaintsNew;