import React, { useRef } from "react";
import './SearchForm.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function SearchForm() {

    const checkInRef = useRef();
    const checkOutRef = useRef();

    return (
        <div className="position-relative">
            <Container>
                <Form className='search-form mx-auto p-4 mt-4 z-2 rounded'>
                    <Row className="align-items-center justify-content-center g-3">
                        <Col lg={2}>
                            <Form.Group controlId="locationSelect">
                                <Form.Select>
                                    <option>Pesquisar</option>
                                    <option value="1">Campos de Jordão</option>
                                    <option value="2">Ubatuba</option>
                                    <option value="3">Foz do Iguaçu</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col lg={2}>
                            <Form.Group controlId="routeSelect">
                                <Form.Select>
                                    <option>Roteiros</option>
                                    <option value="1">Aventureiro</option>
                                    <option value="2">Casal</option>
                                    <option value="3">Monte o seu</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col lg={2}>
                            <Form.Group controlId="checkInDate">
                                <Form.Control 
                                    type='text' 
                                    ref={checkInRef} 
                                    placeholder="Check-in-date" 
                                    onFocus={() => (checkInRef.current.type = 'date')} 
                                    onBlur={() => checkInRef.current.type = 'text'}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={2}>
                            <Form.Group controlId="checkOutDate">
                                <Form.Control 
                                    type='text' 
                                    ref={checkOutRef} 
                                    placeholder="Check-out-date" 
                                    onFocus={() => (checkOutRef.current.type = 'date')} 
                                    onBlur={() => checkOutRef.current.type = 'text'}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={2}>
                            <Button 
                                variant='dark' 
                                type='submit' 
                                className="w-100"
                                style={{ height: "calc(1.5em + .75rem + 2px)" }} // Ajustando o tamanho do botão para coincidir com os outros inputs
                            >
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default SearchForm;
