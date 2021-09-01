/**
   *    TODO
   * 
   *     Form start icon
   *     Fonts
   *     
   */


import './App.css';
import { React, useState, useEffect } from 'react';
import logo from './images/my_unsplash_logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { alertHeading, alertStyle, alertButtons, formStyle, formInputStyle, } from './AppStyles';
import ImageCard from './components/ImageCard';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form'


function App(props) {

  const [show, setShow] = useState(false);

  const [imageList, setImageList] = useState(null);

  const [label, setLabel] = useState("");

  const [linkToSend, setLinkToSend] = useState("");

  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch('/images')
    .then(response => response.json())
    .then(data => {
      setImageList(data.reverse())
    })
    .catch((err) => {
      console.log(JSON.stringify(err))
    })

  },[])

  useEffect(() => {
    if(reload === true){
      fetch('/images')
      .then(response => response.json())
      .then(data => {
        setImageList(data.reverse())
      })
      .catch((err) => {
        console.log(err)
      })
      setReload(false)
    }

  },[imageList, reload, setReload])


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

  function handleLabelChange(e){
      setLabel(e.target.value);
  }

  function handleLinkChange(e){
      setLinkToSend(e.target.value)
  }

  function removeImage(id) {
    fetch(`/images/remove/${id}`, {
        method: 'POST',
    })

    setReload(true)
  }  

  function addImage(){
    const data = { name: label, link: linkToSend}
    fetch(`/images/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    setShow(false)
    setReload(true)
  }
 

  const ImageContainer = () => {
    if(imageList === null){
      return (
        <div></div>
      )
    }else{

      let count = 0;
      let x = imageList.map((data) => {
        count++;
        if(count === 1){
          
          return (<ImageCard ImageUrl={data.link} label={data.name} removeImageHandler={() => removeImage(data._id)} imgWidth='18em' imgHeight='14em' imgTop='20%'/>)
        }else if(count === 2){
          return (<ImageCard ImageUrl={data.link}  label={data.name} removeImageHandler={() => removeImage(data._id)} imgWidth='18em' imgHeight='14em' imgTop='65%'/>)
        }else if(count === 3){
          return(<ImageCard ImageUrl={data.link} label={data.name} removeImageHandler={() => removeImage(data._id)} imgWidth='18em' imgHeight='14em' imgTop='110%'/>)
        }else if(count === 4){
          return(<ImageCard ImageUrl={data.link} label={data.name} removeImageHandler={() => removeImage(data._id)} imgWidth='22em' imgHeight='30em' imgTop='20%' imgLeft='38%'/>)
        }else if(count === 5){
          return(<ImageCard ImageUrl={data.link} label={data.name} removeImageHandler={() => removeImage(data._id)} imgWidth='22em' imgHeight='13em'  imgTop='113%' imgLeft='38%'/>)
        }else if(count === 6){
          return(<ImageCard ImageUrl={data.link}  label={data.name} removeImageHandler={() => removeImage(data._id)} imgWidth='18em' imgHeight='16em' imgTop='20%' imgLeft='75%'/>)
        }else if(count === 7){
          return(<ImageCard ImageUrl={data.link} label={data.name} removeImageHandler={() => removeImage(data._id)} imgWidth='18em' imgHeight='27em' imgTop='70%' imgLeft='75%'/>)
        }
        return <></>
      })

      return(x)
    }
  }

  return (
    <div className="App">
        <Alert show={show} variant="default" style={alertStyle}>
              <Alert.Heading style={alertHeading}>Add a new photo</Alert.Heading>

              <Form style={formStyle}>
                <Form.Group>
                  <div>
                      <Form.Label style={{marginLeft: '-90%'}}>Label</Form.Label>
                      <Form.Control style={formInputStyle} type="text" placeholder="Suspendisse elit massa" onChange={handleLabelChange}/>
                  </div>
                  <div style={{marginTop: '5%'}}>
                      <Form.Label style={{marginLeft: '-83%'}}>Photo URL</Form.Label>
                      <Form.Control  style={formInputStyle} type="text" onChange={handleLinkChange} placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."/>
                  </div>
                  
                </Form.Group>
              </Form>
              
              
              <div className="d-flex justify-content-end" style={alertButtons}>
                <Button onClick={() => setShow(false)} variant="light" style={{marginRight: '11%', backgroundColor: 'transparent'}}>
                    Cancel
                </Button>
                <Button onClick={addImage} variant="success" style={{borderRadius: '12px'}}>
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
              <ImageContainer/>
           </div>
            
          </div>
            
    </div>
  );
}

export default App;
