import React from "react";
import {RiDoubleQuotesL, RiDoubleQuotesR} from 'react-icons/ri'
import { IconContext } from 'react-icons'
import arrowDown from '../images/arrow-down.gif'

const StepPicture = () => {
    return (
        <div className="blockFull StepPicture_component">
            <div className="divGlob">
                <div className="step1">
                    <h2>16.09.2023</h2>
                </div>
                <div className="step2">
                    <h1>Camilo</h1>
                    <span>&</span>
                    <h1>Ana</h1>
                </div>
                <hr className="linea_espacio_blanca"/>
                <div className="step3">
                    <IconContext.Provider value={{size:"40px", color: '#c8c8c8'}}>
                        <div>
                            <RiDoubleQuotesL/>
                        </div>
                    </IconContext.Provider>
                    <h5>Cada familia tiene una historia, ¡Bienvenidos a la nuestra!</h5>
                    <IconContext.Provider value={{size:"40px", color: '#c8c8c8'}}>
                        <div>
                            <RiDoubleQuotesR/>
                        </div>
                    </IconContext.Provider>
                </div>
                <div className="step4">
                    <img src={arrowDown} className="arrowDown"  alt="arrowDown" />
                </div>
            </div>
        </div>
    );
};

export default StepPicture;