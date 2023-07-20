import React, {useState} from "react";
import { Container, Col, Modal, Form, FloatingLabel  } from "react-bootstrap";
import {GiBigDiamondRing} from 'react-icons/gi'
import {LiaGlassMartiniAltSolid} from 'react-icons/lia'
import { IconContext } from "react-icons";


const Data = ({lgShow, CeremoniaShow, setLgShow, setCeremoniaShow}) => {

    // const [lgShow, setLgShow] = useState(false);
    // const [CeremoniaShow, setCeremoniaShow] = useState(false);
    const [AgendaCeremonia] = useState("https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NG9jZXVqOXBvcjFkdjFmamdoNjdvOTVsZ2UgbWF0ZW8ubW9uc2FsdmVtZWRpbmExM0Bt&tmsrc=mateo.monsalvemedina13%40gmail.com")
    const [AgendaRecepcion] = useState("https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NG9jZXVqOXBvcjFkdjFmamdoNjdvOTVsZ2UgbWF0ZW8ubW9uc2FsdmVtZWRpbmExM0Bt&tmsrc=mateo.monsalvemedina13%40gmail.com")
    const [MapCeremonioa] = useState("https://maps.app.goo.gl/TmpY6bK7u3sxfwma8?g_st=iwb")
    const [MapRecepcion] = useState("https://maps.app.goo.gl/vzfobpzjEfy9bfcbA?g_st=iw")

    const RedirectLink = (url) => {
        window.open(url);
    };

    const toggleLgShow = () => {
        setLgShow(!lgShow)
    }

    const toggleCeremonia = () => {
        setCeremoniaShow(!CeremoniaShow)
    }

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
                    <button className="button" onClick={() => RedirectLink(AgendaCeremonia)}>
                        Agendar
                    </button>
                    <h3>Lugar</h3>
                    <span>Parroquia San Juan de la Tasajera</span>
                    <button onClick={() => toggleLgShow(true)} className="button" >
                        Confirmar asistencia
                    </button>
                    <h3>Dirección</h3>
                    <span>Cra. 28, Copacabana, Antioquia</span>
                    <button className="button" onClick={() => RedirectLink(MapCeremonioa)} >
                        ¿Como llegar?
                    </button>
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
                    <button className="button" onClick={() => RedirectLink(AgendaRecepcion)}>Agendar</button>
                    <h3>Lugar</h3>
                    <span>Casa de la abuela</span>
                    <button
                        onClick={() => toggleCeremonia(true)}
                        className="button"
                    >Confirmar asistencia</button>
                    <h3>Dirección</h3>
                    <span>Carrera 38 #49B-06 (A 4 minutos de la iglesia en dirección al parque de copacabana)</span>
                    <button className="button" onClick={() => RedirectLink(MapRecepcion)}>
                        ¿Como llegar?
                    </button>
                </Col>
            </Col>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => toggleLgShow(false)}
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
                onHide={() => toggleCeremonia(false)}
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
                                    <LiaGlassMartiniAltSolid/>
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
