import React, {useState} from 'react';
import { db, firebaseAppAuth, providers } from '../components/firebaseConfig.js';
import Dropdown from 'react-dropdown';
import firebase from 'firebase';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


var defaultOption = "Please select a flock.";

const Dropdowns = () => {
    
    const [selectedOptionFlock, setFlock] = useState(null);
    const [selectedOptionUser, setSelectedUser] = useState(null);
    const [isSelected, setIsSelected] = useState(false);
    

    const handleChange = (selectedOptionFlock) => {
        setFlock(selectedOptionFlock);
        setIsSelected(!isSelected);

        //the second dropdown indicates boolean is true, but prints out false? maybe cause need to exit function to update
        console.log('boolean: ', isSelected); 
        console.log(`Option selected:`, selectedOptionFlock);
    };

    const handleChangeUser = (selectedOptionUser) => {
        console.log('boolean: ', isSelected); //should print out true here
        setSelectedUser(selectedOptionUser);
        console.log("User selected:", selectedOptionUser);
    };


//flock dropdowns has options: options={getFlockLists()
//user dropdowns has options (if true): options = {getFlockUsers()}

      return (
          <Grid direction = "row" container spacing={0}>
              <Grid item lg = {6}>
                <Typography>Which flock owes you?</Typography>
                <Dropdown 
                    value={selectedOptionFlock} 
                    placeholder={defaultOption}
                    onChange={handleChange} 
                    options={['option1', 'option2']}/>
              </Grid>

              <Grid item lg = {6}>
                <Typography>Who owes you?</Typography>

                {isSelected ? 
                (
                <Dropdown 
                    value={selectedOptionUser} 
                    placeholder={"Please select a user."}
                    onChange={handleChangeUser}
                    options = {['Boolean is true']} />
                ) : (
                    <Dropdown 
                    value={selectedOptionUser} 
                    placeholder={"Please select a user."}
                    onChange={handleChangeUser}
                    options = {['Please select a flock']} />
                )}

              </Grid>
          </Grid>
      );
  }
  
export default Dropdowns;