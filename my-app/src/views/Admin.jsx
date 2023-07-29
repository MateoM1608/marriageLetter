import React, { useEffect, useState } from "react";
import {Container} from 'react-bootstrap'
import TableComponent from '../Components/Table'
import * as XLSX from 'xlsx'
import axios from 'axios'
import env from 'react-dotenv'
import { saveAs } from 'file-saver';
import {ClipLoader} from 'react-spinners'

const Admin = () => {


    const [ totalAsistentes, setTotalAsistentes ] = useState([]);
    const [ totalConfirmados, setTotalConfirmados ] = useState(0);
    const [ totalInvitados, setTotalInvitados ] = useState(0);
    const [ totalRecepcion, setTotalRecepcion ] = useState(0);
    const [ loading, setLoading ] = useState(false);

    let showLoading;

    if(loading === true){
        showLoading = <div className="spinner"><ClipLoader color="#cc9b9a"/></div>
    }else{
        showLoading = null
    }

    const descargarLink = () => {
        let asistentes = [];
        let dataAsistente = [];
        setLoading(true)
        axios.get(`${env.API_URL}/link`)
        .then(res => {
            dataAsistente = res.data
        }).then(() => {
            dataAsistente.map(p => {
                asistentes.push({
                    Nombres: p.nombres,
                    Links: p.link,
                })
            })
            let data = XLSX.utils.json_to_sheet(asistentes, {
                header: [
                    "Nombres",
                    "Links",
                ]
            });

            data["A1"].v = "Nombres";
            data["B1"].v = "Links";

            var workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(
                workbook,
                data,
                "Links"
            );

            var wopts = { bookType: "xlsx", bookSST: false, type: "array" };
            var wbout = XLSX.write(workbook, wopts);
            saveAs(
                new Blob([wbout], { type: "application/octet-stream" }),
                "Links_invitaciones.xlsx"
            );
            setLoading(false)
        })

    }

    const getAsistentes = () => {
        setLoading(true)

        let dataAsistente = [];
        let totalConfirmados = 0;
        let totalInvitados = 0;
        let totalRecepcion = 0;
        axios.get(`${env.API_URL}/todos`)
        .then(res => dataAsistente = res.data)
        .then(() => {
            setTotalAsistentes(dataAsistente)
            dataAsistente.map(data => {
                totalConfirmados += data.asistiran
                totalInvitados += data.invitados
                totalRecepcion += data.recepcion
            })

            setTotalConfirmados(totalConfirmados)
            setTotalInvitados(totalInvitados)
            setTotalRecepcion(totalRecepcion)
            setLoading(false)
        })
    }

    const headers = [
        {
            label:'Nombres',
            data: 'nombres'
        },
        {
            label:'Invitados',
            data:'invitados'
        },
        {
            label:'Ceremonia',
            data: 'asistiran'
        },
        {
            label:'Recepción',
            data: 'recepcion'
        }
    ];

    useEffect(() => {
        getAsistentes()
    },[])

    return (
        <Container className="container_admin">

            <div>
                <TableComponent
                    headers={headers}
                    data={totalAsistentes}
                    totalInvitados={totalInvitados}
                    totalAsistentes={totalConfirmados}
                    totalRecepcion={totalRecepcion}
                />
            </div>
            <div>
                <h1>Desargar Link de invitaciones</h1>
                <button className="button" onClick={() => descargarLink()}>Descargar</button>
            </div>
            {showLoading}
        </Container>
    )
}

export default Admin;