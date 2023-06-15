import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';
import data from '../utils/dataSlide.json'
function CarouselRender()
{
   
    return (
        <>
        <Carousel navButtonsAlwaysVisible ></Carousel>
            {
                data.map(item=><Item key={item.id} item={item} />)
            }
        </Carousel>
        </>
    )
}
export default CarouselRender;