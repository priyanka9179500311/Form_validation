import React from 'react';
import Table from './Table';
import './form.css';


class Form extends React.Component {
    //constructor
    constructor(props) {
        super(props);
        this.state = {
            fullname: "",
            email: "",
            password: "",
            mobile: "",
            message: "",
            
            
        }
    }

    
    handlesubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state));

    };
    


    handleallchange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

   


    //methods
    render(){
        return (
            <div>
                <Table />
                <form onSubmit={this.handlesubmit}>
                    <label>Fullname:</label><br />
                    <input type="text" name="fullname" value={this.state.fullname} onChange={(event)=>this.handleallchange(event)} required /><br />
                    <label>Email</label><br />
                    <input type="email" name="email" value={this.state.email} onChange={(event)=>this.handleallchange(event)} required /><br />
                    <label>Password</label><br />
                    <input type="password" name="password" value={this.state.password} onChange={(event)=>this.handleallchange(event)} required /><br />
                    <label>Mobile</label><br />
                    <input type="number" name="mobile" value={this.state.mobile} onChange={(event)=>this.handleallchange(event)} required /><br />
                    <label>Message</label><br />
                    <input type="text" name="message" value={this.state.message} onChange={(event)=>this.handleallchange(event)} required /><br />
                    <br />
                    <input type="submit" className="pqr" value="Save" />

                    <input type="button" className="xyz" value="Cancel" />

                </form>
            </div>
        );    
 
    }   
}


export default Form;