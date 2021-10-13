import TextField from "@material-ui/core/TextField"
import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import "./App.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import bg2 from '../image/bg2.jpeg';
import { Link } from 'react-router-dom'


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

                    <Button color="inherit" style={{ fontSize: "15px" }}>
                        {<Link
                            to={'/provider'}>
                            <span style={{ color: "white", textDecoration: "underline" }}> Create Your Own Room </span>
                        </Link>}
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


function Home() {

    const [state, setState] = useState({ message: "", name: "" })
    const [chat, setChat] = useState([])

    const socketRef = useRef()

    useEffect(
        () => {
            socketRef.current = io.connect("http://localhost:4000", { transports: ['websocket', 'polling', 'flashsocket'] })
            socketRef.current.on("message", ({ name, message }) => {
                setChat([...chat, { name, message }])
            })
            return () => socketRef.current.disconnect()
        },
        [chat]
    )



    const onTextChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }



    const onMessageSubmit = (e) => {
        const { name, message } = state
        socketRef.current.emit("message", { name, message })
        e.preventDefault()
        setState({ message: "", name })
    }


    const renderChat = () => {
        return chat.map(({ name, message }, index) => (
            <div key={index}>
                <h3>
                    {name}: <span style={{ backgroundColor: 'lightblue' }} className="messageStyle">{message}</span>
                </h3>
            </div>
        ))
    }

    return (
        <div>

            <ButtonAppBar style={{ backgroundColor: "blue" }} />
            <div style={{ backgroundImage: `url(${bg2})`, backgroundRepeat: " no-repeat", backgroundSize: "100%", position: "absolute", width: "1920px", height: "900px" }}>
                <div className="card" >
                    <form onSubmit={onMessageSubmit}>
                        <h1 style={{ textAlign: 'center' }}>Messenger</h1>
                        <div className="name-field">
                            <TextField name="name" onChange={(e) => onTextChange(e)} value={state.name} label="Enter Your Name Here" style={{ width: "500px", marginTop: "80px" }} />
                        </div>
                        <div>
                            <TextField
                                name="message"
                                onChange={(e) => onTextChange(e)}
                                value={state.message}
                                id="outlined-multiline-static"
                                variant="outlined"
                                label="Message"
                                multiline
                                rows={4}
                                style={{ width: "500px" }}

                            />
                        </div>
                        <button style={{ margin: '0 auto', display: "flex", marginTop: '50px', width: "300px", justifyContent: 'center', backgroundColor: "#1976d2", color: "white", fontSize: "15px", height: "40px", borderRadius: "25px" }}> Send Message</button>
                    </form>
                    <div className="render-chat">
                        <h1 style={{ textAlign: 'center' }}>Chat Log</h1>
                        {renderChat()}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home

