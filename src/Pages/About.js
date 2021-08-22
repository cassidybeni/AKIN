import React from 'react';
import Logo from '../images/AKIN-Logo-White.png';

const About = () => {
    return (
        <div className="about-container">
            <h1>About</h1>
            <p>
                So the conversation of race is ever-present in the United States. As much as it is recognized to be a melting pot, there is a lot of rejection of the unfamiliar from one person to the next. Whether purposely or through incomprehension, this can take a toll on many people’s psyche.

                This can be caused through cultural stigma in the home, which is seen in many people who are first generation Americans, generational traumas, lack of resources and knowledge through marginalization, plain and blatant racism, lack of shared cultural experiences and many more. <br /> <br />

                There is no easy fix for healing, especially for those things that circumstance embeds into us. It is even harder to begin a healing process when you don’t  feel like you have a safety component in which to start. For those who have been lucky to seek out counseling, therapy or some form of healing have not always been met with a person who tends to us with the care we desire or seem to grasp the minute structures that come with being a person of a specific background. This is where having access to suitable, intuitive information comes in. 

                The pandemic has shone a light on our overall well being, especially our mental health.  Under the wellness umbrella we decided to design an application to help people of color connect with therapists of color. <br /> <br /> We spoke about where we thought people were health wise during the pandemic and agreed people started focusing a lot on their mental and spiritual health. A large part of this is being able to speak, mend, and be vulnerable with someone you can trust and be related to. 

            </p>
            <div className="img-container">
                <img src={Logo} /> 
            </div>
            
        </div>
    )
}

export default About;