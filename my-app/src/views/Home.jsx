import React from "react";
import StepPicture from "./StepPicture";
import Timer from "./Timer";
import Data from "./Data";
import Pictures from "./Pictures";
import Gifts from "./Gifts";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <StepPicture/>
            <Timer/>
            <Data/>
            <div className='divider'></div>
            <Pictures/>
            <div className='divider'></div>
            <Gifts/>
            <Footer/>
        </div>
    );
};

export default Home;