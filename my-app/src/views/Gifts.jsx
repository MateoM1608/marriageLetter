import React from "react";
import { Container } from "react-bootstrap";
import {BsGift} from 'react-icons/bs'
import { IconContext } from "react-icons";

const Gifts = () => {
    return (
        <Container>
            <div className="container_gift">
                <h1>Regalos</h1>
                <div className="logo_picture">
                    <IconContext.Provider value={{size:"60px", color: '#eebbbb'}}>
                        <div>
                            <BsGift/>
                        </div>
                    </IconContext.Provider>
                </div>
                <h4>
                    Lluvia de sobres
                </h4>
            </div>
        </Container>
    );
};

export default Gifts;