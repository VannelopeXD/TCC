import React from "react";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";


function RecentHolidayCard(props) {
    return (
        <div className="col-lg-6">
            <Card className="shadow d-flex flex-sm-row h-100 
            overflow-hidden">
                <div className="img-div img-hover col-sm6"></div>
                <div className="col-sm-6">
                    <Card.Body className="p-4"> 
                        <Card.Title className="text-start text-uppercase
                        fw-bold">{props.itemTitle}</Card.Title>
                        <ul className="list-unstyled">
                            <li className="text-start">{props.itemDescription}</li>
                            <li className="text-start">{props.itemNights}</li>
                            <li className="price text-start text-green">
                                <strong>{props.itemPrice}</strong>pp
                            </li>
                        </ul>
                        <Button variant='dark'>Veja Agora</Button>
                    </Card.Body>
                </div>
            </Card>
        </div>
    )
}

export default RecentHolidayCard;