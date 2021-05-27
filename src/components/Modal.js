import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const Modal = ({showModal, setShowModal}) => {
    return(
        <>
            
            {showModal ? 
                <div>Hello</div> 
                : 
                null}
            
        </>
    );
};

export default Modal;