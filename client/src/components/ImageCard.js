import { React, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css'

function ImageCard(props) {

    const [showOverlay, setShowOverlay] = useState(false)

    /*
    const [imageStyle] = useState({
        position: 'absolute',
        top: props.imgTop,
        left: props.imgLeft,
        width: props.imgWidth,
        height: props.imgHeight,
        borderRadius: '16px',
        backgroundImage: `url(${props.ImageUrl})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
    })
    */

    function checkUrl() {
        if(props.ImageUrl === '' || props.ImageUrl === undefined){
            return ""
        }else{
            return props.ImgUrl 
        }
    }
    
    const imageStyle = {
        position: 'absolute',
        top: props.imgTop,
        left: props.imgLeft,
        width: props.imgWidth,
        height: props.imgHeight,
        borderRadius: '16px',
        backgroundImage: `url(${checkUrl()})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
    }
   
    const [buttonStyle] = useState({
        fontFamily: 'Montserrat',
        fontSize: '15px',
        borderRadius: '38px',
        width: '5em',
        height: '2em',
        position: 'absolute',
        right: 30,
    })

    const cardText = {
        fontFamily: 'Montserrat',
        fontSize: '15px',
        lineHeight: '22px',
        fontWeight: 'bold',
        fontStlye: 'normal',
        color: '#FFFFFF',
        position: 'absolute',
        bottom: 40,
        width: '250px',
    }

    const overlayStyle = () => {

        let displayState = "";

        if(showOverlay === false){
            displayState = 'none'
        }else{
            displayState = 'block'
        }

        const show = {
            position: 'relative',
            display: displayState,
            width: props.imgWidth,
            height: props.imgHeight,
        }

        return show;
    }
    
    
    return (

        
        <Card style={imageStyle} onMouseOver={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)}>
            <Card.ImgOverlay>
                <div style={overlayStyle()} >
                    <Button style={buttonStyle} variant="outline-danger" onClick={props.removeImageHandler}>delete</Button>
                    <Card.Text style={cardText}>
                        {props.label}
                    </Card.Text>
                </div>
            </Card.ImgOverlay>
        </Card>
            
        
        
    )
}

export default ImageCard;