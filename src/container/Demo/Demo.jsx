import React from 'react';

import { images } from '../../constants';

const Demo = () => {
  return (
    <div className='demo' id='Demo'>
        <h1>Demo</h1>
        <div>
            <img src={images.homepage}/>
        </div>
    </div>
  )
}

export default Demo;