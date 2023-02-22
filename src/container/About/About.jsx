import React from 'react'
import './About.css'

const About = () => {
    return (

        <div className='app_about'>
            <h1 className="about_header"> Importance of moving students around</h1>
            <p className="about_text">Moving students around in the classroom often is important for many reasons.

                It will teach them to get to know and work with all of their fellow students. That will reduce groupings and improve the class environment.
                It will help the teacher to better monitor student behavior and create a more positive learning environment.
                It will keep students engaged and prevent boredom, as it teaches them to work in different environments with different classmates.</p>

            <h1 className="about_header">Why manual is time-consuming</h1>
            <p className="about_text">There are many conditions that need to be taken into account before creating a seat map, such as:

                Students who have to sit in the front or the back of the classroom for different reasons (sight, if you want to have the noisy ones in the front etc.)
                Students who should not sit together (bullying, groupings, noise-makers etc.)
                Students who you would like to try to sit together (students who have evolved and you would like to pair with someone on a higher level, someone who have just started engaging with each other etc.)
                Students that must sit at a specific desk for different reasons (handicap, trouble-makers etc.)
                What will the configuration look like (1 and 1, 2 and 2, U-shape etc.)
                If you want the students to get a different partner from last time
                If you want the students to get a different seat from last time
                To do this manually, and to make sure all conditions are met, 
                takes a lot of time. The seat map generator allows you to save your 
                student lists to the database. From there you simply choose your 
                conditions and the generator will output a random seat map, giving 
                you a seat map with your conditions in minutes.</p>

            <h1 className="about_header">Why manual is costly</h1>
            <p className="about_text">Making a manual seat map is time-consuming and therefore also costs the schools 
                money. A teacher in Norway has an average hourly salary of €30. Based on 
                research conducted at Skullerud middle school in Oslo, Norway, teachers use 
                approximately 30 minutes to make a good seat map that takes everyone's needs 
                into account. That would equal a cost price of €15 for a single map.</p>

            <h1 className="about_header">Savings with the Seat Map Generator</h1>
            <p className="about_text">If a school has 30 teachers that have to make seat maps regularly, 
                and instead were to buy a yearly seat map generator subscription of €300, 
                they would save 15 hours and €450 each month, or 130 hours and €4000 a 
                year if a seat map were to be generated once a month.</p>
        </div>
)}

export default About;