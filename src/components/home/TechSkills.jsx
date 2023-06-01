import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

const IconSection = () => {
  return (
    <div className="container-lg mt-5 bg-blue">
      <h1 className="text-center">Skills</h1>
        <div className="techskills-section">
        <div className="skill">
            <FontAwesomeIcon icon={faCode} size = "3x"/>
            <span className="skill-name">C++</span>
        </div>
        <div className="skill">
            <FontAwesomeIcon icon={faCode} size = "3x"/>
            <span className="skill-name">Qt</span>
        </div>
        <div className="skill">
            <FontAwesomeIcon icon={faJava} size = "3x"/>
            <span className="skill-name">Java</span>
        </div>
        <div className="skill">
            <FontAwesomeIcon icon={faCss3Alt} size = "3x"/>
            <span className="skill-name">CSS</span>
        </div>
        <div className="skill">
            <FontAwesomeIcon icon={faHtml5} size = "3x"/>
            <span className="skill-name">HTML</span>
        </div>
        <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size = "3x"/>
            <span className="skill-name">SQL</span>
        </div>
        </div>
    </div>
  );
};

export default IconSection;
