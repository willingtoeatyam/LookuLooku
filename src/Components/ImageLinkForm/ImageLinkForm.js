import React from 'react';
import './ImageLinkForm.css' ;

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) =>{
    return(
        <div>
            <p className='f3'>
                {'Looku Looku fit find face for picture. Check am see.'}
            </p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input 
                        className='f4 pa2 w-70 center' type='tex' placeholder='image url here, please ;)'
                        onChange={onInputChange}
                    />
                    <button 
                        className ='w-30 grow f4 link ph3 pv2 dib white bg-black' 
                        onClick={onButtonSubmit}>
                            Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;