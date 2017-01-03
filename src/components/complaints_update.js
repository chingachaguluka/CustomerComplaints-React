import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';



class ComplaintsUpdate extends Component {
    handleSubmit() {
        console.log("Hooray!!!")
    }

    render() {

        return (
            <div>
                <h4 className="text-xs-center">Update complaint</h4>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor="firstname">Name</label>
                            <input type="text" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


/* export default reduxForm({
    form: 'ComplaintsUpdateForm',
    fields: ['name', 'phone', 'email', 'branch', 'dateLogging', 'status', 'description', 
    'resolverComments', 'verifierComments']
}, 
null, { updateComplaint })(ComplaintsUpdate);
*/

ComplaintsUpdate = reduxForm({
  form: 'ComplaintsUpdateForm',
  fields: ['firstname']
})(ComplaintsUpdate);

export default ComplaintsUpdate;

