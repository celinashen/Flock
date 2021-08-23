import React, {useState, useEffect} from 'react';
import { db, firebaseAppAuth, providers } from '../components/firebaseConfig.js';
import Dropdown from 'react-dropdown';
import firebase from 'firebase';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { doc, getDoc } from "firebase";





async function getDocument (collection, userID) {
    const snap = await getDoc(doc(db, collection, userID))
    if (snap.exists())
      return snap.data()
    else
      return Promise.reject(Error(`No such document: ${collection}.${userID}`))
}
  


//component to build text bar that adds the inputted user ID to the flock
//include function to find the corresponding name to the user ID
class AddUserTextBar extends React.Component {      
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
        alert('An ID was submitted: ' + this.state.value);
        event.preventDefault();
        var match = false;

        db.collection('user').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                if (doc.data().id == this.state.value) {
                    match = true;

                    // Must add new member to flock-groups collection
                    db.collection('flock-groups').doc(this.props.selectedFlock.value).update({
                        members: firebase.firestore.FieldValue.arrayUnion(this.state),
                    })
                    // Must add new flock to the specific user's local flocks list; viable because already on the right user document from before 
                    db.collection('user').doc(doc.id).update({
                        flocks: firebase.firestore.FieldValue.arrayUnion(this.props.selectedFlock.value)
                    });

        
                }
            })
            if (match == false) 
                alert('No ID matches in database.');
        })
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
            Add User to Flock, Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
    );
    }
}




function getFlockLists() {
    var user = firebase.auth().currentUser;
    var flockIDs = [];
    //Scan through database for user profileMatch, then load user-specific flocks.
    db.collection('user').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            if (doc.data()!=null && user!=null) {
                //console.log(user.uid+", "+doc.data().id)
                if (doc.data().id === user.uid) {
                    Object.assign(flockIDs, doc.data().flocks) //load flockIDs with the flock IDs
                }
            }   
        })
    })//end of firebase ref
    console.log(flockIDs)
    return flockIDs;
}



var defaultOption = "Please select a flock.";

const AddUser = () => {
    
    const [selectedOptionFlock, setFlock] = useState(null);
    const [FlockArray, setFlockArray] = useState(getFlockLists());
    var temp = getFlockLists();
  
    useEffect(() => {
        setTimeout(function(){ setFlockArray(temp) }, 1000);
    },[temp]); 

  
    const handleChange = (selectedFlock) => {
        setFlock(selectedFlock);
        console.log('Option selected: ');
        console.log(selectedOptionFlock) //One step late
        console.log(selectedFlock) //Not one step late
    };


    //flock dropdowns has options: options={getFlockLists()
    //user dropdowns has options (if true): options = {getFlockUsers()}

    return (
        <div>
            <Typography>Which flock would you like to add a person to?</Typography>
            <Dropdown
                value={selectedOptionFlock}
                placeholder={defaultOption}
                onChange={handleChange}
                options={FlockArray}/>
            <Typography>What is the person's user ID?</Typography>
            {/* component to add text bar where you can enter the id of the user you want to add
            Todo: Add a screen alert where it confirms the actual name of the person you're adding before they get added. */}
            <AddUserTextBar selectedFlock={selectedOptionFlock}/>
        </div>
    );
  }

export default AddUser;