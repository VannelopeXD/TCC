import React from "react";
import { Card } from "react-bootstrap";

function LastHolidayCard(props) {
    return (
        <Card className="shadow h-100 overflow-hidden">
            <Card.Img className="img-hover" variant="top" src={props.itemImage} />
            <Card.Body className="p-4">
                <Card.Title className="text-start text-uppercase fw-bold">
                    {props.itemTitle}
                </Card.Title>
                <Card.Text className="text-start">
                    {props.itemDescription}
                </Card.Text>
                <a href="/" className="text-green text-capitalize fw-semibold">
                    Pergunte Agora
                </a>
            </Card.Body>
        </Card>
    );
}

export default LastHolidayCard;
