import React from "react";
import { Container } from "react-bootstrap";
import {LiaCameraRetroSolid} from 'react-icons/lia'
import { IconContext } from "react-icons";
import CarouselComponent from '../Components/Carousel'

const Pictures = () => {
    return (
        <Container className="data_divGlob">
            <div className="container_pictures">
                <h1>Retratos de Nuestro Amor</h1>
                <h4>
                    Un minuto, un segundo, un instante que queda en la eternidad
                </h4>
                <div className="logo_picture">
                    <IconContext.Provider value={{size:"90px", color: '#eebbbb'}}>
                        <div>
                            <LiaCameraRetroSolid/>
                        </div>
                    </IconContext.Provider>
                </div>
                <CarouselComponent/>
            </div>
        </Container>
    );
};

export default Pictures;