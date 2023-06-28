import * as React from 'react';
import { Accordion,Typography,AccordionSummary,AccordionDetails, Grid} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ListStory from '../utils/ListStory';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';



const useStyles = makeStyles({accordionSummary: {
    flexDirection: 'row-reverse',
    color:'white',
  },
  image:{
    borderRadius:'10px',
    cursor:'pointer',
    '&:hover':{
        opacity:'0.8',
        transform:'scale(1.1)'
    }
  }
}

);


const CollapseContent =(props)=>{
    const classes=useStyles();
    const[expand,setExpand]=useState(false);
   
    // const [image, setImage] = useState(null);
    //toggle expand 
    const toggleExpand=()=>{
        setExpand(!expand);
            props.toggleRunStory();
        
    }
    //click next story
    const nextStory=()=>{
        props.handleClickNext();
      
    }
    //click prev story
    const prevStory=()=>{
        props.handleClickPrev();
    
    }
    //generateThumbnail
  
    
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
            {props.currentIndexStory===0 && props.infor.type==="image" && <> 
            <Grid item xs={6}>
                 <img className={classes.image} src={props.infor.image} alt='' width='100%' height='100px'/>
            </Grid>
            <Grid item xs={6}>
            {ListStory[props.currentIndexStory+1].type==='image' ?  
                    <img className={classes.image} onClick={nextStory}  src={ListStory[props.currentIndexStory+1].image} alt='' width='100%' height='100px'/>: 
                    <img className={classes.image} onClick={nextStory}  src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>}
            </Grid>
        </>
        } 
        {/* slide dau tien la video */}
         {props.currentIndexStory===0 && props.infor.type==="video" && <> 
            <Grid item xs={6}>
        
            <img className={classes.image} onClick={nextStory} src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>
            
            </Grid>
            <Grid item xs={6}>
                    {ListStory[props.currentIndexStory+1].type==='image' ?  
                    <img className={classes.image} onClick={nextStory} src={ListStory[props.currentIndexStory+1].image} alt='' width='100%' height='100px'/>: 
                    <img className={classes.image} onClick={nextStory} src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>
                   }
            </Grid>
        </>
        }
        {/* slide cuoi cung la anh */}
            {props.currentIndexStory===ListStory.length-1 && props.infor.type==="image" && <>
                <Grid item xs={6}>
                {ListStory[props.currentIndexStory-1].type==='image' ?  
                    <img className={classes.image} onClick={prevStory} src={ListStory[props.currentIndexStory-1].image} alt='' width='100%' height='100px'/>: 
                    <img className={classes.image} onClick={prevStory} src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>}
             </Grid>
                <Grid item xs={6}>
             <img className={classes.image} src={props.infor.image} alt='' width='100%' height='100px'/>
            </Grid>
            </>} 
        {/* slide cuoi cung la video */}
            {props.currentIndexStory===ListStory.length-1 && props.infor.type==="video" && <>
            <Grid item xs={6}>
                {ListStory[props.currentIndexStory-1].type==='image' ?  
                <img className={classes.image} onClick={prevStory} src={ListStory[props.currentIndexStory-1].image} alt='' width='100%' height='100px'/>: 
                <img className={classes.image} onClick={prevStory} src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>
                }
             </Grid>
                <Grid item xs={6}>
                <img className={classes.image} onClick={nextStory} src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>
            </Grid>
            </>
            } 
            {/* slide nam giua la anh */}
            {props.currentIndexStory!==0 && props.currentIndexStory!==ListStory.length-1 &&props.infor.type==="image" &&
            <>
            <Grid item xs={4}>
            {ListStory[props.currentIndexStory-1].type==='image' ?  
                <img className={classes.image} onClick={prevStory} src={ListStory[props.currentIndexStory-1].image} alt='' width='100%' height='100px'/>: 
                <img className={classes.image} onClick={prevStory} src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>}
            </Grid> 
            <Grid item xs={4}>
            <img className={classes.image}  src={props.infor.image} alt='' width='100%' height='100px'/>
            </Grid>
            <Grid item xs={4}>
            {ListStory[props.currentIndexStory+1].type==='image' ?  
                <img className={classes.image} onClick={nextStory} src={ListStory[props.currentIndexStory+1].image} alt='' width='100%' height='100px'/>: 
                <img className={classes.image} onClick={nextStory} src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>}
            </Grid>
            </>
            }
            {/* slide nam giua la video */}
            {props.currentIndexStory!==0 && props.currentIndexStory!==ListStory.length-1 &&props.infor.type==="video" &&
            <>
            <Grid item xs={4}>
            {ListStory[props.currentIndexStory-1].type==='image' ?  
                <img className={classes.image} onClick={prevStory} src={ListStory[props.currentIndexStory-1].image} alt='' width='100%' height='100px'/>: 
                <img className={classes.image} onClick={prevStory} src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>}
            </Grid> 
            <Grid item xs={4}>
            <img className={classes.image}  src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>
            </Grid>
            <Grid item xs={4}>
            {ListStory[props.currentIndexStory+1].type==='image' ?  
                <img className={classes.image} onClick={nextStory} src={ListStory[props.currentIndexStory+1].image} alt='' width='100%' height='100px'/>: 
                <img className={classes.image} onClick={nextStory} src="https://www.shutterstock.com/image-vector/play-button-icon-vector-illustration-260nw-1697833306.jpg" alt='' width='100%' height='100px'/>}
            </Grid>
            </>
            }
        
        </Grid>
        </AccordionDetails>
      </Accordion>
      )
}
export default CollapseContent;


