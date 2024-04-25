import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Myprofile = () => {
    const [userId,setUserId]=useState(sessionStorage.getItem("id"));
    const [myData,setMyData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3008/api/viewmypro/'+userId)
        .then((res)=>{
            console.log(res.data.item)
            setMyData(res.data.item)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div style={{margin:'10%'}}>
        <Grid container spacing={2}>
            {myData.map((val,i)=>{
                return(
                    <Grid item xs={12} md={4} sm={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Name:{val.name}
                                </Typography>
                                <Typography x={{fontSize:14}}>
                                    Email:{val.email}
                                </Typography>
                                <Typography sx={{mb:1.5}}>
                                    Address:{val.address}
                                </Typography>
                                <Typography sx={{mb:1.5}}>
                                    Usenname:{val.username}
                                </Typography>
                                <Typography sx={{mb:1.5}}>
                                    Password:{val.password}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' color='error'>Delete</Button>
                                <Button variant='contained' color='primary'>Update</Button>
                            </CardActions>
                        </Card>
                    </Grid>                
                )
            })}
            
        </Grid>
    </div>
  )
}

export default Myprofile
