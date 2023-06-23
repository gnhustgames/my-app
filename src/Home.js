import {Stack, Button } from '@mui/material';
import {Link} from 'react-router-dom';


const Home=()=> {
    return ( 
        
        <Stack spacing={2} direction='row' sx={{display:'flex', justifyContent:'center'}}>
                <Link to="/CRUD">
                    <Button variant='contained'>
                        GetApiCRUD
                    </Button>
                </Link>
                
                <Link to="/Story ">
                        <Button variant='contained'>
                            StoryFBDemo
                        </Button>
                </Link>
        </Stack>
                
    
      
    
        
    );
}

export default Home;