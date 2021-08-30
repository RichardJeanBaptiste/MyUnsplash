import { React } from 'react';
import Card from 'react-bootstrap/Card'


function ImageCard(props) {

    
    const imageStyle1 = {
        width: props.imgWidth,
        height: props.imgHeight,
        borderRadius: '16px',
        backgroundImage: `url(${props.ImageUrl})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        marginBottom: '7%',
      }

    return (
        <Card style={imageStyle1}>
            
        </Card>
    )
}

export default ImageCard;