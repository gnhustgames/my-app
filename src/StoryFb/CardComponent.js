import * as React from 'react';
import { Card, CardContent,Typography,CardActionArea, CardMedia, IconButton, CardHeader, Avatar, Button, CardActions, Box } from "@mui/material";
import { makeStyles } from '@mui/styles';


import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { useEffect } from 'react';
  
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
      buttonPrevNext:{
      margin:'15px',
      },
      buttonView:{
       display:'flex',
       color:'white',
       alignItems:'center',
       bottom:'0px',position:'absolute'
      }
      
  })

  const CardComponent=()=> {
   const classes=useStyles();
   const ListStory=[{
    id: 0,
    name: "Nike Air Force 1",
    time:"4 năm",
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e8a96d27-6374-4ec8-81b1-033f476778f1/air-force-1-07-shoes-VWCc04.png",
    desc:"0",
    view:'124'
},
{
    id: 1,
    name: "Nike Dunk Low ",
    time:'1 năm',
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9dca0780-43e6-407b-b014-17c1318d47e1/custom-nike-dunk-low-by-you.png",
    desc:'1',
    view:'145',
},
{
    id: 2,
    name: "Nike Air Max 97 ",
    time:"2 tháng",
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/95c80cf2-ff69-48bd-91a8-aba951b2c153/custom-nike-air-max-97-by-you.png",
    desc:'2',
    view:'241'
},
{
    id: 3,
    name: "Nike Air Max 90",
    time:"5 năm",
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7fbc5e94-8d49-4730-a280-f19d3cfad0b0/custom-nike-air-max-90-by-you.png",
    desc:"3",
    view:'101'
},
{
    id: 4,
    name: "Nike Dunk High Retro ",
    time:"1 tuần",
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5e7687f1-c13e-4bac-8ffa-a6f863ae9157/dunk-high-retro-shoe-DdRmMZ.png",
    desc:"4",
    view:'131'
},
{
    id: 5,
    name: "Nike Air Force 1 Low By ",
    time:"5 tháng",
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/de8ccccd-40e8-4bcd-b86e-ab539876dd11/custom-nike-air-force-1-low-by-you.png",
    desc:'5',
    view:'191'
},
{
    id: 6,
    name: "Nike Air Force 1 '07 ",
    time:"3 năm",
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b01c67f2-2481-45d7-b383-a1476d768f6e/air-force-1-07-next-nature-shoes-cg65FM.png",
    desc:'6',
    view:'321'
},
{
    id: 7,
    name: "Nike Air Max TW ",
    time:"9 tháng",
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/568bf1b3-9ff9-4dfd-bc47-b576a6b3b5ae/air-max-tw-shoes-DhpWvV.png",
    desc:'7',
    view:'191'
}]
;
const [currentStory,setCurrentStory]= useState(ListStory[0]);
const [volumeStory,setVolumeStory]=useState(true);
const [runStory,setRunStory]=useState(true);
useEffect(()=>{
  console.log(currentStory);
});
const handleClickNext=()=>{
    setCurrentStory(ListStory[`${currentStory.id+1}`])
    setRunStory(true);
  
}
const handleClickPrev=()=>{
  setCurrentStory(ListStory[`${currentStory.id-1}`])
  setRunStory(true);

}
const toggleVolume=()=>{
  setVolumeStory(!volumeStory);
}
const toggleRunStory=()=>{
  setRunStory(!runStory);
}


    return (
      <>
    
      <Box className={classes.root}>
        <IconButton onClick={handleClickPrev}  >
        <ArrowBackIosNewIcon  />
        </IconButton>
   
        <Card className={classes.card} sx={{background:'#00695c'}} >
   
            <CardHeader
              avatar={<Avatar sx={{marginRight:'-12px'}}>N</Avatar>}
              title={
                <>
                <div style={{display:'flex'}}>
                <Typography variant="h8" sx={{fontWeight:'500',paddingLeft:'2px',maxWidth:'100px',marginRight:'4px',color:'white',textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',overflow:"hidden" }}>
                        {currentStory.name}
                </Typography>
                <Typography sx={{fontSize:'13px',color:"white"}} >
                    {currentStory.time}
                </Typography>
                </div>
                </>
             
              }
              action={
                <>
                {
                  runStory===true ? 
                  <IconButton onClick={toggleRunStory}>
                   <PauseIcon sx={{color:"white"}} />
                   </IconButton> :<IconButton onClick={toggleRunStory}>
                  <PlayArrowIcon sx={{color:"white"}} />
                  </IconButton>
                   
                }
                  {
                    volumeStory === true ? <IconButton onClick={toggleVolume}>
                    <VolumeUpIcon sx={{color:"white"}} />
                    </IconButton>: <IconButton onClick={toggleVolume}>
                    <VolumeOffIcon sx={{color:"white"}} />
                    </IconButton>
                  }
                   
                    </>
              }
            
            />
            <CardMedia
            sx={{marginTop:"30px",objectFit:"contain"}}
              style={{ paddingTop: "90%", }}
              image={currentStory.image}
              title="Background image"
            />
            <CardContent sx={{ overflow:"hidden", display: "-webkit-box",
            WebkitLineClamp: "3", WebkitBoxOrient: "vertical",
            textOverflow:"ellipsis",bottom:"10px",color:"white"}}>
              <Typography variant="h8">{currentStory.desc} </Typography>
            </CardContent>
         <div className={classes.buttonView}>
          <IconButton sx={{color:"white"}}>
                <KeyboardArrowUpIcon />
            </IconButton>
            <Typography sx={{}}>
                       {currentStory.view} người xem
            </Typography>
        </div>
     
        </Card>
        <IconButton  onClick={handleClickNext}>
        <ArrowForwardIosIcon />
        </IconButton>
       
        
      </Box>

      </>
    );
  }
  
  export default CardComponent;