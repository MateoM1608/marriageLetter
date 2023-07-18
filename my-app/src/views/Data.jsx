import React, {useState} from "react";
import { Container, Col, Modal, Form, FloatingLabel  } from "react-bootstrap";
import {GiBigDiamondRing} from 'react-icons/gi'
import {LiaGlassMartiniAltSolid} from 'react-icons/lia'
import { IconContext } from "react-icons";


const Data = () => {

    const [lgShow, setLgShow] = useState(false);
    const [CeremoniaShow, setCeremoniaShow] = useState(false);

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
                    <button
                        onClick={() => setLgShow(true)}
                        className="button"
                    >
                        Confirmar asistencia
                    </button>
                    {/* <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NG9jZXVqOXBvcjFkdjFmamdoNjdvOTVsZ2UgbWF0ZW8ubW9uc2FsdmVtZWRpbmExM0Bt&amp;tmsrc=mateo.monsalvemedina13%40gmail.com">
                        <img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_es.gif"/>
                    </a> */}
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
                    <h2>Recepción</h2>
                    <hr className="linea_espacio"/>
                    <h3>Día</h3>
                    <span>Sabado 16 de septiembre - 15:30hs</span>
                    <button className="button">Agendar</button>
                    <h3>Lugar</h3>
                    <span>Casa de la abuela</span>
                    <button
                        onClick={() => setCeremoniaShow(true)}
                        className="button"
                    >Confirmar asistencia</button>
                    <h3>Dirección</h3>
                    <span>Carrera 38 #49B-06 (A 4 minutos de la iglesia en dirección al parque de copacabana)</span>
                    <button className="button">¿Como llegar?</button>
                </Col>
            </Col>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_data">
                        <div className="logo_modal">
                            <IconContext.Provider value={{size:"60px", color: '#eebbbb'}}>
                                <div>
                                    <GiBigDiamondRing/>
                                </div>
                            </IconContext.Provider>
                        </div>
                        <h2>¿Asistes a la ceremonia?</h2>
                        <div>
                            <Form>
                                <div key={`inline-radio`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Si! Confirmo"
                                        name="group1"
                                        type='radio'
                                        id={`inline-radio-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="No puedo :("
                                        name="group1"
                                        type='radio'
                                        id={`inline-radio-2`}
                                    />
                                </div>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingrese nombre completo"
                                    className="mb-5"
                                >
                                    <Form.Control type="name" placeholder="" />
                                </FloatingLabel>
                            </Form>
                            <button className="button">Enviar</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={CeremoniaShow}
                onHide={() => setCeremoniaShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_data">
                        <div className="logo_modal">
                            <IconContext.Provider value={{size:"60px", color: '#eebbbb'}}>
                                <div>
                                    <GiBigDiamondRing/>
                                </div>
                            </IconContext.Provider>
                        </div>
                        <h2>¿Asistes a la Recepción?</h2>
                        <div>
                            <Form>
                                <div key={`inline-radio`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Si! Confirmo"
                                        name="group1"
                                        type='radio'
                                        id={`inline-radio-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="No puedo :("
                                        name="group1"
                                        type='radio'
                                        id={`inline-radio-2`}
                                    />
                                </div>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Ingrese nombre completo"
                                    className="mb-5"
                                >
                                    <Form.Control type="name" placeholder="" />
                                </FloatingLabel>
                            </Form>
                            <button className="button">Enviar</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Data;
