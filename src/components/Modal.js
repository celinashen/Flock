import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';



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
    }
}));

const Modal = ({showModal, setShowModal}) => {
    const classes = useStyles();

    return(
        <>
            {showModal ? 
                <Card className = {classes.popupStyle}>hello</Card> 
                : 
                null}
            
        </>
    );
};

export default Modal;