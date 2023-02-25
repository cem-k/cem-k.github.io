import React from 'react'

const About = () => {
    return (
        <div className="about" id="About">
            <div className='column'>
                <div>
                    <h1> Importance of moving students around</h1>
                    <p>Moving students around in the classroom often is important for many reasons.

                        It will teach them to get to know and work with all of their fellow students. That will reduce groupings and improve the class environment.
                        It will help the teacher to better monitor student behavior and create a more positive learning environment.
                        It will keep students engaged and prevent boredom, as it teaches them to work in different environments with different classmates.</p>
                </div>

                <div>
                    <h1>Why manual is time-consuming</h1>
                    <p>There are many conditions that need to be taken into account before creating a seat map.
                        To do them manually, and to make sure all conditions are met, 
                        takes a lot of time. The seat map generator allows you to save your 
                        student lists to the database. From there you simply choose your 
                        conditions and the generator will output a random seat map, giving 
                        you a seat map with your conditions in minutes.</p>
                </div>

                <div>
                    <h1>Why manual is costly</h1>
                    <p>Making a manual seat map is time-consuming and therefore also costs the schools 
                        money. A teacher in Norway has an average hourly salary of €30. Based on 
                        research conducted at Skullerud middle school in Oslo, Norway, teachers use 
                        approximately 30 minutes to make a good seat map that takes everyone's needs 
                        into account. That would equal a cost price of €15 for a single map.</p>
                </div>
            </div>
            <button>Learn More</button>
        </div>
)}

export default About;