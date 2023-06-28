import * as React from 'react';
import { Card, CardContent,Typography, CardMedia, IconButton, CardHeader, Avatar, Box, LinearProgress } from "@mui/material";
import { makeStyles } from '@mui/styles';


import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
// import { getVideoDurationInSeconds } from 'get-video-duration';
import ListStory from '../utils/ListStory';
// import { ExpandMore, theme } from './ExpandMore';
import CollapseContent from './CollapseContent';



  
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
        width:'340px',
        height:'600px',
        position:'relative'
      },
      buttonPrevNext:{
      margin:'15px',
      },
      buttonView:{
       display:'flex',
       color:'white',
       alignItems:'center',
       bottom:'0px',
       position:'absolute',
       width:'100%',
      },
   
      
      

      
  })
const CardComponent=()=> {
const classes=useStyles();
const [currentIndexStory,setCurrenIndexStory]=useState(0);
const [currentStory,setCurrentStory]= useState(ListStory[currentIndexStory]);
const [volumeStory,setVolumeStory]=useState(true);
const [runStory,setRunStory]=useState(true);




const [progress,setProgress]=useState(0);
const vidRef = useRef(null);

useEffect(()=>{
  const nextStory=()=>{
    setCurrenIndexStory(currentIndexStory+1);
    setCurrentStory(ListStory[currentIndexStory+1]);
    setProgress(progress+100/(100/(ListStory.length-1)));
    setRunStory(true);
  }
 
 
  if(runStory===true && currentStory.type==="image" && currentIndexStory<ListStory.length-1){
    const interval=setInterval(nextStory,5000);
    return ()=>{
      clearInterval(interval);
     
    }
  }
  
  
},[currentIndexStory,runStory,progress,currentStory]);

//next story
const handleClickNext=()=>{
  if(currentIndexStory<ListStory.length-1){
    setCurrenIndexStory(currentIndexStory+1);
    setCurrentStory(ListStory[currentIndexStory+1]);
    setRunStory(true);
    setProgress(progress+100/(ListStory.length-1))
 
  }
 else{
  setCurrentStory(ListStory[currentIndexStory])
 }
}
//prev story
const handleClickPrev=()=>{
  if(currentIndexStory>0){
    setCurrenIndexStory(currentIndexStory-1);
    setCurrentStory(ListStory[currentIndexStory-1]);
    setRunStory(true);
    setProgress(progress-100/(ListStory.length-1))
   
  }else{
    setCurrentStory(ListStory[currentIndexStory])
  }
}
//mute unmute story
const toggleVolume=()=>{
  setVolumeStory(!volumeStory);
  
}
//pause play story
const toggleRunStory=()=>{
  setRunStory(!runStory);
 if(currentStory.type==='video' && runStory===true){
  vidRef.current.pause();

 }else if(currentStory.type==='video' && runStory===false){
  vidRef.current.play();
 }
}
//auto end video
const handleEndVideo=()=>{
  setCurrenIndexStory(currentIndexStory+1);
  //video nam cuoi ngan su kien auto change
  if(currentIndexStory<ListStory.length-1){
    setCurrentStory(ListStory[currentIndexStory+1]);
    setProgress(progress+100/(ListStory.length-1))
  }
}
//check type story
const checkImage = (fileName)=>{
  if (String(fileName).match(/\.(jpg|jpeg|png|gif)$/i)){
    return true;
  }else{
    return false;
  }
}
console.log(checkImage(currentStory.image))
    return (
      <>
      <Box className={classes.root}>
        <IconButton onClick={handleClickPrev}  >
        <ArrowBackIosNewIcon  />
        </IconButton>
       
        <Card className={classes.card} sx={{background:'#00695c'}} >
        <LinearProgress  variant="determinate" value={progress} />
            <CardHeader
              avatar={<Avatar sx={{marginRight:'-12px'}} alt={currentStory.name} src={currentStory.type==='image'? currentStory.image:currentStory.name}></Avatar>}
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
               {checkImage(currentStory.image)===true ? 
               <CardMedia
              sx={{marginTop:"30px",objectFit:"contain"}}
              style={{ minHeight: '350px' }}
              image={currentStory.image}
              title="Background image"
            />: 
            <CardMedia
              ref={vidRef}
              id='myvideo'
              sx={{marginTop:"30px",objectFit:"contain"}}
              style={{minHeight:'400px'}}
              component='video'
              image={currentStory.image}
              title="Background image"
              muted={!volumeStory}
              onEnded={handleEndVideo}
              autoPlay
            /> }
            
            <CardContent >
              <Typography sx={{   maxWidth: '100%',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
                overflow: 'hidden',
                textOverflow: 'ellipsis',color:'white'}} variant="h8">{currentStory.desc} </Typography>
            </CardContent>
         <div className={classes.buttonView}>
            <CollapseContent infor={currentStory} currentIndexStory={currentIndexStory} toggleRunStory={toggleRunStory} handleClickNext={handleClickNext} handleClickPrev={handleClickPrev} />
        </div>
        </Card>
        <IconButton onClick={handleClickNext}>
        <ArrowForwardIosIcon />
        </IconButton>
       
        
      </Box>

      </>
    );
  }
  
  export default CardComponent;