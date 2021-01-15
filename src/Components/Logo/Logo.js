import React from 'react';
import Tilt from 'react-tilt';
import eye from './eye.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">
                    <img src={eye} style={{paddingTop: '5px'}} alt='Eye by TNS from the Noun Project' />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;

