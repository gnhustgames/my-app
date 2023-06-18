import * as React from 'react';
import { Card, CardContent,Typography,CardActionArea, CardMedia, IconButton, CardHeader, Avatar, Button, CardActions, Box } from "@mui/material";
import { makeStyles } from '@mui/styles';


import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
  
  const useStyles = makeStyles({
    root: {
      
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '0 30px',
        margin:'0 auto',
        display: "flex",
        flexDirection:'column',
        flexWrap: "wrap",
        justifyContent:'center',
        alignItems:"center",
        height:"100vh"
        
      },
      card:{
        width:'300px',
        height:"500px",
        position:'relative'
      },
      buttonView:{
       display:'flex',
       color:'white',
       alignItems:'center'
      }
      
  })

  const CardComponent=()=> {
   const classes=useStyles();
   
    return (
      <Box className={classes.root}>
        <Card className={classes.card} sx={{background:'#00695c'}} >
            <CardHeader
              avatar={<Avatar sx={{marginRight:'-12px'}}>N</Avatar>}
              title={
                <>
                <div style={{display:'flex'}}>
                <Typography variant="h8" sx={{fontWeight:'500',paddingLeft:'2px',marginRight:'4px',color:'white'}}>
                        Nguyễn Văn Anh
                </Typography>
                <Typography sx={{fontSize:'13px',color:"white"}} >
                    4 năm
                </Typography>
                </div>
                </>
             
              }
              action={
                <>
                <IconButton>
                  <PlayArrowIcon sx={{color:"white"}} />
                  </IconButton>
                    <IconButton>
                    <VolumeUpIcon sx={{color:"white"}} />
                    </IconButton>
                    </>
              }
            
            />
            <CardMedia
            sx={{marginTop:"30px",objectFit:"contain"}}
              style={{ paddingTop: "90%", }}
              image="https://mui.com/static/images/cards/paella.jpg"
              title="Background image"
            />
            <CardContent sx={{ overflow:"hidden", display: "-webkit-box",
            WebkitLineClamp: "3", WebkitBoxOrient: "vertical",
            textOverflow:"ellipsis",bottom:"10px",color:"white"}}>
              <Typography variant="h8">Lorem Ipsum is simply dummy text of the printing and typesetting </Typography>
            </CardContent>
         <div className={classes.buttonView}>
          <IconButton sx={{color:"white"}}>
                <KeyboardArrowUpIcon />
            </IconButton>
            <Typography sx={{}}>
                        16 người xem
            </Typography>
        </div>
        </Card>
        
        
      </Box>
    );
  }
  
  export default CardComponent;