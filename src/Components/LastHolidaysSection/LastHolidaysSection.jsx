import React from "react";
import './LastHolidaySection.css';
import { Container, Row, Col } from "react-bootstrap";
import LastHolidaysItems from "../../Assets/LastHolidaysItems";
import LastHolidayCard from "./LastHolidayCard";

function LastHolidaySection() {
    return (
        <div className="last-holidays-section my-4 my-sm-5">
            <Container>
                <h2 className="text-uppercase fw-semibold my-4 my-sm-5 pt-lg-4">Teste agora!</h2>
                <Row className="g-4"> {/* Use `Row` com a classe `g-4` do Bootstrap para espaçamento */}
                    {
                        LastHolidaysItems.map((item) => (
                            <Col md={4} key={item.id}> {/* Usa `Col` para definir quantas colunas o card ocupará */}
                                <LastHolidayCard 
                                    itemImage={item.itemImage} 
                                    itemTitle={item.itemTitle} 
                                    itemDescription={item.itemDescription} 
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
}

export default LastHolidaySection;
