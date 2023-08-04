import React from "react";

const Footer = ({setCeremoniaShow,setLgShow, CeremoniaShow, lgShow, AgendaCeremonia, AgendaRecepcion}) => {

    const toggleLgShow = () => {
        setLgShow(!lgShow)
    }

    const toggleCeremonia = () => {
        setCeremoniaShow(!CeremoniaShow)
    }

    const RedirectLink = (url) => {
        window.open(url);
    };

    return (
        <div className="container_footer">
            <div className="names_footer">
                <h1>Camilo</h1>
                <span>&</span>
                <h1>Ana</h1>
            </div>
            <div className="links_footer">
                <h2 onClick={() => toggleLgShow(true)}>Confirmar asistencia a ceremonia</h2>
                <h2 onClick={() => toggleCeremonia(true)}>Confirmar asistencia a Recepción</h2>
                <h2 onClick={() => RedirectLink(AgendaCeremonia)}>Agendar Ceremonia</h2>
                <h2 onClick={() => RedirectLink(AgendaRecepcion)}>Agendar Recepción</h2>
            </div>
        </div>
    );
};

export default Footer;