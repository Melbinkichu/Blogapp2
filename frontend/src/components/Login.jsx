import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const [input,setInput]=useState({});
    const navigate = useNavigate();
    const inputHandler = (e)=>{
        setInput({...input,[e.target.name]:e.target.value})
        console.log(input)
    }
    const submitHandler=()=>{
        console.log("btn clicked",input)
        axios.post('http://localhost:3008/api/login',input)
        .then((res)=>{
            console.log(res);
            console.log(res.data.person)

            alert(res.data.message);
            if(res.data.message=="Login successfull"){
                const userId = res.data.person._id;
                sessionStorage.setItem("id",userId)
                navigate('/view')
            }
        })
    }
  return (
    <div style={{margin:"50px"}}>
        <Typography variant='h3' style={{color:'purple'}}> Login form </Typography>
        <br /><br />
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField variant='outlined' label="Username" fullWidth name='username' onChange={inputHandler}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField variant='outlined' label="Password" fullWidth name='password' onChange={inputHandler}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Button variant="contained" onClick={submitHandler}>Login</Button>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Button><Link to={'/sign'}>New Users Click Here </Link></Button>
            </Grid>
        </Grid>
    </div>
  )
}

export default Login

