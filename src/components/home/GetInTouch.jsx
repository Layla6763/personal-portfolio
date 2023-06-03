import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message} <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a> or <a href="https://www.linkedin.com/in/jiayi-bian-a87701189" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>.
      </p>
    </>
  );
};

export default GetInTouch;
