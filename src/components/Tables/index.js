import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Item from "../../components/Items";
import "../../sass/global/components/_component.table.scss";

const Tables = (props) => {
    const {
        columns,
        rows,
        mode,
        marginTop
    } = props;
    if (rows.length > 0 && columns.length > 0) {
        if (mode === "custom") {
            return (
                <Table responsive="md" className="ccs-cart-table-wrap" style={{ marginTop: marginTop }}>
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
                                    <td className="td-item-price" key={index}>
                                        <span>435.000 đ</span>
                                        <span>{item.price}</span>
                                    </td>
                                    <td key={index}>{item.quantity}</td>
                                    <td key={index}>{item.cash}</td>
                                    <td dangerouslySetInnerHTML={{ __html: item.action }}></td>
                                </tr>
                            );
                        })}
                        <tr className="ccs-cart-table--footer">
                            <td colSpan="5">
                                <img src="/Images/ic-transpoter.svg" alt="" />
                                <span>Miễn Phí Vận Chuyển cho đơn hàng từ ₫500.000 (giảm tối đa ₫30.000). Tìm hiểu thêm</span>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            );
        } else {
            return (
                <Table responsive="md" className="ccs-table-wrap" style={{ marginTop: marginTop }}>
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