import React, { useReducer, useState } from 'react';
import 'react-dropdown/style.css';

import '../pages/App.css';
//COMPONENTS MUST START WITH UPPERCASE

import {db, firebaseAppAuth, providers} from '../components/firebaseConfig.js';
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
        alert('A flock was submitted: ' + this.state.value);
        var temp = this.state.value;
        event.preventDefault();

        // Setting up the proper data format for new flocks
        db.collection('flock-groups').add({
            flockName: this.state.value,
            members: [{id: firebase.auth().currentUser.uid, name: firebase.auth().currentUser.displayName }],
        }).then(function(docRef) {

            // Must still find the current user so their data can be edited
            db.collection('user').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    var userRef = db.collection('user').doc(doc.id);
                    if (doc.id == firebase.auth().currentUser.uid) {
                        
                        // Updating the user's local flock list to include the newly created one
                        userRef.update({
                            flocks: firebase.firestore.FieldValue.arrayUnion({value: docRef.id, label: temp})
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
            Create Flock, Name:
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
  