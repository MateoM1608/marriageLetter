import React from "react";

const Footer = ({setCeremoniaShow,setLgShow, CeremoniaShow, lgShow}) => {

    const toggleLgShow = () => {
        setLgShow(!lgShow)
    }

    const toggleCeremonia = () => {
        setCeremoniaShow(!CeremoniaShow)
    }

    return (
        <div className="container_footer">
            <div className="names_footer">
                <h1>Camilo</h1>
                <span>&</span>
                <h1>Ana</h1>
            </div>
            <div className="links_footer">
                <h2 onClick={() => toggleLgShow(true)}>Confirmar asistencia a ceremonia</h2>
                <h2 onClick={() => toggleCeremonia(true)}>Confirmar asistencia a recepcion</h2>
                <h2>Agendar Fiesta</h2>
                <h2>Agendar Ceremonia</h2>
            </div>
        </div>
    );
};

export default Footer;