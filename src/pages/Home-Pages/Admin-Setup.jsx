
import { FaRegCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
// import React from 'react'
import { FaCheck } from "react-icons/fa";


const AdminSetup = () => {
    return (

        <div className="m-2">

            <div className="d-flex justify-content-between px-4">
                <h6 className="text-secondary fs-5">Add Admin Setup</h6>
                <p className="text-secondary"><a href="#" className="text-secondary text-decoration-none">Dashboard</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="#" className="text-secondary text-decoration-none">Admin Section </a> &nbsp;&nbsp;|&nbsp;&nbsp;  <a href="#" className="text-secondary text-decoration-none">Visitor Book</a></p>
            </div>

            <div className="mx-4">
                <div className="row">
                    <div className="col col-3 shadow-lg py-4 rounded-2">
                        <div className="">
                            <p className="fs-5">Add Amin Setup</p>
                        </div>
                        {/* Input fields  */}
                        <div className="Input-fields">
                            <label htmlFor="typeSelect" className="form-label ms-1 text-secondary">Type<span className="text-danger">*</span></label>
                            <select className="form-select" id="typeSelect" aria-label="Type">
                                <option selected disabled>Choose a type</option>
                                <option value="personal">Personal</option>
                                <option value="business">Business</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="Input-fields mt-4">
                            <label htmlFor="inputEmail4" className="form-label ms-1 text-secondary fs-6">Name<span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="Number" id="inputEmail4" />
                        </div>
                        

                        <div className="Input-fields mt-4">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div>

                        </div>

                        <div className="d-flex justify-content-center me-4 mt-4">
                            <button type="button" className="btn btn-primary visitor-button"><FaCheck /> Save Setup</button>
                        </div>
                        {/* Input fields end  */}
                    </div>

                    <div className="col col-9 ">
                        <div className="Table-Box border shadow-sm px-4 py-3">
                            <div className="Table-Header ">
                                <div className="f mt-2 fs-5">Admin Setup List</div>
                            </div>

                            <div className="p-3 m-3 d-flex justify-content-between p-3 Admin-Setup-bg">
                                <div><FaRegCircle className="mb-1 me-1"/> Complaint Type</div>
                                <div><FaPlus/></div>
                            </div>





                        </div>



                    </div>
                </div>
                <p className="text-secondary text-center mt-4">Copyright © 2024 All rights reserved | This application is made by Solushyfy</p>
            </div>

        </div>

    )
}

export default AdminSetup