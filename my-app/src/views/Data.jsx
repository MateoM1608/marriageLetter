import React from "react";
import { Container, Col } from "react-bootstrap";
import {GiBigDiamondRing} from 'react-icons/gi'
import {LiaGlassMartiniAltSolid} from 'react-icons/lia'
import { IconContext } from "react-icons";

const Data = () => {
    return (
        <Container className="data_divGlob">
            <Col className="container_data">
                <Col className="data_card">
                    <div className="logo_data">
                        <IconContext.Provider value={{size:"90px", color: '#eebbbb'}}>
                            <div>
                                <GiBigDiamondRing/>
                            </div>
                        </IconContext.Provider>
                    </div>
                    <hr className="linea_espacio"/>
                    <h2>Ceremonia</h2>
                    <hr className="linea_espacio"/>
                    <h3>Día</h3>
                    <span>Sabado 16 de septiembre - 13:30hs</span>
                    <button className="button">Agendar</button>
                    <h3>Lugar</h3>
                    <span>Parroquia San Juan de la Tasajera</span>
                    <button className="button">Confirmar asistencia</button>
                    <h3>Dirección</h3>
                    <span>Cra. 28, Copacabana, Antioquia</span>
                    <button className="button">¿Como llegar?</button>
                </Col>
                <Col className="data_card">
                    <div className="logo_data">
                        <IconContext.Provider value={{size:"90px", color: '#eebbbb'}}>
                            <div>
                                <LiaGlassMartiniAltSolid/>
                            </div>
                        </IconContext.Provider>
                    </div>
                    <hr className="linea_espacio"/>
                    <h2>Fiesta</h2>
                    <hr className="linea_espacio"/>
                    <h3>Día</h3>
                    <span>Sabado 16 de septiembre - 13:30hs</span>
                    <button className="button">Agendar</button>
                    <h3>Lugar</h3>
                    <span>Sabado 16 de septiembre - 13:30hs</span>
                    <button className="button">Confirmar asistencia</button>
                    <h3>Dirección</h3>
                    <span>Sabado 16 de septiembre - 13:30hs</span>
                    <button className="button">¿Como llegar?</button>
                </Col>
            </Col>
        </Container>
    );
};

export default Data;
