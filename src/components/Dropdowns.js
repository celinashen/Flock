import React, {useState} from 'react';
import { db, firebaseAppAuth, providers } from '../pages/firebaseConfig.js';
import Dropdown from 'react-dropdown';
import firebase from 'firebase'


var flockOptions = [];
var defaultOption = "Please select a flock.";
var flockIDs = [];
var userIDs = [];
var loopCount;


  class Dropdowns extends React.Component {
    state = {
        flock: null,
        selectedUser: null,
    };
    handleChange = selectedOptionFlock => {
        this.setState({ flock: selectedOptionFlock });
        console.log(`Option selected:`, selectedOptionFlock);
        
    };

    handleChangeUser = selectedOptionUser => {
        this.setState({ selectedUser: selectedOptionUser})
        console.log("User selected:", selectedOptionUser);
    };


    getFlockLists() {
        var user = firebase.auth().currentUser;

        //Scan through database for user profileMatch, then load user-specific flocks.
        db.collection('user').get().then(querySnapshot =>{
            querySnapshot.forEach(doc => {
                if (doc.data()!=null && user!=null)
                    if (doc.data().id == user.uid) {
                        Object.assign(flockIDs, doc.data().flocks) //load flockIDs with the flock IDs
                    }
            })
        })//end of firebase ref
        
        /*
        db.collection('flock-groups').get().then(querySnapshot => {//Translate from flock ID to flockName for dropdown
            for (var i=0; i < flockIDs.length; i++) {//To-do: add warning that you shouldn't have two flocks with the same name, otherwise code will die
                querySnapshot.forEach(doc => {
                if (doc.id == flockIDs[i] && loopCount == 0) {
                    flockOptions.push(doc.data().flockName);
                }
                })
            }
            loopCount++
        })
        */

        return flockIDs;
    }

    getFlockUsers() {
        db.collection('flock-groups').get().then(querySnapshot =>{
            querySnapshot.forEach(doc => {
                if (doc.data()!=null)
                    if (doc.id == this.selectedOptionFlock) {
                        Object.assign(userIDs, doc.data().members) //load flockIDs with the flock IDs
                    }
            })
        })//end of firebase ref
        console.log(userIDs);
        return userIDs;
    }




    render() {
      const { selectedOptionFlock, selectedOptionUser } = this.state;
      
      return (
          <div className = "Dropdown-Container">
            <div>
                <Dropdown value={selectedOptionFlock} placeholder={defaultOption}
                onChange={this.handleChange} options={this.getFlockLists()}/>
            </div>
            <div id = "user-dropdown">
                <Dropdown value={selectedOptionUser} placeholder={"Please select a user."}
                onChange={this.handleChangeUser} options={this.getFlockUsers()}/>
            </div>
          </div>

      );
    }
  }
  



  export default Dropdowns;