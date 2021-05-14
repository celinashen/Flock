import React from 'react';
import '../pages/App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Dropdowns from './Dropdowns';
import Grid from '@material-ui/core/Grid';
import {TextField} from '@material-ui/core';

import { db } from '../pages/firebaseConfig'
import firebase from 'firebase'



const useStyles = makeStyles((theme) => ({
    titleTypography: {
        "fontFamily": "Poppins",
        "fontSize": 50,
        "color": "#769E76",
        alignItems: 'center',
        fontWeight: '600'
    },
    divStyle:{
        position: 'absolute', 
        left: '50%', 
        top: '25%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '35%'
    },
    centerTitle:{
        display: 'flex',  
        justifyContent:'center', 
        marginTop: '335px',
        marginBottom: ''
    },
    descriptionStyle:{
        marginBottom: '40px',
        fontFamily: 'Poppins'
    },
    submit:{
        fontFamily: "Poppins",
        color: 'rgba(255, 255, 255, 1)',

        width: '100%',
        height: '56px',
        borderRadius: '4px',
        position: 'relative',
        backgroundColor: 'rgba(118,158,118,1)',
        border: 'rgba(118,158,118,1)',
        
        transition: '0.3s all',
        '&:hover':{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            color: 'rgba(118,158,118,1)',
            boxShadow: '0px 4px 20px 0px rgba(118,158,118,0.5)',
            cursor: 'pointer',
            borderColor: 'rgba(118,158,118,1)',
            outlineColor: 'rgba(118,158,118,1)',
        }
    },
    labelStyle:{
        fontFamily: 'Poppins'
    }, 
    textFieldStyle:{
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: 'rgba(118,158,118,1)',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#979B82',
            },
        }
    },
    messageStyle:{
        marginBottom: '30px', 
        marginTop: '20px',
        '& label.Mui-focused': {
            color: '#979B82',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#979B82',
        },
    }
}));

//props: title, description

const Form = (props) => {

    const [amount, setAmount] = useState(0);
    const [expenseName, setExpenseName] = useState('');
    const [message, setMessage] = useState('');
    const [selectedOptionFlock, setFlock] = useState('');
    const [selectedOptionUser, setSelectedUser] = useState('');
    const [isSelected, setIsSelected] = useState(false);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name == 'amount' ){
            setAmount(value);
        }
        else if (name == 'expenseName'){
            setExpenseName(value);
        }
        else if (name == 'message'){
            setMessage(value);
        }
    }

    const handleChangeFlock = (selectedOptionFlock) => {
        setFlock(selectedOptionFlock);
        setIsSelected(isSelected);

        //the second dropdown indicates boolean is true, but prints out false? maybe cause need to exit function to update
        console.log('boolean: ', isSelected); 
        console.log(`Option selected:`, selectedOptionFlock);
    };

    const handleChangeUser = (selectedOptionUser) => {
        //console.log('boolean: ', isSelected); //should print out true here
        setSelectedUser(selectedOptionUser);
        //console.log("User selected:", selectedOptionUser);
    };


    const handleSubmit = (event) => {
        //this is where you will send the values to the fb
        console.log(amount);
        alert('Amount: ' + amount + ' | Expense: ' + expenseName + ' | Message: ' + message + ' | selectedOptionFlock: ' + selectedOptionFlock.value + ' | selectedOptionUser: ' + selectedOptionUser.value);
        event.preventDefault();
        //use 'amount' and 'expenseName' and 'message' to retrive the values
        
        /*var user = firebase.auth().currentUser;
        const res = db.collection('transaction').add({
            receivableBy: user.uid,
            payableTo:
            id: user.uid,
            amount: amount,
          });*/
    
    }



    function getFlockLists() {
        var user = firebase.auth().currentUser;
        var flockIDs = [];
        var tempObject = {};
    
        //Scan through database for user profileMatch, then load user-specific flocks.
        db.collection('user').get().then(querySnapshot =>{
            querySnapshot.forEach(doc => {
                if (doc.data()!=null && user!=null)
                    if (doc.data().id == user.uid) 
                        doc.data().flocks.forEach(doc2 => {
                            db.collection('flock-groups').get().then(querySnapshot2 => {
                                querySnapshot2.forEach(doc3 => {
                                    if (doc2 == doc3.id) {
                                        tempObject = {value: doc2, label: doc3.data().flockName};
                                        flockIDs.push(tempObject);
                                        //console.log(tempObject);
                                    }
    
                                })
                            })
                        });                        
            })
        })//end of firebase ref
        //console.log(flockIDs);
        return flockIDs;
    }

    function getUserLists() {
        var userIDs = [];
        var tempObject = {};

        db.collection('flock-groups').get().then(querySnapshot =>{
            querySnapshot.forEach(doc => {
                if (selectedOptionFlock.value == doc.id) {
                    doc.data().members.forEach(doc2 => {
                        db.collection('user').get().then(querySnapshot2 =>{
                            querySnapshot2.forEach(doc3 => {
                                //console.log(doc2+", "+doc3.data().id);
                                if (doc2 == doc3.data().id) {
                                    tempObject = {value: doc2, label: doc3.data().Name};
                                    userIDs.push(tempObject);
                                    console.log("beep")
                                }
                            })
                        })
                    })
                }
            })
        })
        return userIDs;
    }




    const defaultOption = "Please select a flock.";
    const flockIDs = getFlockLists();
    const userIDs = getUserLists();






    const classes = useStyles();
        return(
            <div className = {classes.divStyle}>
                <div className = {classes.centerTitle}>
                    <Typography className = {classes.titleTypography}>{props.title}</Typography>
                </div>
                <Box>
                    <Typography className = {classes.descriptionStyle}>{props.description}</Typography>
                </Box>
                
                <form onSubmit={handleSubmit}>
                    <Grid direction = "row" container spacing={0}>
                        <Grid item lg = {6} style = {{marginBottom: '25px'}}>
                            <Typography className = {classes.labelStyle}>Amount</Typography>
                            <TextField 
                                id = "outlined-basic" 
                                variant = "outlined" 
                                className = {classes.textFieldStyle}
                                
                                name = 'amount'
                                type = 'number'   
                                value = {amount}     
                                onChange={handleInputChange}>
                            </TextField>
                        </Grid>

                        <Grid item lg = {6} style = {{marginBottom: '25px'}}>
                            <Typography className = {classes.labelStyle}>Name of Expense</Typography>
                            <TextField 
                                id = "outlined-basic" 
                                variant = "outlined" 
                                className = {classes.textFieldStyle}
                                
                                name = 'expenseName'
                                type = 'text'
                                value={expenseName}
                                onChange={handleInputChange}>
                            </TextField>
                        </Grid>

                        <br/>

                        <Grid direction = "row" container spacing={0}>
                            <Grid item lg = {6}>
                                <Typography>Which flock owes you?</Typography> 
                                <Dropdown 
                                    value={selectedOptionFlock} 
                                    placeholder={defaultOption}
                                    onChange={handleChangeFlock} 
                                    options={flockIDs}/>
                                
                                
                            </Grid>

                            <Grid item lg = {6}>
                                <Typography>Who owes you?</Typography>

                                {isSelected ? 
                                (
                                <Dropdown 
                                    value={selectedOptionUser} 
                                    placeholder={"Please select a user."}
                                    onChange={handleChangeUser}
                                    options = {userIDs} />
                                ) : (
                                    <Dropdown 
                                    value={selectedOptionUser} 
                                    placeholder={"Please select a user."}
                                    onChange={handleChangeUser}
                                    options = {['Please select a flock']} />
                                )} 

                            </Grid>
                        </Grid>

                        <br/>

                        <TextField 
                            id = "standard-basic" 
                            label = "Message (optional)" 
                            fullWidth = 'true' 
                            className = {classes.messageStyle}

                            name = 'message'
                            type = 'text'
                            value={message}
                            onChange={handleInputChange}>
                        </TextField>
 
                    </Grid>

                    <input type="submit" value={props.submit} className = {classes.submit}/>
                </form>
            </div>
        )
    }


export default Form;










// class Form extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             amount: 0,
//             expenseName: ''
//         };
//         this.handleInputChange = this.handleInputChange.bind(this);
//     }

//     handleInputChange(event){
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;

//         this.setState({
//             [name]: value
//         });
//     }

//     handleSubmit(event){
//         //this is where you will send the values to the fb
//         alert(
//             'Amount: ' + this.state.amount);
//         event.preventDefault();
//     }

//     render(){
//         const { classes } = this.props;
//         return(
//             <div>
//                 <Typography className = {classes.titleTypography}>Issue a Receivable</Typography>
                
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                         Amount 
//                         <br/>
//                         <input
//                             name = 'amount'
//                             type = 'number'
//                             value={this.state.amount}
//                             onChange={this.handleInputChange}>
//                         </input>
//                     </label>
//                     <br />

//                     <label>
//                         Name of Expense
//                         <br/>
//                         <input
//                             name = 'expenseName'
//                             type = 'text'
//                             value={this.state.expenseName}
//                             onChange={this.handleInputChange}>
//                         </input>
//                     </label>

//                     <input type="submit" value="Submit" />
//                 </form>
//             </div>
            
//         )
//     }
// }

// export default withStyles(styles, { withTheme: true })(Form);







// const UseStyles = makeStyles((theme) => ({
//     titleTypography: {
//       "fontFamily": "Poppins",
//       "fontSize": 50,
//       "color": "#769E76"
//     },
//     titleStyle:{
//         position: 'absolute', 
//         left: '50%', 
//         top: '25%',
//         transform: 'translate(-50%, -50%)'
//     },
//     formStyle:{
//         position: 'absolute', 
//         left: '50%', 
//         top: '25%',
//         transform: 'translate(-50%, -50%)'
//     }
// }));

// const Form = () =>{

//     const [amount, setAmount] = useState("");
//     const [transactionName, setTransaction] = useState("");
//     const [message, setMessage] = useState("");

//     const classes = UseStyles();
//     return (
//         <div>
//             <Box className = {classes.titleStyle}>
//                 <Typography className = {classes.titleTypography} style={{fontWeight: 600}}>Issue a Receivable</Typography>
//             </Box>
            
//             <form className = {classes.formStyle}>
            
//                 <label>Amount</label>
//                 <input 
//                     placeholder="Amount" 
//                     value = {amount}
//                     onChange={(e) => setAmount(e.target.value)}/>

//                 <label>Transaction</label>
//                 <input 
//                     placeholder="Transaction Name"
//                     value = {transactionName}
//                     onChange={(e) => setTransaction(e.target.value)}/>

//                 <label>Message</label>
//                 <input 
//                     placeholder="Message"
//                     value = {message}
//                     onChange={(e) => setMessage(e.target.value)}/>

//             </form>

//             <h3>Your amount is: {amount}</h3>
//             <h3>Your transaction is: {transactionName}</h3>
//             <h3>Your message is: {message}</h3>
            
//         </div>
//     )
// }

// //values are what you want to send back to fb

// export default Form;







