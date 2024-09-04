import React from "react";
import './HolidayPlanSection.css';
import { Container } from "react-bootstrap";
import GreenBtn from "../GreenBtn/GreenBtn";

function HolidayPlanSection(props) {
    return (
        <div className="holiday-plan-section py-5">
            <Container className="h-100 d-flex flex-column align-items-start 
            justify-content-end">
                <h3 className="text-start text-light text-capitalize fw-semibold ">
                    {props.itemHolidayPlanTitle}
                </h3>
                <p className="text-start text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    A doloremque ex officiis cumque. 
                    Debitis dignissimos cupiditate alias error molestiae, amet laboriosam harum. 
                    Explicabo ut, temporibus fuga illum rem magnam. Sit.</p>
                    <GreenBtn btnTitle='Descubra os melhores roteiros para a sua viagem!'/>
            </Container>
        </div>
    )
}

export default HolidayPlanSection;