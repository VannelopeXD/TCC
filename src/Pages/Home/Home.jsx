import React from "react";
import './Home.css';
import HeroSection from "../../Components/HeroSection/HeroSection";
import SearchForm from "../../Components/SearchForm/SearchForm";
import LastHolidaySection from "../../Components/LastHolidaysSection/LastHolidaysSection";
import RecommendedSection from "../../Components/RecommendedSection/RecommendedSection";
import HolidayPlanSection from "../../Components/HolidayPlanSection/HolidayPlanSection";
import FavouritesSection from "../../Components/FavouritesSection/FavouritesSection";
import RecentHolidays from "../../Components/RecentHolidays/RecentHolidays";
import NeedInspiration from "../../Components/NeedInspiration/NeedInspiration";




function Home(){
    return (
        <div className='home-page'>
            <HeroSection/>
            <SearchForm/>
            <LastHolidaySection/>
            <div className="my-4 my-sm-5">
                <RecommendedSection itemRecommendedTitle='Recomendado'/>
            </div>
            <HolidayPlanSection itemHolidayPlanTitle='Planeje suas férias 😎'/>
            <FavouritesSection/>
            <RecentHolidays/>
            <NeedInspiration/>
        </div>
    )
}

export default Home;