import React, { useContext, useEffect } from 'react'
import { Form, Container, Button } from "react-bootstrap"
//firebase SDK
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
//firebase hooks
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { UserContext } from '../UserContext'

firebase.initializeApp({
    apiKey: "AIzaSyB8lJGJreTpb5X7GJpJBMUOPXx32Da7ENo",
  authDomain: "online-course-f8cdc.firebaseapp.com",
  projectId: "online-course-f8cdc",
  storageBucket: "online-course-f8cdc.appspot.com",
  messagingSenderId: "907257486356",
  appId: "1:907257486356:web:d5efac094c00b618aadb01",
  measurementId: "G-83TY3JS5R3"
})

const auth = firebase.auth();
const firestore = firebase.firestore()

const LoginScreen = () => {

    const [userGoogle] = useAuthState(auth)
    const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }


    return (
        <Container className="justify-content-center">
            <h1 className="text-center mt-5">Sign in to enroll the course</h1>
            <div className="mt-5 d-flex justify-content-center">
            { auth.currentUser 
                ? <button className="sign-out" onClick={() => auth.signOut()}>{auth.currentUser.displayName}</button>
                : <Button variant="dark" onClick={signInWithGoogle}><i class="fab fa-google"></i> Sign in with google</Button>
            }
            </div> 
        </Container>
    )
}

export default LoginScreen
