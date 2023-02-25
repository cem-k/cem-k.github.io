import React, { useState } from 'react'

const Header = () => {

    return <div className="header" id="Home">
        <div className="headertext">
            <p>Seat Map made&nbsp;</p>
                <div className='inner-headings'>
                    <span>
                        easy! <br />
                        fast! <br />
                        cheap! <br />
                    </span>
                </div>
            
        </div>
        <p className='description'>Change your seat maps as you wish and as often you want in a few clicks with our easy-to-use solution.</p>
        <button>Sign Up Now!</button>
    </div>
}

export default Header;