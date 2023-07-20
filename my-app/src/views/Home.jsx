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

    return (
        <div>
            <StepPicture/>
            <Timer/>
            <Data
                lgShow={lgShow}
                setLgShow={setLgShow}
                CeremoniaShow={CeremoniaShow}
                setCeremoniaShow={setCeremoniaShow}
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
            />
        </div>
    );
};

export default Home;