import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

function SocialIcon(props) {
    return (
        <div className="social-icon">
            <a href={props.instagram}>
                <div className="social-icon-container">   
                    <FontAwesomeIcon className="social-icon-actual" icon={ faInstagram } />    
                </div>
            </a>
            <a href={props.github}>
                <div className="social-icon-container">
                    <FontAwesomeIcon className="social-icon-actual" icon={ faGithub } />
                </div>
            </a>
        </div>
    )
}

export default SocialIcon;