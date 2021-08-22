import React from 'react';
import Logo from '../images/2.png';


const Home = () => {
    return (
        <div className="main">
            <div className="box1"></div>

            <div className="box2">
                <div className="text">
                    AKIN
                </div>
            </div>

            <div className="box3">
                <div className="container">
                    <div className="home-logo">
                        <img src={Logo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;