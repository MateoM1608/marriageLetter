import React, {useState} from "react";
import StepPicture from "./StepPicture";
import Timer from "./Timer";
import Data from "./Data";
import Pictures from "./Pictures";
import Gifts from "./Gifts";
import Footer from "./Footer";

const Home = () => {

    const [lgShow, setLgShow] = useState(false);
    const [CeremoniaShow, setCeremoniaShow] = useState(false);
    const [AgendaCeremonia] = useState("https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NG9jZXVqOXBvcjFkdjFmamdoNjdvOTVsZ2UgbWF0ZW8ubW9uc2FsdmVtZWRpbmExM0Bt&tmsrc=mateo.monsalvemedina13%40gmail.com")
    const [AgendaRecepcion] = useState("https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NG9jZXVqOXBvcjFkdjFmamdoNjdvOTVsZ2UgbWF0ZW8ubW9uc2FsdmVtZWRpbmExM0Bt&tmsrc=mateo.monsalvemedina13%40gmail.com")
    const [MapCeremonioa] = useState("https://maps.app.goo.gl/TmpY6bK7u3sxfwma8?g_st=iwb")
    const [MapRecepcion] = useState("https://maps.app.goo.gl/vzfobpzjEfy9bfcbA?g_st=iw")

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
            <Pictures/>
            <div className='divider'></div>
            <Gifts/>
            <Footer
                setCeremoniaShow={setCeremoniaShow}
                setLgShow={setLgShow}
                CeremoniaShow={CeremoniaShow}
                lgShow={lgShow}
                AgendaCeremonia={AgendaCeremonia}
                AgendaRecepcion={AgendaRecepcion}
            />
        </div>
    );
};

export default Home;