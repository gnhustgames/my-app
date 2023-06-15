import { Paper, Button } from '@mui/material'
function Item({item})
{
    return (
        <Paper>
            <img src={item.image} alt={item.name}/>
            <h2>{item.name}</h2>
          

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
export default Item;