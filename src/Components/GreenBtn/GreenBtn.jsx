import React from 'react';
import './GreenBtn.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function GreenBtn(props) {
  return (
    <Link to={props.btnLink}>
      <Button id='green-btn'>
        {props.btnTitle}
      </Button>
    </Link>
  );
}

export default GreenBtn;
