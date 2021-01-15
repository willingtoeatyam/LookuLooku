import React from 'react';
import './ImageLinkForm.css' ;

const ImageLinkForm = () =>{
    return(
        <div>
            <p className='f3'>
                {'Looku Looku fit find face for picture. Check am see.'}
            </p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' />
                    <button className ='w-30 grow f4 link ph3 pv2 dib white bg-black'>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;