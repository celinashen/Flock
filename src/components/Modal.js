import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';



const useStyles = makeStyles((theme) => ({
    root: {
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    popupstyle:{

    }
}));

const Modal = ({showModal, setShowModal}) => {
    const classes = useStyles();

    return(
        <>
            {showModal ? 
                <Card className = {classes.popupStyle}></Card> 
                : 
                null}
            
        </>
    );
};

export default Modal;