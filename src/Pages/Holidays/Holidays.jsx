import React from "react";
import './Holidays.css';
import SecondHeroSection from "../../Components/SecondHeroSection/SecondHeroSection";
import EveryoneHolidays from "../../Components/EveryoneHolidays/EveryoneHolidays";
import NeedInspirationSection from '../../Components/NeedInspiration/NeedInspiration';

function Holidays(){
    return(
        <div className="holidays-page">
            <SecondHeroSection SecondHeroTitle='Seu roteiro perfeito!'/>
            <EveryoneHolidays/>
            <NeedInspirationSection />
        </div>
    )
}

export default Holidays;    