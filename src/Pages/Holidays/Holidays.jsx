import React from "react";
import './Holidays.css';
import SecondHeroSection from "../../Components/SecondHeroSection/SecondHeroSection";
import EveryoneHolidays from "../../Components/EveryoneHolidays/EveryoneHolidays";
import NextHoliday from "../../Components/NextHoliday/NextHoliday";
import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';

function Holidays(){
    return(
        <div className="holidays-page">
            <SecondHeroSection SecondHeroTitle='Seu roteiro perfeito!'/>
            <EveryoneHolidays/>
            <NextHoliday/>
            <HolidayPlanSection itemHolidayPlanTitle='Planeje 
            do seu jeito'/>
            <div className="mt-4 mt-sm-5"></div>
                <RecommendedSection itemRecommendedTitle='Recomendado'/>
        </div>
    )
}

export default Holidays;    