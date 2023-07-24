import React, { useEffect, useState } from "react";
import {Container} from 'react-bootstrap'
import TableComponent from '../Components/Table'
import * as XLSX from 'xlsx'
import axios from 'axios'
import env from 'react-dotenv'
import { saveAs } from 'file-saver';

const Admin = () => {


    const [ totalAsistentes, setTotalAsistentes ] = useState([]);
    const [ totalConfirmados, setTotalConfirmados ] = useState([]);
    const [ totalInvitados, setTotalInvitados ] = useState([]);

    const descargarLink = () => {

        let asistentes = [];
        let dataAsistente = [];
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
        })

    }

    const getAsistentes = () => {

        let dataAsistente = [];
        let totalConfirmados = 0;
        let totalInvitados = 0;
        axios.get(`${env.API_URL}/todos`)
        .then(res => dataAsistente = res.data)
        .then(() => {
            setTotalAsistentes(dataAsistente)
            dataAsistente.map(data => {
                totalConfirmados += data.asistiran
                totalInvitados += data.invitados
            })

            setTotalConfirmados(totalConfirmados)
            setTotalInvitados(totalInvitados)
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
            label:'Asistirán',
            data: 'confirmo'
        }
    ];

    const data = [
        {
            'nombres':'Mateo y Daniela',
            'invitados': 2,
            'asistiran': 0,
        },
        {
            'nombres':'Mateo y Daniela',
            'invitados': 2,
            'asistiran': 0,
        },
        {
            'nombres':'Mateo y Daniela',
            'invitados': 2,
            'asistiran': 0,
        }
    ]

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
                />
            </div>
            <div>
                <h1>Desargar Link de invitaciones</h1>
                <button className="button" onClick={() => descargarLink()}>Descargar</button>
            </div>
        </Container>
    )
}

export default Admin;