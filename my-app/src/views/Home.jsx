import {MdMusicNote, MdMusicOff} from 'react-icons/md'
import React, {useEffect, useState} from "react";
import { Container,Modal} from "react-bootstrap";
import { IconContext } from "react-icons";
import music from '../music/Melendi.mp3'
import StepPicture from "./StepPicture";
import Pictures from "./Pictures";
import Footer from "./Footer";
import Timer from "./Timer";
import Gifts from "./Gifts";
import Data from "./Data";

const useAudio = url => {
    const [song] = useState(new Audio(music));
    const [play, setPlay] = useState(false);

    const toggle = () => setPlay(!play);

    useEffect(() => {
        play ? song.play() : song.pause();
        },
        [play]
    );

    useEffect(() => {
        song.addEventListener('ended', () => setPlay(false));
        return () => {
        song.removeEventListener('ended', () => setPlay(false));
        };
    }, []);
    return [play, toggle];
};

const Home = () => {

    const [lgShow, setLgShow] = useState(false);
    const [CeremoniaShow, setCeremoniaShow] = useState(false);
    const [AgendaCeremonia] = useState("https://calendar.google.com/calendar/u/0?cid=ZGYxNzEwZDVjMTMwOTdiMjllMzQ0ODA3NDEwYjgyMGQ5MjZiZDU0MzNhMDFlYTJmOTI3NTg0YWYyZjMwMzAzMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t")
    const [AgendaRecepcion] = useState("https://calendar.google.com/calendar/u/0?cid=ZGYxNzEwZDVjMTMwOTdiMjllMzQ0ODA3NDEwYjgyMGQ5MjZiZDU0MzNhMDFlYTJmOTI3NTg0YWYyZjMwMzAzMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t")
    const [MapCeremonioa] = useState("https://maps.app.goo.gl/TmpY6bK7u3sxfwma8?g_st=iwb")
    const [MapRecepcion] = useState("https://maps.app.goo.gl/vzfobpzjEfy9bfcbA?g_st=iw")
    const [playMusic, setMusic] = useAudio(music);
    const [audioShow, setAudioShow] = useState(true)

    // const toggleAudioShow = () =>{
    //     setAudioShow(!audioShow)
    //     setMusic()
    // }

    const openIt = (state) => {
        setAudioShow(!audioShow)
        if(state){
            setMusic()
        }
    }

    return (

        <div>
            <StepPicture/>
            <Timer/>
            <Data
                lgShow={lgShow}
                setLgShow={setLgShow}
                CeremoniaShow={CeremoniaShow}
                setCeremoniaShow={setCeremoniaShow}
                AgendaCeremonia={AgendaCeremonia}
                AgendaRecepcion={AgendaRecepcion}
                MapCeremonioa={MapCeremonioa}
                MapRecepcion={MapRecepcion}
            />
            <div className='divider'></div>
            <Gifts/>
            <div className='divider'></div>
            <Pictures/>
            <Footer
                setCeremoniaShow={setCeremoniaShow}
                setLgShow={setLgShow}
                CeremoniaShow={CeremoniaShow}
                lgShow={lgShow}
                AgendaCeremonia={AgendaCeremonia}
                AgendaRecepcion={AgendaRecepcion}
            />
            {/* <AudioPlayer/> */}
            <div>
                <span
                    style={{position: 'fixed', top: '90%', right: '4%'}} onClick={setMusic}
                >
                    {
                        playMusic ?
                        <div className="button_music">
                            <IconContext.Provider value={{size:"25px", color: '#cc9b9a'}}>
                                <div>
                                    <MdMusicNote/>
                                </div>
                            </IconContext.Provider>
                        </div> :
                        <div className="button_music">
                            <IconContext.Provider value={{size:"25px", color: '#cc9b9a'}}>
                                <div>
                                    <MdMusicOff/>
                                </div>
                            </IconContext.Provider>
                        </div>
                    }
                    </span>
            </div>
            <Container>
                <Modal
                    size="lg"
                    show={audioShow}
                    // onHide={() => toggleAudioShow()}
                    aria-labelledby=""
                    centered
                    style={{backgroundColor:'transparent'}}
                >
                    <Modal.Body>
                        <div className="modalMusic">
                            <h2>Bienvenidos a la invitación de Camilo y Ana</h2>
                            <h5>La música de fondo es pate de la experiencia</h5>
                            <div className="">
                                <button className="buttonMusic" onClick={() => openIt(true)} >
                                    Ingresar con musica
                                </button>
                                <button className="buttonMusic" onClick={() => openIt(false)}>
                                    Ingresar sin musica
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
};

export default Home;