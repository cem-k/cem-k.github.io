import React from 'react';
import { images } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    return (
        <div className="about" id="About">
            <div className='column'>
                <div className="card manual">
                    <h1>Go from this ...</h1>
                    <br />
                    <img src={images.manual} />
                    <br /><br />
                    <b>Avoid manual work</b>
                    <p>
                        These are the things teachers have to stress about when creating a new map:
                    </p>
                    <p>
                        - Who should sit together<br />
                        - Who should not sit close<br />
                        - Who should sit in the front<br />
                        - Who should sit in the back<br />
                        - Everyone should get a new partner<br />
                        - Everyone should get a new seat<br />
                        <b>How can I make all of this work ?!</b>
                    </p>
                    <p>Teachers use approximately 30 minutes to make a manual map.</p>
                </div>

                <div className="card generator">
                    <h1>... to this</h1>
                    <img src={images.makemap}/>
                    <b>Save time</b>
                    <p>
                        
                        To use the generator takes 2 minutes. 
                        You simply upload your student list, choose your conditions, 
                        and there you have a generated map, fully customizable.
                    </p>
                    <b>Save money</b>
                    <p>
                        A new map is on average generated every 3-4 weeks.
                        A teacher in Norway has an average hourly salary of €30.
                        That would equal a cost price of €400 per teacher per year for 
                        manual work that can be automated and reduced from 30 minutes to 2 minutes.
                        Saved time is saved money!
                    </p>
                </div>
            </div>
            <button>Learn More</button>
        </div>
)}

export default About;