import React, {Component} from 'react';
import './social.css'

export default class SocialHome extends Component {
  render() {
    return (
        <div id="top-separator">
            <div className="animated fadeInUp">
                <div id="social-icons">
                <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                <a href="https://plus.google.com/"><i className="fab fa-google-plus-g"></i></a>
                </div>
            </div>
        </div>
    );
  }
}