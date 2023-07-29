import React, { useEffect, useState } from "react";
import { Container, Col, Modal, Form } from "react-bootstrap";
import {GiBigDiamondRing} from 'react-icons/gi'
import {LiaGlassMartiniAltSolid} from 'react-icons/lia'
import { IconContext } from "react-icons";
import { useParams } from 'react-router-dom'
import axios from "axios";
import {ClipLoader} from 'react-spinners'
import env from 'react-dotenv'
import Swal from 'sweetalert2'


const Data = ({lgShow, CeremoniaShow, setLgShow, setCeremoniaShow, AgendaCeremonia, AgendaRecepcion, MapCeremonioa, MapRecepcion}) => {

    const { cantidad, id } = useParams();
    const [invitados, setInvitados] = useState([])
    const [ loading, setLoading ] = useState(false);
    const [update, setUpdate] = useState({
                                    asistiran : null,
                                    recepcion : null
                                })

    let showLoading;

    if(loading === true){
        showLoading = <div className="spinner"><ClipLoader color="#cc9b9a"/></div>
    }else{
        showLoading = null
    }

    const RedirectLink = (url) => {
        window.open(url);
    };

    const toggleLgShow = () => {
        setLgShow(!lgShow)
    }

    const toggleCeremonia = () => {
        setCeremoniaShow(!CeremoniaShow)
    }

    const submitCeremonia = (e) => {
        if(update.asistiran === null){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No seleccionaste ninguna opción!',
            })
        }else{
            e.preventDefault()
                setLoading(true)
                // axios.put(`http://localhost:3001/bodas`, {
                axios.put(`https://apiclubterranova-production.up.railway.app/bodas`, {
                    id:id,
                    asistencia: update.asistiran
                })
                .then(() => {
                }).then(() => {
                    setLoading(false)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Confirmaste la asistencia a la Ceremonia',
                        showConfirmButton: false,
                        timer: 1700
                    })
                    setUpdate({
                        asistiran : null,
                        recepcion : null
                    })
                    toggleLgShow(false)
                })
        }
    }

    const submitRecepcion = (e) => {
        if(update.recepcion === null){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No seleccionaste ninguna opción!',
            })
        }else{
            e.preventDefault()
            setLoading(true)
            // axios.put(`http://localhost:3001/bodas`,{
            axios.put(`https://apiclubterranova-production.up.railway.app/bodas`,{
                id: id,
                recepcion: update.recepcion
            })
            .then(() => {
            })
            .then(() => {
                setLoading(false)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Confirmaste la asistencia a la Recepción',
                    showConfirmButton: false,
                    timer: 1700
                })
                setUpdate({
                    asistiran : null,
                    recepcion : null
                })
                toggleCeremonia(false)
            })
        }
    }

    const updateForm = (data, target) => {
        data === 'recepcion' ?
        setUpdate({
            ...update,
            recepcion: target,
        })
        : setUpdate({
            ...update,
            asistiran: target
        })
    }


    useEffect(()=>{

        let _invitados = cantidad.split('-')[0]
        let arrayInv = [];
        for (let index = 1; index <= _invitados; index++) {
            arrayInv.push(index)
        }
        setInvitados(arrayInv)
    },[])

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
                    <a
                        className="hrefNone"
                        target="_blank"
                        href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MW9oZjlhY2hiaWQ5MHBobnJmbjk5czNtdnUgbWF0ZW8ubW9uc2FsdmVtZWRpbmExM0Bt&amp;tmsrc=mateo.monsalvemedina13%40gmail.com">
                        Agendar
                    </a>
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
            </Col>-
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
                        <h2>¿Cantidad de asistentes a la ceremonia?</h2>
                        <div>
                            <Form>
                                <Form.Select
                                    onChange={(e) => updateForm('ceremonia', e.target.value)}
                                    aria-label="Default select example"
                                >
                                    <option>Seleccione cantidad de personas</option>
                                    <option value={0} >No podremos asistir</option>
                                    {
                                        invitados.map((index)=>(
                                            <option key={index} value={index}>{index}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form>
                            <button
                                onClick={(e) => submitCeremonia(e)}
                                style={{marginTop:"30px"}}
                                className="button"
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                    {showLoading}
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
                        <h2>¿Cantidad de asistentes a la Recepción?</h2>
                        <div>
                            <Form>
                                <Form.Select
                                    onChange={(e) => updateForm('recepcion', e.target.value)}
                                    aria-label="Default select example"
                                >
                                    <option>Seleccione cantidad de personas</option>
                                    <option value={0} >No podremos asistir</option>
                                    {
                                        invitados.map((index)=>(
                                            <option key={index} value={index}>{index}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form>
                            <button
                                onClick={(e) => submitRecepcion(e)}
                                style={{marginTop:"30px"}}
                                className="button"
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                    {showLoading}
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Data;
