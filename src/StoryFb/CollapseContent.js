import * as React from 'react';
import { Accordion,Typography,AccordionSummary,AccordionDetails, Grid, CardMedia} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ListStory from '../utils/ListStory';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

const useStyles = makeStyles({accordionSummary: {
    flexDirection: 'row-reverse',
    color:'white',
  }
});


const CollapseContent =(props)=>{
    const classes=useStyles();
    const[expand,setExpand]=useState(false);
    const toggleExpand=()=>{
        setExpand(!expand);
        console.log('click expand');
        console.log(props);
            props.toggleRunStory();
        
    }

    return(
        <Accordion
        sx={{
          position: "absolute",
          bottom: 0,
          width:'100%',
          backgroundColor:'#00695c',
        }}
        expanded={expand}
      >
     
        <AccordionSummary expandIcon={<KeyboardArrowUpIcon onClick={toggleExpand} sx={{color:'white'}} />} className={classes.accordionSummary}>
        <Typography sx={{color:'white'}}>{props.infor.view} người xem</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={2}>
            {/* slide dau tien la anh  */}
            {props.infor.id===0 && props.infor.type==="image" && <> 
            <Grid item xs={6}>
                 <img  src={props.infor.image} alt='' width='100%' height='100px'/>
            </Grid>
            <Grid item xs={6}>
            {ListStory[props.infor.id+1].type==='image' ?  
                    <img src={ListStory[props.infor.id+1].image} alt='' width='100%' height='100px'/>: 
                    <img src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>}
            </Grid>
        </>
        } 
        {/* slide dau tien la video */}
         {props.infor.id===0 && props.infor.type==="video" && <> 
            <Grid item xs={6}>
                 <img src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>
            </Grid>
            <Grid item xs={6}>
                
                    {ListStory[props.infor.id+1].type==='image' ?  
                    <img src={ListStory[props.infor.id+1].image} alt='' width='100%' height='100px'/>: 
                    <img src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>}
            
            </Grid>
        </>
        } 

        {/* slide cuoi cung la anh */}
            {props.infor.id===ListStory.length-1 && props.infor.type==="image" && <>
                <Grid item xs={6}>
                {ListStory[props.infor.id-1].type==='image' ?  
                    <img src={ListStory[props.infor.id-1].image} alt='' width='100%' height='100px'/>: 
                    <img src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>}
             </Grid>
                <Grid item xs={6}>
             <img src={props.infor.image} alt='' width='100%' height='100px'/>
            </Grid>
            </>} 
        {/* slide cuoi cung la video */}
            {props.infor.id===ListStory.length-1 && props.infor.type==="video" && <>
            <Grid item xs={6}>
                {ListStory[props.infor.id-1].type==='image' ?  
                <img src={ListStory[props.infor.id-1].image} alt='' width='100%' height='100px'/>: 
                <img src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>}
               
             </Grid>
                <Grid item xs={6}>
                <img src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>
            
            </Grid>
            </>} 
            {/* slide nam giua la anh */}
            {props.infor.id!==0 && props.infor.id!==ListStory.length-1 &&props.infor.type==="image" &&
            <>
            <Grid item xs={4}>
            {ListStory[props.infor.id-1].type==='image' ?  
                <img src={ListStory[props.infor.id-1].image} alt='' width='100%' height='100px'/>: 
                <img src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>}
            </Grid> 
            <Grid item xs={4}>
            <img src={props.infor.image} alt='' width='100%' height='100px'/>
            </Grid>
            <Grid item xs={4}>
            {ListStory[props.infor.id+1].type==='image' ?  
                <img src={ListStory[props.infor.id+1].image} alt='' width='100%' height='100px'/>: 
                <img src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>}
            </Grid>
            </>
            }
            {/* slide nam giua la video */}
            {props.infor.id!==0 && props.infor.id!==ListStory.length-1 &&props.infor.type==="video" &&
            <>
            <Grid item xs={4}>
            {ListStory[props.infor.id-1].type==='image' ?  
                <img src={ListStory[props.infor.id-1].image} alt='' width='100%' height='100px'/>: 
                <img src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>}
            </Grid> 
            <Grid item xs={4}>
            <img src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>
            </Grid>
            <Grid item xs={4}>
            {ListStory[props.infor.id+1].type==='image' ?  
                <img src={ListStory[props.infor.id+1].image} alt='' width='100%' height='100px'/>: 
                <img src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>}
            </Grid>
            </>
            }
        
        </Grid>
        </AccordionDetails>
      </Accordion>
      )
}
export default CollapseContent;


