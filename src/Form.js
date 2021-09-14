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
            items:[]

        }
    }

    
    handlesubmit = (event) => {
        event.preventDefault();
        //console.log(JSON.stringify(this.state));
        
       // this.state.items.push(this.state);
        let items = [...this.state.items];
        items.push({
            fullname: this.state.fullname,
            email:this.state.email,
            password:this.state.password,
            mobile:this.state.mobile,
            message:this.state.message
        });
        this.setState({
            items,
            fullname: '',
            email:'',
            password:'', 
            mobile:'',
            message:''
        });
        console.log(items);

    };
    
   
  /* 
   handlesubmit=(event)=>{
    event.preventDefault();
    console.log(JSON.stringify(this.state)) ;
   }
   */


    handleallchange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    
    onCancel=()=>{
        this.setState({
            fullname: '',
            email:'',
            password:'', 
            mobile:'',
            message:''
        });
    }



    //methods
    render() {
        return (
            <div>
                <Table items={this.state.items}/>
                
                <form onSubmit={this.handlesubmit}>
                    <label>Fullname:</label><br />
                    <input type="text" name="fullname" value={this.state.fullname} onChange={(event) => this.handleallchange(event)} required /><br />
                    <label>Email</label><br />
                    <input type="email" name="email" value={this.state.email} onChange={(event) => this.handleallchange(event)} required /><br />
                    <label>Password</label><br />
                    <input type="password" name="password" value={this.state.password} onChange={(event) => this.handleallchange(event)} required /><br />
                    <label>Mobile</label><br />
                    <input type="number" name="mobile" value={this.state.mobile} onChange={(event) => this.handleallchange(event)} required /><br />
                    <label>Message</label><br />
                    <input type="text" name="message" value={this.state.message} onChange={(event) => this.handleallchange(event)} required /><br />
                    <br />
                    <input type="submit" className="pqr" value="Save" />

                    <input type="reset" onClick={this.onCancel} className="xyz" value="Cancel" />

                    <input type="submit" className="p" onclick={this.handlesubmit} value="List"/>

                </form>
            </div>
        );

    }
}


export default Form;