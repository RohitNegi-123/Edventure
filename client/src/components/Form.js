import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Form.css'

export class Form extends Component {
    
    constructor(props){
        super(props)

        this.state={
            studentName:'',
            mobileNumber:'',
            email:''

        }

       

    }

    handleStudentNameChange=(event)=>{
        this.setState({
            studentName:event.target.value
        })     
    }

    handleMobileNumberChange=(event)=>{
        this.setState({
            mobileNumber:event.target.value
        })     
    }

    handleEmailChange=(event)=>{
        this.setState({
            email:event.target.value
        })     
    }
   
    handleSubmit=(event)=>{
        alert('Submitted')
    }

    render() {
        return (
            <div className="formStyle">
                <form onSubmit={this.handleSubmit}>
                    <legend>Book your free demo class</legend>
                    <div>
                        <label >Student Name: 
                        <input type="text" placeholder="Enter Name" value={this.state.studentName} onChange={this.handleStudentNameChange}/>
                        </label>
                    </div>
                    <div>
                        <label>Mobile Number: 
                        <input  type="text" placeholder="Enter Mobile No." value={this.state.mobileNumber} onChange={this.handleMobileNumberChange}/>
                        </label>
                    </div>
                    <div>
                        <label  >Email Address: 
                        <input  type="email" placeholder="Enter email address" value={this.state.email} onChange={this.handleEmailChange}/>
                        </label>
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form
