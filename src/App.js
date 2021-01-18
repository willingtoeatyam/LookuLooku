import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Rank from './Components/Rank/Rank';
import  particular from './Particles.js';

const app =new Clarifai.App({
    apiKey: 'ff1d290814384e9b92df1908a2d9f269'
});

const particlesOptions = particular;

class App extends Component {
    constructor(){
        super();
        this.state = {
            input:'',
        }
    }

    onInputChange = (event) => {
        console.log(event.target.value);        
    }

    onButtonSubmit = () => {
        console.log('click');
        const texxx= app.models.initModel('d02b4508df58432fbb84e800597b8959');
        console.log('tired', texxx);
        app.models.predict( "a403429f2ddf4b49b307e318f00e528b" ,"https://models.com/newfaces/dailyduo/47554").then(
            function(response) {
                console.log('works' ,response);
            },
            function(err){
                console.log('error oo', err);
            }
        );
    }

    render(){
        return(
            <div className='App'>
                <Particles className='particles' params={particlesOptions}/>
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm 
                    onInputChange={this.onInputChange} 
                    onButtonSubmit={this.onButtonSubmit}
                />                
                <FaceRecognition />
            </div>
        );
    }
}

export default App;