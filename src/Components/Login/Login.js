import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useForm } from "react-hook-form";
import './Login.css';
import { Link } from "react-router-dom";
import { useState } from "react";


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [isNewUser, setIsNewUser] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        firebase.auth().signInWithEmailAndPassword(data.Email, data.Password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                setUser(user);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    })


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const final = result.user;
                setUser(final);
            }).catch((error) => {
                console.log(error);
            });
    }

    const handleFbSignIn = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                setUser(result.user);
                var accessToken = credential.accessToken;
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="Login-form">
            {
               isNewUser ? <h1>Create an account</h1> : <h1>LogIn</h1>
            }

            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    isNewUser && <input className="form-control" name="name" placeholder="Name" ref={register} />
                }
                <br />
                <input className="form-control" name="Email" placeholder="Email" ref={register} />
                <br />
                <input className="form-control" placeholder="Password" name="Password" type="password" ref={register({ required: true })} />
                <br />
                {
                    isNewUser && <input className="form-control" placeholder="Confirm Password" type="password" name="Confirm Password" ref={register({ required: true })} />
                }
                <br />
                <br />
                {isNewUser ? <input className="form-control bg-danger text-white" type="submit" value="Create an account" /> : <input className="form-control bg-danger text-white" type="submit" value="Login" />}
                {isNewUser ? <p>Already have an account? <Link style={{ textDecoration: 'none' }} onClick={() => setIsNewUser(!isNewUser)}>Login</Link></p> : <p>Don't have an account? <Link style={{ textDecoration: 'none' }} onClick={() => setIsNewUser(!isNewUser)}>Create an account.</Link></p>}
            </form>
            <p>user {user.email} loggedIn Successfully</p>
            <br />
            <button className="form-control bg-danger text-white" onClick={handleGoogleSignIn}> Continue with Google Sign In</button>
            <br />
            <br />
            <button className="form-control bg-danger text-white" onClick={handleFbSignIn}>Continue with FaceBook Sign In</button>
        </div>
    );
};

export default Login;