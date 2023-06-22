import * as React from 'react';
import { Accordion,Typography,AccordionSummary,AccordionDetails} from '@mui/material';
import { makeStyles } from '@mui/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const useStyles = makeStyles({expandIcon: {
    marginLeft: 'auto', // Moves the expand icon to the left side
  },}
  );

const CollapseContent =(props)=>{
    const classes=useStyles();
    return(
        <Accordion
        sx={{
          position: "absolute",
          bottom: 0,
          width:'100%',
          backgroundColor:'#00695c',
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} className={classes.expandIcon}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      )
}
export default CollapseContent;


