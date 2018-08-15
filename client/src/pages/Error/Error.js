import React from 'react';
import './error.css'


const Error = () => (
    
    <React.Fragment>
    <div id="error-background">
    <div id="error-four">404</div>
    <div id="error-text">UHH THAT HURTS!
    <br />
    <br />
    BUT! BETTER A<span className="error-large">BROKEN PAGE</span>
    <br />
    <br />
    THAN A<span className="error-large">BROKEN ARM</span>
    <br />
    <br />
    <a href="/">RETURN TO HOME</a>
    </div>
    </div>
    <footer id="homepage-footer">
      Copyright 2018 | Personal Planner
    </footer>
    </React.Fragment>
);


export default Error;