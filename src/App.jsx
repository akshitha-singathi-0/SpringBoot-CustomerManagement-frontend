import React, { useState, useEffect } from 'react';
import './App.css';

import CustomerList from "./assets/components/CustomerList";
import CustomerAddUpdateForm from "./assets/components/CustomerAddUpdateForm";
import axios from 'axios'

import * as lib from "./memdb.js";

function App() {
  const REST_URL = "http://localhost:8080/api/customers";
  var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
  };
  let blankCustomer = { "id": -1, "name": "", "email": "", "password": "" };

  const [customer, setCustomer] = useState([]);
  const [formObject, setFormObject] = useState(blankCustomer);
  let mode = (formObject.id >= 0) ? "Update" : "Add";

  function handleListClick(customer){
    if(formObject.id === customer.id)
      setFormObject(blankCustomer);
    else
      setFormObject(customer);
  }

  const handleInputChange = function (event) {
    console.log("in handleInputChange()");
    const name = event.target.name;
    const value = event.target.value;
    let newFormObject = { ...formObject }
    newFormObject[name] = value;
    setFormObject(newFormObject);
  }

  useEffect(() => {getCustomers()}, [formObject]);
  
  const getCustomers = async () => {
    try{
      const response = await axios.get(`${REST_URL}`, config);
      setCustomer(response.data);
    } catch(error){
      console.log("error fetching customers: ", error);
    }
    
  }

  function onCancelClick(){
    setFormObject(blankCustomer);
  }

  const onDeleteClick = async () => {
    if(formObject.id >=0){
      const response = await axios.delete(`${REST_URL}/${formObject.id}`, JSON.stringify(formObject), config);
    }
    setFormObject(blankCustomer);
  }

  const onSaveClick = async () => {
    console.log(formObject)
    if (mode === "Update"){
      const response = await axios.put(`${REST_URL}/${formObject.id}`, formObject, config);
      
    }
    if (mode === "Add") {
      const response = await axios.post(`${REST_URL}`, formObject, config);
           
    }
  }  

  return (
    <div class="App">       
      <CustomerList data={customer} formObject={formObject} handleListClick={handleListClick}></CustomerList>
      <CustomerAddUpdateForm formObject={formObject} mode={mode} handleInputChange={handleInputChange} onCancelClick={onCancelClick} onDeleteClick={onDeleteClick} onSaveClick={onSaveClick}></CustomerAddUpdateForm>
    </div>
  );
}

export default App;
