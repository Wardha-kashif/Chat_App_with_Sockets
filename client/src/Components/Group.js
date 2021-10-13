import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React, { useState, useContext, useMemo } from 'react';
// import { WebSocketContext } from './WebSocket';
// import { Provider, useSelector, useDispatch } from 'react-redux'
// import store from './store';
// import { createRoom, setUsername, joinRoom } from './actions';
import Modal from 'react-bootstrap/Modal';
import Form, { GroupItem, SimpleItem } from 'devextreme-react/form';
import { Button } from 'devextreme-react/button';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import { margin } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom'
// import './Group.css'


function ButtonAppBar() {
    return (

        <Box sx={{ flexGrow: 1 }} style={{ margin: "0" }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ fontSize: "25px" }}>
                        Chat Application with Sockets
                    </Typography>

                    {<Link
                        to={'/'}>
                        <span style={{ color: "white", backgroundColor: '#1976d2', textDecoration: "underline", fontWeight: "bold" }}> Back to General Chat Group </span>
                    </Link>}

                </Toolbar>
            </AppBar>
        </Box>
    );
}

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', m: '2px', pt: '3px' }}
    >
        •
    </Box>
);




function Group() {

    return (
        <div>
            <ButtonAppBar />
            <h1>Hello</h1>
        </div>
    );
}

export default Group;


