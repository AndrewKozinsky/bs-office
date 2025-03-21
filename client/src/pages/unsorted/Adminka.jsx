import React, { useState } from 'react';
import RegisterForm from 'src/components/LoginForm/RegisterForm.jsx';
import UserList from 'src/pages/unsorted/UserList.jsx';
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
