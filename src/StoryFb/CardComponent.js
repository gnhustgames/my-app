import * as React from 'react';
import { Card, CardContent,Typography,CardActionArea, CardMedia, IconButton, CardHeader, Avatar, Button, CardActions, Box, LinearProgress, Grid } from "@mui/material";
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
import { useRef } from 'react';
// import { getVideoDurationInSeconds } from 'get-video-duration';
import ListStory from '../utils/ListStory';
  
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
      },
      //thanh linear progress rieng
      // linearProgress:{
      //   display:'flex',
      //   flexDirection:'row',
      // }
      // activeStory:{
      //   "& .MuiLinearProgress-barColorPrimary": {
      //     backgroundColor: "green",
      // },
      // }
      
      

      
  })
const CardComponent=()=> {
const classes=useStyles();
const [currentStory,setCurrentStory]= useState(ListStory[0]);
const [volumeStory,setVolumeStory]=useState(true);
const [runStory,setRunStory]=useState(true);
const [countdownPerStoryImage,setcountdownPerStoryImage]=useState(5000);
// const [progressId,setProgressId]=useState(0);
const [progress,setProgress]=useState(0);
const vidRef = useRef(null);

useEffect(()=>{
  //get time when start change state
  // const before=new Date();
  // // console.log('truoc',before.getSeconds());

  const nextStory=()=>{
    setCurrentStory(ListStory[`${currentStory.id+1}`]);
    // setProgressId(progressId+1);
    // console.log(progressId);
    setProgress(progress+100/(100/(ListStory.length-1)));
    setRunStory(true);
  }
  //pause resume interval when click pause play story
  // if(runStory===false && currentStory.type==="image"){
  //   const after= new Date();
  // //  console.log('sau',after.getSeconds());
  //   console.log((after.getSeconds()-before.getSeconds()));
  //   //  setcountdownPerStoryImage((after.getTime()-before.getTime())/1000);
  // }
 
  if(runStory===true && currentStory.type==="image" && currentStory.id<ListStory.length-1){
    const interval=setInterval(nextStory,countdownPerStoryImage);
    return ()=>{
      clearInterval(interval);
      //reset 5s
      // setcountdownPerStoryImage(5000);
    }
  }
  
  
},[progress,runStory,currentStory,countdownPerStoryImage]);

const handleClickNext=()=>{
  if( currentStory.id<ListStory.length-1){
    // console.log(progress);
    setCurrentStory(ListStory[`${currentStory.id+1}`])
    setRunStory(true);
    setProgress(progress+100/(ListStory.length-1))
    // setProgressId(progressId+1);
  }
 else{
  setCurrentStory(ListStory[`${currentStory.id}`])
 }
}
const handleClickPrev=()=>{
  if(currentStory.id>0){
    // console.log(progress);
    setCurrentStory(ListStory[`${currentStory.id-1}`])
    setRunStory(true);
    setProgress(progress-100/(ListStory.length-1))
    // setProgressId(progressId-1);
  }else{
    setCurrentStory(ListStory[`${currentStory.id}`])
  }
}
const toggleVolume=()=>{
  setVolumeStory(!volumeStory);
  
}
const toggleRunStory=()=>{
  setRunStory(!runStory);
 if(currentStory.type==='video' && runStory===true){
  vidRef.current.pause();

 }else if(currentStory.type==='video' && runStory===false){
  vidRef.current.play();
 }
}
const handleEndVideo=()=>{
  //video nam cuoi ngan su kien auto change
  if(currentStory.id<ListStory.length-1){
    setCurrentStory(ListStory[`${currentStory.id+1}`]);
  }
  
}

    return (
      <>
      <Box className={classes.root}>
        <IconButton onClick={handleClickPrev}  >
        <ArrowBackIosNewIcon  />
        </IconButton>
       
        <Card className={classes.card} sx={{background:'#00695c'}} >
        <LinearProgress  variant="determinate" value={progress} />
        {/* <div className={classes.linearProgress} >
            {ListStory.map((item,index)=>{
              return(
              <>
              {(item.id)===progressId ?
              <LinearProgress  variant="determinate" value={100} style={{ width: "100%", margin: "2px", }} key={item.id} />
             :
              <LinearProgress variant="determinate" value={100} style={{ width: "100%", margin: "2px", }} key={item.id} />
              }
              </>
              )
            })}
        </div> */}
     
           
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
               {currentStory.type==="image" ? 
               <CardMedia
              sx={{marginTop:"30px",objectFit:"contain"}}
              style={{ paddingTop: "90%" }}
              image={currentStory.image}
              title="Background image"
            />: 
            <CardMedia
              ref={vidRef}
              id='myvideo'
              sx={{marginTop:"30px",objectFit:"contain"}}
              style={{minHeight:'300px'}}
              component='video'
              image={currentStory.videourl}
              title="Background image"
              muted={!volumeStory}
              onEnded={handleEndVideo}
              autoPlay
            /> }
            
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