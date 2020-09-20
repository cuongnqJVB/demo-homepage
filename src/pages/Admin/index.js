import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import "font-awesome/css/font-awesome.css";
import "font-awesome/css/font-awesome.min.css";


const Admin = () => {
    const [classActive, setClassAcitve] = useState('');
    return (
        <div className="admin-page-container">
            <nav class="navbar col-lg-12 col-12">
                <div className="nav-logo">
                    <span>ANPHA PETROL</span>
                </div>
                <div className="nav-manage-box">
                    <i class="fa fa-bell"></i>
                    <div className="user-info">
                        <div className="member-avatar">
                            <img src="https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13347.jpg" alt="" />
                        </div>
                        <div class="dropdown">
                            <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="detail-info">
                                    Username
                                    <span>Super admin</span>
                                </div>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="admin-body-wrapper">
                <div className="admin-menu">
                    <ul className="menu-group">
                        <li className="menu-item">
                            <a
                                href="#"
                                onClick={() => {
                                    if (classActive === 'active') {
                                        setClassAcitve('');
                                    } else {
                                        setClassAcitve('active');
                                    }
                                }}>
                                <i class="fa fa-user"></i>
                                <span>Hành chính nhân sự</span>
                            </a>
                        </li>
                        <li className={`sub-menu ${classActive}`}>
                            <div className="list-items">
                                <a>Item 1</a>
                                <a>Item 1</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="admin-container">
                    <div className="nav-group">
                        <ul
                            class="nav nav-tabs"
                            id="myTab"
                            role="tablist"
                        >
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    id="member-tab"
                                    data-toggle="tab"
                                    href="#member"
                                    role="tab"
                                >
                                    MEMBERS
                            </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    id="admin-tab"
                                    data-toggle="tab"
                                    href="#admin"
                                    role="tab"
                                >
                                    ADMIN
                            </a>
                            </li>
                        </ul>
                    </div>

                    <div className="navigation-box">
                        <div className="navigation-box-left">
                            <h3 className="box-left-title">Members</h3>
                            <button type="button" class="btn btn-success">Add New</button>
                        </div>
                        <div className="navigation-box-right">
                            <div class="input-group">
                                <i class="fa fa-search"></i>
                                <input class="form-control py-2" placeholder="Search..." type="search" id="example-search-input" />
                            </div>
                        </div>
                    </div>

                    <table class="table table-borderless admin-table">
                        <thead>
                            <tr>
                                <th scope="col">Photo</th>
                                <th scope="col">Member name</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Operations</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="member-avatar">
                                        <img src="https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13347.jpg" alt="" />
                                    </div>
                                </td>
                                <td>
                                    <div className="member-info">
                                        Eric
                                    </div>
                                </td>
                                <td>
                                    <div className="member-info">
                                        02991776237
                                    </div>
                                </td>
                                <td>
                                    <div className="member-info">
                                        user@gmail.com
                                    </div>
                                </td>
                                <td>
                                    <div className="member-status status-active">
                                        <span>Active</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-operations">
                                        <a>
                                            <i class="fa fa-edit"></i>
                                        </a>
                                        <a>
                                            <i class="fa fa-pencil-alt"></i>
                                        </a>
                                        <a>
                                            <i class="fa fa-trash-alt"></i>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-dark">Login</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="member-avatar">
                                        <img src="./image/avatar.jpg" alt="" />
                                    </div>
                                </td>
                                <td>
                                    <div className="member-info">
                                        Eric
                                    </div>
                                </td>
                                <td>
                                    <div className="member-info">
                                        02991776237
                                    </div>
                                </td>
                                <td>
                                    <div className="member-info">
                                        user@gmail.com
                                    </div>
                                </td>
                                <td>
                                    <div className="member-status status-inactive">
                                        <span>Inactive</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="list-operations">
                                        <a>
                                            <i class="fa fa-edit"></i>
                                        </a>
                                        <a>
                                            <i class="fa fa-pencil-alt"></i>
                                        </a>
                                        <a>
                                            <i class="fa fa-trash-alt"></i>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-dark">Login</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Admin;