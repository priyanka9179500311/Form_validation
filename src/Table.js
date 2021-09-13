import React, { Component } from 'react';
import Form from './Form.js';

export default class Table extends Form {
  render(){
      return(
        <div id="Table">
          <table border="1px">

            <tr>
              <th>fullname</th>
              <th>email</th>
              <th>Password</th>
              <th>mobile</th>
              <th>message</th>
              <th colspan="2">Action</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th><button type="button">Update</button></th>
              <th><button type="button">Delete</button></th>
            </tr>

          </table>
        </div>
      );
    }

}


/*
import React, { Component } from 'react';

class Table extends React.Component {
  render() {
    const items = this.props.items;
    console.log("datas ",items);
    return (
      <div id="Table">
        <table border="1px">
          <tbody>
            <tr>
              <th>fullname</th>
              <th>email</th>
              <th>password</th>
              <th>mobile</th>
              <th>message</th>
              <th colspan="2">Action</th>
            </tr>
            
            {items.map(item => {
              return (
                <tr>
                  <td>{item.fullname}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.mobile}</td>
                  <td>{item.message}</td>
                  <td><button type="button">Update</button></td>
                  <td><button type="button">Delete</button></td>
                </tr>
              );
            })}
        
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
*/

