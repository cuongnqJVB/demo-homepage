import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Item from "../../components/Items";
import "../../sass/global/components/_component.table.scss";

const Tables = (props) => {
    const {
        columns,
        rows,
        mode
    } = props;
    console.log('rows', rows);
    if (rows && columns) {
        if (mode === "custom") {
            return (
                <Table responsive="md" className="ccs-cart-table-wrap">
                    <thead>
                        <tr>
                            {columns.map((item, index) => {
                                return (
                                    <th key={index}>{item}</th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((item, index) => {
                            return (
                                <tr>
                                    <td className="td-item-product" key={index}>{item.product}</td>
                                    <td key={index}>{item.price}</td>
                                    <td className="td-item-price" key={index}>{item.quantity}</td>
                                    <td key={index}>{item.cash}</td>
                                    {/* <td key={index}>{item.action}</td> */}
                                    <td dangerouslySetInnerHTML={{ __html: item.action }}></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            );
        } else {
            return (
                <Table responsive="md" className="ccs-table-wrap">
                    <thead>
                        <tr>
                            {columns.map((item, index) => {
                                return (
                                    <th key={index}>{item}</th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((item, index) => {
                            return (
                                <tr>
                                    <td key={index}>{item}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            );
        }
    } else {
        return (
            <div></div>
        );
    }
};

export default Tables;