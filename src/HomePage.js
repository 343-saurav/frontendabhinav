import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    return (
        <div className="container" style={{ backgroundColor: '#f9f9f9' }}>
            <h1 className='text-center text-primary'>Welcome to My Website</h1>
            <div className="buttons ">
                <Link to="/login" className="btn btn-primary m-2" style={{ backgroundColor: '#007bff' }}>Login</Link>
                <Link to="/signup" className="btn btn-success" style={{ backgroundColor: '#28a745' }}>Sign Up</Link>
            </div>
        </div>
    );
};

export default HomePage;
