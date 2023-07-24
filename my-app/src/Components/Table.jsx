import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';

const TableComponent = ({headers, data, totalInvitados, totalConfirmados}) => {

    const [ total, setTotal ] = useState(0);

    // const totalizado = (data) => {
    //     let _total;
    //     data.map(datos => {
    //         _total += datos.asistiran
    //     })
    //     setTotal(_total)
    // }

    useEffect((data) =>{
        // totalizado(data)
    },[]);

    return (
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    {
                        headers.map((header, index) => (
                            <th key={index}>{header.label}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((dato, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{dato.nombres}</td>
                            <td>{dato.invitados}</td>
                            <td>{dato.asistiran}</td>
                        </tr>
                    ))
                }
                <tr>
                    <td></td>
                    <td>Total</td>
                    <td>{totalInvitados}</td>
                    <td>{totalConfirmados}</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default TableComponent;