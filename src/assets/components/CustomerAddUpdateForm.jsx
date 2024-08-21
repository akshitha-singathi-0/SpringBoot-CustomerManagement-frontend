import React from 'react';

const CustomerAddUpdateForm = (props) => {

    return (  
    <div class="form-class">
        <div id="signupbox" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div class="panel panel-info">
            <h5>{props.mode}</h5>

            <div class="panel-body" >
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="text" name="name" onChange={(e) => props.handleInputChange(e)} value={props.formObject.name} class="form-control" id="exampleFormControlInput1" placeholder="John Smith"></input>
            <label for="exampleFormControlInput2" class="form-label">Email</label>
            <input type="email" name="email" onChange={(e) => props.handleInputChange(e)} value={props.formObject.email} class="form-control" id="exampleFormControlInput2" placeholder="name@example.com"></input>
            <label for="exampleFormControlInput3" class="form-label">Pass</label>
            <input type="text" name="password" onChange={(e) => props.handleInputChange(e)} value={props.formObject.password} class="form-control" id="exampleFormControlInput3" placeholder="********"></input>
            <button type="button" class="btn btn btn-danger btn-xs" onClick={props.onDeleteClick}>Delete</button>
            <button type="button" class="btn btn btn-primary btn-xs" onClick={props.onSaveClick}>Save</button>
            <button type="button" class="btn btn-light btn-xs" onClick={props.onCancelClick}>Cancel</button>
            </div>
        </div>
    </div>
  </div>
    );
}

export default CustomerAddUpdateForm;