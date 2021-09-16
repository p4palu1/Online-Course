import React, { useState, useEffect, useContext } from 'react'
import HeroSection from "../components/HeroSection"
import { UserContext } from '../UserContext'
//firebase SDK
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
//firebase hooks
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"


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


const HomeScreen = () => {

    const [userGoogle] = useAuthState(auth)

    return (
        (
            <>
                <HeroSection />
                <br />
                <br />
                <br />
                { userGoogle ==! null && <span>{userGoogle.displayName}</span>}
            </>
    ))
                }


export default HomeScreen
