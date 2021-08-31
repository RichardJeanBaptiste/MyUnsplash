import './App.css';
import { React, useState } from 'react';
import logo from './images/my_unsplash_logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCard from './components/ImageCard';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form'
import beach from './images/beach.jpg';
import bee from './images/bee.jpg';
import dev from './images/dev.jpg';
import kid from './images/kid.jpg';
import path from './images/path.jpg';

function App(props) {

  const [show, setShow] = useState(false);

  const appStyle = () => {

    let showAlert = "";
    if(show === false){
      showAlert = 1;
    }else{
      showAlert = 0.3;
    }
    
    let opac = {
      opacity: showAlert,
    }

    return opac;
  }

  let alertStyle = {
    position: 'absolute',
    width: '40%',
    height: '60%',
    opacity: 1,
    borderRadius: '12px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1',
    backgroundColor: 'white',
  }

  const alertHeading = {
    position: 'absolute',
    left: '5%',
    top: '10%',
  }

  const alertButtons = {
    position: 'absolute',
    bottom: '4%',
    right: '7%',
  }

  const formStyle = {
    position: 'absolute',
    top: '30%',
  }

  const formInputStyle = {
    width: '30.5em',
    borderRadius: '12px',
  }

  /**
   *    TODO
   * 
   *     Form start icon
   *     Fonts
   *     
   */

  return (
    <div className="App">
        <Alert show={show} variant="default" style={alertStyle}>
              <Alert.Heading style={alertHeading}>Add a new photo</Alert.Heading>

              <Form style={formStyle}>
                <Form.Group>
                  <div>
                      <Form.Label style={{marginLeft: '-90%'}}>Label</Form.Label>
                      <Form.Control style={formInputStyle} type="text" placeholder="Suspendisse elit massa"/>
                  </div>
                  <div style={{marginTop: '5%'}}>
                      <Form.Label style={{marginLeft: '-83%'}}>Photo URL</Form.Label>
                      <Form.Control  style={formInputStyle} type="text" placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."/>
                  </div>
                  
                </Form.Group>
              </Form>
              
              
              <div className="d-flex justify-content-end" style={alertButtons}>
                <Button onClick={() => setShow(false)} variant="light" style={{marginRight: '11%', backgroundColor: 'transparent'}}>
                    Cancel
                </Button>
                <Button onClick={() => setShow(false)} variant="success" style={{borderRadius: '12px'}}>
                    Submit
                </Button>
              </div>
            </Alert>

        <div className='container' style={appStyle()}>
            <div className="AppBar">
                <img  className="AppLogo" src={logo} alt='unsplash logo' width='14%' height='9%'/>
                <input className="SearchBar" type="text" placeholder='Search by name'/>
                <button className="AddButton" onClick={() => setShow(true)}>Add a photo</button>
            </div>

            <div className="imageContainer">

                <div className="imageColumn">
                    <ImageCard ImageUrl={beach} imgWidth='18em' imgHeight='14em'/>
                    <ImageCard ImageUrl={bee} imgWidth='18em' imgHeight='14em'/>
                    <ImageCard ImageUrl={dev} imgWidth='18em' imgHeight='14em'/>   
                </div>

                <div className="imageColumn" style={{marginLeft: '5%'}}>
                    <ImageCard ImageUrl={bee} imgWidth='18em' imgHeight='30em'/>
                    <ImageCard ImageUrl={kid} imgWidth='18em' imgHeight='13em'/>
                </div>

                <div className="imageColumn" style={{marginLeft: '5%'}}>
                    <ImageCard ImageUrl={path} imgWidth='18em' imgHeight='16em'/>
                    <ImageCard ImageUrl={bee} imgWidth='18em' imgHeight='27em'/>
                </div>
                

            </div>
        </div>
    </div>
  );
}

export default App;


/*





*/