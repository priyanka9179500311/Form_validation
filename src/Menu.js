import React from 'react';
import {Link} from 'react-router-dom';

class Menu extends React.Component{
    render(){
        return(
            <div>
               <ul>
                   <li><Link to="/">List</Link></li>
                   <li><Link to="/save">Save</Link></li>
                </ul>     
            </div>
        )
    }
   
}

export default Menu;