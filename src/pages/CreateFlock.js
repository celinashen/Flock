import React, { useReducer, useState } from 'react';
import 'react-dropdown/style.css';

import './App.css';
//COMPONENTS MUST START WITH UPPERCASE

import {db, firebaseAppAuth, providers} from './firebaseConfig.js';
//use this component to create a new flock
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase'


class CreateFlock extends React.Component {      
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();

        db.collection('flock-groups').add({
            flockName: this.state.value,
            members: [firebase.auth().currentUser.uid],
        }).then(function(docRef) {

            db.collection('user').get().then(querySnapshot =>{
                querySnapshot.forEach(doc => {
                    var userRef = db.collection('user').doc(doc.id);
                    if (doc.data().id == firebase.auth().currentUser.uid) {
                        userRef.update({
                            flocks: firebase.firestore.FieldValue.arrayUnion(docRef.id)
                        });
                    }
                })
            });

        })
        
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
    );
    }
}


export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(CreateFlock);
  