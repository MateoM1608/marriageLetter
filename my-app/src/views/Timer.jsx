import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Timer = () => {

    const { nombre } = useParams();
    const { cantidad } = useParams();

    const cambioNombre = (invitados) =>{
        let result
        result = invitados.replaceAll('-',' ');
        return result;
    }

    const cambioCantidad = (cantidad) =>{
        let result
        result = cantidad.replaceAll('-',' ');
        return result;
    }

    let calculateTimeLeft = () => {
        let difference = +new Date("2023-09-16T13:00:00") - +new Date();
        // console.log(difference)
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                Dias: Math.floor(difference / (1000 * 60 * 60 * 24)) ? Math.floor(difference / (1000 * 60 * 60 * 24)) : "0" ,
                Horas: Math.floor((difference / (1000 * 60 * 60)) % 24) ? Math.floor((difference / (1000 * 60 * 60)) % 24) : "0",
                Minutos: Math.floor((difference / 1000 / 60) % 60) ? Math.floor((difference / 1000 / 60) % 60) : "0" ,
                Segundos: Math.floor((difference / 1000) % 60) ?  Math.floor((difference / 1000) % 60) : " 0"
            };
        }

        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <div>
                <h2>
                    {interval}
                </h2>
                {timeLeft[interval]}
            </div>
        );
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <div className='divGlob'>
            <div className='timer_component'>
            <h6>Invitados:</h6>
            <h2>{cambioNombre(nombre)}</h2>
            <h5>({cambioCantidad(cantidad)})</h5>
            <hr className='linea_espacio'/>
                <h3>Falta</h3>
                <div className='timer_countDown'>
                    <div>
                        <h1>{timeLeft.Dias}</h1>
                        <h4>DÍAS</h4>
                    </div>
                    <span className='line_h'></span>
                    <div>
                        <h1>{timeLeft.Horas}</h1>
                        <h4>HRS</h4>
                    </div>
                    <span className='line_h'></span>
                    <div>
                        <h1>{timeLeft.Minutos}</h1>
                        <h4>MIN</h4>
                    </div>
                    <span className='line_h'></span>
                    <div>
                        <h1>{timeLeft.Segundos}</h1>
                        <h4>SEG</h4>
                    </div>
                </div>
            </div>
            <div className='divider'></div>
        </div>
    );
}

export default Timer;