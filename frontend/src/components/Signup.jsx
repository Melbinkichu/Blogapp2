import { Alert, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
    const [input,setInput]=useState({})
    const inputHandler = (e)=>{
        setInput({...input,[e.target.name]:e.target.value})
        console.log(input)
    }
    const submitHandler=()=>{
        console.log("btn clicked",input)
        axios.post("http://localhost:3008/api/post",input)
        .then((res)=>{
            console.log(res);
            alert(res.data.message)
        })
    }
  return (
    <div style={{margin:'8%'}}>
      <Typography variant='h3' style={{color:'purple'}}> signup form </Typography>
      <br /><br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' label="Name" fullWidth name='name' onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' label="Email" fullWidth name='email' onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <TextField variant='outlined' label="Address" fullWidth multiline name='address' onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' label="Username" fullWidth name='username' onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' label="Password" fullWidth name='password' onChange={inputHandler}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Button variant="contained" onClick={submitHandler}>Submit</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Button variant="contained"><Link to={'/'}>Back to login</Link></Button>
        </Grid>

      </Grid>
    </div>
    

  )
}

export default Signup