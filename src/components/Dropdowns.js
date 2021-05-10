import React, {useState} from 'react';
import { db, firebaseAppAuth, providers } from '../pages/firebaseConfig.js';
import Dropdown from 'react-dropdown';
import firebase from 'firebase';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


var flockOptions = [];
var defaultOption = "Please select a flock.";
var flockIDs = [];
var userIDs = [];
var loopCount;

const Dropdowns = () => {
    
    const [selectedOptionFlock, setFlock] = useState(null);
    const [selectedOptionUser, setSelectedUser] = useState(null);
    
    const handleChange = (selectedOptionFlock) => {
        setFlock(selectedOptionFlock);
        console.log('new one');
        console.log(`Option selected:`, selectedOptionFlock);
        
    };

    const handleChangeUser = (selectedOptionUser) => {
        setSelectedUser(selectedOptionUser);
        console.log("User selected:", selectedOptionUser);
    };


    function getFlockLists() {
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

    function getFlockUsers() {
        db.collection('flock-groups').get().then(querySnapshot =>{
            querySnapshot.forEach(doc => {
                if (doc.data()!=null)
                    if (doc.id == selectedOptionFlock) {
                        Object.assign(userIDs, doc.data().members) //load flockIDs with the flock IDs
                    }
            })
        })//end of firebase ref
        console.log(userIDs);
        return userIDs;
    }


      
      return (
          <Grid direction = "row" container spacing={0}>
              <Grid item lg = {6}>
                <Typography>Which flock owes you?</Typography>
                <Dropdown value={selectedOptionFlock} placeholder={defaultOption}
                onChange={handleChange} options={getFlockLists()}/>
              </Grid>

              <Grid item lg = {6}>
                <Typography>Who owes you?</Typography>
                <Dropdown value={selectedOptionUser} placeholder={"Please select a user."}
                onChange={handleChangeUser} options={getFlockUsers()}/>
              </Grid>
          </Grid>

      );
    
  }
  



  export default Dropdowns;