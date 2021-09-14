import React from 'react';
import Form from './Form';
import Table from './Table';

class List extends Form{
    constructor(){
        super();
        this.state = {
           
            items: []
        }
    }

    /*
    handlesubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state));
        
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
        
    }
    */
    
        
    render(){
        return(
            <div >
                <h1>List Page</h1>
                <Table items = { this.state.items} />
            </div>
        );
    }
    
   

}


export default List;