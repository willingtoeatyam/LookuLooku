import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import  particular from './Particles.js';

const particlesOptions = particular;

class App extends Component {
    render(){
        return(
            <div className='App'>
                <Particles className='particles' params={particlesOptions}/>
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm />                
                {/* <FaceRecognition /> */}
            </div>
        );
    }
}

export default App;