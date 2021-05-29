import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';

import MemberList from './MemberList';



const useStyles = makeStyles((theme) => ({
    root: {
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    popupStyle:{
        backgroundColor: 'white',
        position: 'fixed',
        minHeight: '50vh',
        minWidth: '50vh',
        maxWidth: '50vh',
        borderRadius: '20px',
        boxShadow: '0px 4px 20px 0px rgba(118,158,118,0.5)',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }, 
    popupTitle:{
        "fontFamily": "Poppins",
        "fontSize": 30,
        "color": "#769E76",
        marginLeft: '10%',
        marginTop: '10%',
        display: 'flex',
        align: 'left',
        alignContent: 'flex-start',
        fontWeight: '600'
    }
}));


const Popup = () => {
    const classes = useStyles();

    return(
        <>
            <Card className = {classes.popupStyle}>
                <Typography className = {classes.popupTitle}>
                    Spotify
                </Typography>
                <MemberList/>
            </Card> 
        </>
    );
};

const Modal = ({showModal, setShowModal}) => {
    const classes = useStyles();

    return(
        <>
            {showModal ? 
                <Popup/> 
                : 
                null}
            
        </>
    );
};

export default Modal;