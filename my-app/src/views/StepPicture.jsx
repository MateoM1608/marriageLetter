import React from "react";
import {RiDoubleQuotesL, RiDoubleQuotesR} from 'react-icons/ri'
import { IconContext } from 'react-icons'
import arrowDown from '../images/arrow-down.gif'

const StepPicture = () => {
    return (
        <div className="blockFull StepPicture_component">
            <div className="divGlob">
                <h2>16.09.2023</h2>
                <div>
                    <h1>Camilo</h1>
                    <span>&</span>
                    <h1>Ana</h1>
                </div>
                <hr className="linea_espacio_blanca"/>
                <div>
                    <IconContext.Provider value={{size:"50px", color: '#c8c8c8'}}>
                        <div>
                            <RiDoubleQuotesL/>
                        </div>
                    </IconContext.Provider>
                    <h5>Cada familia tiene una historia, ¡Bienvenidos a la nuestra!</h5>
                    <IconContext.Provider value={{size:"50px", color: '#c8c8c8'}}>
                        <div>
                            <RiDoubleQuotesR/>
                        </div>
                    </IconContext.Provider>
                </div>
                <div>
                    <img src={arrowDown} className="arrowDown"  alt="arrowDown" />
                </div>
            </div>
        </div>
    );
};

export default StepPicture;