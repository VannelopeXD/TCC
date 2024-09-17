import React from "react";
import './NeedInspiration.css';
import { Container } from "react-bootstrap";

function NeedInspiration() {
    return(
    <div className="need-inspiration py-5 position-relative">
        <div className='bg-shape position-absolute'></div>
        <Container>
            <div className="row">
                <div className='col-md-4 z-2'>
                    <h2 className='text-start fw-semibold'>Precisando de ajuda para montar o roteiro?</h2>
                    <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tempore soluta animi qui, consequatur expedita.</p>
                    <div className='d-flex'>
                        <h5 className='fw-semibold text-nowrap'>Contato:</h5>
                        <a href="/" className='mx-2 text-decoration-none h5 fw-semibold'>0900800700</a>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default NeedInspiration;