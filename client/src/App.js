import './App.css';
import { React } from 'react';
import logo from './images/my_unsplash_logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCard from './components/ImageCard';
import beach from './images/beach.jpg';
import bee from './images/bee.jpg';
import dev from './images/dev.jpg';
import kid from './images/kid.jpg';
import path from './images/path.jpg';

function App(props) {


  

  /*
  const [ intro, setIntro ] = useState("");

  fetch('/hello')
  .then(response => response.text())
  .then(data => setIntro(data))
  */

  return (
    <div className="App">
        <div className='container'>
            <div className="AppBar">
                <img  className="AppLogo" src={logo} alt='unsplash logo' width='14%' height='9%'/>
                <input className="SearchBar" type="text" placeholder='Search by name'/>
                <button className="AddButton">Add a photo</button>
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