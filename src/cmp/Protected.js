import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

function Protected(props) {
    //console.log(props.cmp)
    const Cmp = props.cmp;
    var auth = localStorage.getItem("auth");
    console.log(auth)
    return <div>{auth ? <Cmp /> : <Redirect to="login"></Redirect>}</div>

}


export default Protected
