import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';

import MemberList from './MemberList';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';



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
    },
    card:{
        borderRadius: 10,
        maxWidth: "200%"
    },
    typographyCard: {
        "fontFamily": "Poppins",
        "fontSize": 20,
        "color": "#979B82"
    },
    typographyOutstandingTitle:{
        "fontFamily": "Poppins",
        "fontSize": 25,
        "color": "#979B82", 
        textAlign: 'center'
      },
      outstandingBoxContainer:{
        backgroundColor: "#769E76",
        borderRadius: "20px",
        maxWidth: '45%',
        maxHeight: 320,
        marginLeft: '10%',
        marginBottom: '10%',
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: "100%",
        '&::-webkit-scrollbar': {
          width: '0.45em',
          height: '0.1em',
          scrollMarginTop: '10px'
          
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          scrollMarginTop: '10px'
        },
        '&::-webkit-scrollbar-thumb': {
          height: '6px',
          backgroundColor: 'rgba(0,0,0,.3)',
          outline: '1px solid slategrey',
          borderRadius: '10px',
          scrollMarginTop: '10px'
        },
      }
}));

const ListItem=()=> {
    const classes = useStyles();
    return (
      <Card className = {classes.card} style={{boxShadow: "none"}}>
        <Typography className = {classes.typographyCard} style={{fontWeight: 500}}>
          $20 from Jess
        </Typography>
      </Card>
    );
  }
  

const OutstandingReceivable = ({title}) => {
    const classes = useStyles();

    return(

        <div>
          <Box pt = {6} ml = {20}>
            <Typography className = {classes.typographyOutstandingTitle} style={{fontWeight: 500}}>
              {title}
            </Typography>
          </Box>
          <Grid>
            <Grid direction = "column" justify = "center" alignItems = "center" className = {classes.outstandingBoxContainer} >
              <Box pl = {2.5} pr = {2.5} pt = {2.5}>
                <ListItem/>
              </Box>
              <Box pl = {2.5} pr = {2.5} pt = {2}>
                <ListItem/>
              </Box>
              <Box pl = {2.5} pr = {2.5} pt = {2}>
                <ListItem/>
              </Box>
              <Box pl = {2.5} pr = {2.5} pt = {2}>
                <ListItem/>
              </Box>
              <Box pl = {2.5} pr = {2.5} pt = {2}>
                <ListItem/>
              </Box>
              <Box pl = {2.5} pr = {2.5} pt = {2}>
                <ListItem/>
              </Box>
              <Box pl = {2.5} pr = {2.5} pt = {2} pb = {2}>
                <ListItem/>
              </Box>
            </Grid>
          </Grid>
        </div>
     
      );
}

const Popup = ({modalTitle}) => {
    const classes = useStyles();

    return(
        <>
            <Card className = {classes.popupStyle}>
                <Typography className = {classes.popupTitle}>
                    {modalTitle}
                </Typography>
                <MemberList/>
                <OutstandingReceivable/>
            </Card> 
        </>
    );
};

const Modal = ({showModal, setShowModal, modalTitle}) => {
    const classes = useStyles();

    return(
        <>
            {showModal ? 
                <Popup modalTitle = {modalTitle}/> 
                : 
                null}
            
        </>
    );
};

export default Modal;