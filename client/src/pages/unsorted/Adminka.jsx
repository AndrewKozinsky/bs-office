import React, { useState } from 'react';
import LoginForm from 'src/components/LoginForm/LoginForm.tsx';
import RegisterForm from 'src/components/LoginForm/RegisterForm.jsx';
import UserList from 'src/pages/unsorted/UserList.jsx';
import PrintComponent from 'src/pages/unsorted/PrintComponent.jsx';
import ListPrinter from 'src/pages/unsorted/ListPrinter.jsx';
import ListSMS from 'src/pages/unsorted/ListSMS.jsx';

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
