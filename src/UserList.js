import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import AddUser from './AddUser';

const UserList = () => {
    const [userData, setUserData] = useState(null);


    useEffect(() => {
        async function fetchData() {
          const response = await fetch('http://localhost:20907/api/User');
          const data = await response.json();
          setUserData(data);
           
          
        }
         fetchData();
         console.log(userData);
        //  setRecords(userData.slice(firstIndex,lastIndex));
        //  setNpage(Math.ceil(userData.length / records.length));
        //  SetNumbers([...Array(npage+1).keys()].slice(1));
      }, []);
  return (
  
  <>
  
  <div className="container  mt-4">
        <div className="card">
          <div className="card-title bg-dark text-white p-2">
            <h2 className="text-center">Employees</h2>
          </div>
          <div className="card-body">
            <div>
             <Link to='/adduser'className="btn btn-success  mb-3"> ADD New (+)</Link> 
            </div>
            <table className="table table-bordered table-striped">
              <thead className="bg-dark text-white p-2">
                <tr>
                  <td>Name</td>
                  <td>Address</td>
                  <td>DOB</td>
                  <td>Email</td>
                  <td>MobileNumber</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                    {
                       
                  userData &&
                  userData.map(user => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.address}</td>
                        <td>{user.dob}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        {/* <td> <a onClick={()=>{LoadEdit(user.userId)}}  className="btn btn-success mr-2">Edit</a>
                        <a onClick={()=>{LoadDetail(user.userId)}} className="btn btn-primary mr-2">Details</a>
                        <a  onClick={()=>{Remove(user.userId)}} className="btn btn-danger">Delete</a>
                        </td> */}
                         
       
                      </tr>
                    ))
                   } 
 
              </tbody>
            </table>
            </div>
        </div>
      </div>
      </>
       )

}

export default UserList
