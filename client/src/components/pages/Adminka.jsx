import React, { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../LoginForm/RegisterForm';
import UserList from './UserList';
import PrintComponent from './PrintComponent';
import ListPrinter from './ListPrinter';
import ListSMS from './ListSMS';

function Adminka() {

    return (
        <div className="container-box">
            <RegisterForm />
            <UserList />
            {/* <PrintComponent/> */}
            <ListPrinter />
            <ListSMS />
        </div>
    );
}

export default Adminka;
