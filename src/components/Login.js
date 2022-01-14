import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import "firebase/app";
import { auth } from "../firebase";
import firebase from 'firebase/app';

const Login = () => {

    console.log("In login section");
    return(
        <div id="login-page">
            <div id="login-card">
                <h2>Let's Chat!</h2>

                <div
                    className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined/> Sign In with Google
                </div>

                <br/><br/>

                <div
                    className="login-button facebook"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <FacebookOutlined/> Sign In with Facebook
                </div>

            </div>
        </div>
    );
}

console.log("Login successfull");

export default Login;