import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Form2.css'

export class Form2 extends Component {
    
    constructor(props){
        super(props)

        this.state={
            studentName:'',
            mobileNumber:'',
            email:'',
            password:'',
            stream:'stream'

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

    handlePasswordChange=(event)=>{
        this.setState({
            password:event.target.value
        })     
    }

    handleStreamChange=(event)=>{
        this.setState({
            stream:event.target.value
        })     
    }
   
    handleSubmit=(event)=>{
        alert('Submitted')
    }

    render() {
        return (
            <div className="formStyle2">
                <form onSubmit={this.handleSubmit}>
                    <legend>Book multiple free demo classes</legend>
                    <div>
                       
                        <input className="form2-inputs" type="text"  placeholder="Enter Name" value={this.state.studentName} onChange={this.handleStudentNameChange}/>
                       
                    </div>
                    <div>
                        
                        <input  className="form2-inputs" type="email"  placeholder="Enter email address" value={this.state.email} onChange={this.handleEmailChange}/>
                       
                    </div>
                    <div>
                        
                        <input className="form2-inputs" type="password" placeholder="Enter Password" value={this.state.password} onChange={this.handlePasswordChange}/>
                       
                    </div>
                    <div>
                        
                        <input   className="form2-inputs" type="text" placeholder="Enter Mobile No." value={this.state.mobileNumber} onChange={this.handleMobileNumberChange}/>
                       
                    </div>
                    <div>
                       
                        <select className="form2-inputs" value={this.state.stream} onChange={this.handleStreamChange}>
                        <option value="stram">Stream</option>
                            <option value="CSE">CSE</option>
                            <option value="CE">CE</option>
                            <option value="ECE">ECE</option>
                            <option value="MECH">MECH</option>
                        </select>
                        
                    </div>
                    

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form2
