import React from "react";
import { Table } from 'react-bootstrap';

const TableComponent = ({headers, data, totalInvitados, totalAsistentes, totalRecepcion}) => {

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
                            <td>{dato.recepcion}</td>
                        </tr>
                    ))
                }
                <tr>
                    <td></td>
                    <td>Total</td>
                    <td>{totalInvitados}</td>
                    <td>{totalAsistentes}</td>
                    <td>{totalRecepcion}</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default TableComponent;