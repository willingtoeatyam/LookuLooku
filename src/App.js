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
    apiKey: '16e53b8ca5274236b3c9ef904ce70739'
});

const particlesOptions = particular;

class App extends Component {
    constructor(){
        super();
        this.state = {
            input:'',
            imageUrl: ''
        }
    }

    onInputChange = (event) => {
        this.setState({ input: event.target.value });
    }

    onButtonSubmit = () => {
        this.setState({ imageUrl: this.state.input });
        app.models.predict( 
                Clarifai.FACE_DETECT_MODEL ,
                this.state.input)
            .then(
                function(response) {
                    console.log('works' , response.outputs[0].data.regions[0].region_info.bounding_box);
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
                <FaceRecognition imageUrl={this.state.imageUrl}/>
            </div>
        );
    }
}

export default App;