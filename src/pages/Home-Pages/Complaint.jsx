// import React from 'react'
import { FaCheck } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";
import { TbCopyX } from "react-icons/tb";
import { RiFileCopy2Fill } from "react-icons/ri";
import { FaFilePdf } from "react-icons/fa";
import { HiClipboardCopy } from "react-icons/hi";
import { IoMdCopy } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";


const Complaint = () => {
    return (
        <div className="m-2">

            <div className="d-flex justify-content-between px-4">
                <h6 className="text-secondary fs-5">Complaint</h6>
                <p className="text-secondary"><a href="#" className="text-secondary text-decoration-none">Dashboard</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="#" className="text-secondary text-decoration-none">Admin Section </a> &nbsp;&nbsp;|&nbsp;&nbsp;  <a href="#" className="text-secondary text-decoration-none">Visitor Book</a></p>
                </div>

            <div className="mx-4">
                <div className="row">
                    <div className="col col-3 complaint-side shadow-lg py-4 rounded-2">
                        <div className="">
                            <p className="fs-5">Add Complaint</p>
                        </div>
                        {/* Input fields  */}
                        <div className="Input-fields">
                            <label htmlFor="inputEmail4" className="form-label ms-1 text-secondary">COMPLAINT BY<span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="Purpose" id="inputEmail4" />
                        </div>
                        <div className="Input-fields mt-4">
                            <label htmlFor="complaintType" className="form-label ms-1 text-secondary fs-6">COMPLAINT TYPE<span className="text-danger">*</span></label>
                            <select className="form-select" id="complaintType" aria-label="Complaint Type">
                                <option selected disabled>complaint type*</option>
                                <option value="technical">Technical Issue</option>
                                <option value="billing">Billing Issue</option>
                                <option value="delivery">Delivery Problem</option>
                                <option value="product">Product Defect</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="Input-fields mt-4">
                            <label htmlFor="complaintType" className="form-label ms-1 text-secondary fs-6">COMPLAINT SOURCE<span className="text-danger">*</span></label>
                            <select className="form-select" id="complaintType" aria-label="Complaint Type">
                                <option selected disabled>complaint type*</option>
                                <option value="technical">Technical Issue</option>
                                <option value="billing">Billing Issue</option>
                                <option value="delivery">Delivery Problem</option>
                                <option value="product">Product Defect</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="Input-fields mt-4">
                            <label htmlFor="inputEmail4" className="form-label ms-1 text-secondary fs-6">Phone<span className="text-danger">*</span></label>
                            <input type="contact" className="form-control" placeholder="Number" id="inputEmail4" />
                        </div>
                        <div className="Input-fields mt-4">
                            <label htmlFor="inputEmail4" className="form-label ms-1 text-secondary fs-6">Date</label>
                            <input type="date" className="form-control" placeholder="ID" id="inputEmail4" />
                        </div>
                        <div className="Input-fields mt-4">
                            <label htmlFor="inputEmail4" className="form-label ms-1 text-secondary fs-6">Actions Taken</label>
                            <input type="text" className="form-control" placeholder="No of Person" id="inputEmail4" />
                        </div>
                        <div className="Input-fields mt-4">
                            <label htmlFor="inputEmail4" className="form-label ms-1 text-secondary fs-6"> Assigned</label>
                            <input type="text" className="form-control" placeholder="" id="inputEmail4" />
                        </div>
                        <div className="Input-fields mt-4">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                                              <div className="Input-fields mt-4">
                            <label htmlFor="inputEmail4" className="form-label ms-1 text-secondary fs-6">File <span className="text-danger">*</span></label>
                            <input type="file" className="form-control" placeholder="" id="inputEmail4" />
                            <p className="text-primary visitor-paragraph">(PDF,DOC,DOCX,JPG,JPEG,PNG,TXT are allowed for upload)</p>
                        </div>

                        <div className="d-flex justify-content-center me-4 mt-4">
                            <button type="button" className="btn btn-primary visitor-button"><FaCheck /> Save Complaint</button>
                        </div>
                        {/* Input fields end  */}
                    </div>
                    <div className="col col-9 ">


                        <div className="Table-Box border shadow-sm px-4 py-3">
                            <div className="Table-Header d-flex justify-content-between">
                                <div className="fw-bold mt-2 fs-5 opacity-75">Complaint List</div>
                                <div className="d-flex border-purple-bottom">
                                    <span><IoMdSearch className="fs-3 mt-2 " /></span>
                                    <span>  <input type="text" className="form-control search-input" placeholder="Quick Search" /></span>
                                </div>                        
                            <div className="d-flex rounded-5  w-auto">
                              <div className="border rounded-start-5 border-right  px-2 mt-2 icon-container">
                                <FaRegCopy className="ms-2 fs-5 mt-1" />
                              </div>
                              <div className="border border-right  px-2 mt-2 icon-container">
                                <TbCopyX className="fs-5 mt-1" />
                              </div>
                              <div className="border border-right  px-2 mt-2 icon-container">
                                <RiFileCopy2Fill className="fs-5 mt-1" />
                              </div>
                              <div className="border border-right  px-2 mt-2 icon-container">
                                <FaFilePdf className="fs-5 mt-1" />
                              </div>
                              <div className="border border-right  px-2 mt-2 icon-container">
                                <HiClipboardCopy className="fs-5 mt-1" />
                              </div>
                              <div className="border border-right  px-2 mt-2 rounded-end-5 icon-container">
                                <IoMdCopy className="me-2 fs-5 mt-1" />
                              </div>
                            </div>
                            </div>


                            <div className="visitor-table-container" style={{ width: '100%' }}>
                                <table className=" visitor-table visitor-table-hover visitor-table-fixed  table-hover table-fixed w-100 mt-3">
                                    <thead className="visitor-table-light">
                                        <tr>
                                            <th scope="col"><FaArrowDown />SL</th>
                                            <th scope="col"><FaArrowDown />Complaint By</th>
                                            <th scope="col"><FaArrowDown />Complaint Type</th>
                                            <th scope="col"><FaArrowDown />Source</th>
                                            <th scope="col"><FaArrowDown />Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody className="visitor-table-data">
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" />1</td>

                                            <td className="Admin-Query-Table-Data">Emily Chen</td>
                                            <td className="Admin-Query-Table-Data">3</td>
                                            <td className="Admin-Query-Table-Data">Product Inquiry</td>
                                            <td className="Admin-Query-Table-Data">+1-555-123-4567</td>
                                            
                                        </tr>
                                        <tr>
                                            <td className="visitor-purple-icon"><FaPlusCircle className="visitor-purple-icon" />2</td>
                                            <td className="Admin-Query-Table-Data">David Lee</td>
                                            <td className="Admin-Query-Table-Data">2</td>
                                            <td className="Admin-Query-Table-Data">Technical Support</td>
                                            <td className="Admin-Query-Table-Data">+1-678-901-2345</td>
                                            
                                        </tr>
                                        <tr>
                                            <td className="visitor-purple-icon"><FaPlusCircle className="visitor-purple-icon" />3</td>
                                            <td className="Admin-Query-Table-Data">Sophia Patel</td>
                                            <td className="Admin-Query-Table-Data">4</td>
                                            <td className="Admin-Query-Table-Data">Sales Inquiry</td>
                                            <td className="Admin-Query-Table-Data">+1-222-333-4444</td>
                                            
                                        </tr>
                                        <tr>
                                            <td className="visitor-purple-icon"><FaPlusCircle className="visitor-purple-icon" />4</td>
                                            <td className="Admin-Query-Table-Data">Oliver Brown</td>
                                            <td className="Admin-Query-Table-Data">5</td>
                                            <td className="Admin-Query-Table-Data">Partnership Inquiry</td>
                                            <td className="Admin-Query-Table-Data">+1-789-012-3456</td>
                                            
                                        </tr>
                                        <tr>
                                            <td className="visitor-purple-icon"><FaPlusCircle className="visitor-purple-icon" />5</td>
                                            <td className="Admin-Query-Table-Data">Ethan Wang</td>
                                            <td className="Admin-Query-Table-Data">4</td>
                                            <td className="Admin-Query-Table-Data">Service Feedback</td>
                                            <td className="Admin-Query-Table-Data">+1-555-876-5432</td>
                                            
                                        </tr>

                                        <tr>
                                            <td className="visitor-purple-icon"><FaPlusCircle className="visitor-purple-icon" />6</td>
                                            <td className="Admin-Query-Table-Data">Sophia Lopez</td>
                                            <td className="Admin-Query-Table-Data">3</td>
                                            <td className="Admin-Query-Table-Data">Delivery Status</td>
                                            <td className="Admin-Query-Table-Data">+1-901-234-5678</td>
                                            
                                        </tr>

                                        <tr>
                                            <td className="visitor-purple-icon"><FaPlusCircle className="visitor-purple-icon" />7</td>
                                            <td className="Admin-Query-Table-Data">Mia Garcia</td>
                                            <td className="Admin-Query-Table-Data">2</td>
                                            <td className="Admin-Query-Table-Data">Refund Request</td>
                                            <td className="Admin-Query-Table-Data">+1-456-789-0123</td>
                                            
                                        </tr>

                                        <tr>
                                            <td className="visitor-purple-icon"><FaPlusCircle className="visitor-purple-icon" />8</td>
                                            <td className="Admin-Query-Table-Data">Liam Taylor</td>
                                            <td className="Admin-Query-Table-Data">6</td>
                                            <td className="Admin-Query-Table-Data">General Inquiry</td>
                                            <td className="Admin-Query-Table-Data">+1-111-222-3333</td>
                                            
                                        </tr>

                                        <tr>
                                            <td className="visitor-purple-icon"><FaPlusCircle className="visitor-purple-icon" />9</td>
                                            <td className="Admin-Query-Table-Data">Alexander Lee</td>
                                            <td className="Admin-Query-Table-Data">5</td>
                                            <td className="Admin-Query-Table-Data">Account Update</td>
                                            <td className="Admin-Query-Table-Data">+1-888-999-0000</td>
                                            
                                        </tr>
                                        <tr>
                                            <td className="visitor-purple-icon"><FaPlusCircle className="visitor-purple-icon" />10</td>
                                            <td className="Admin-Query-Table-Data">Alexander Lee</td>
                                            <td className="Admin-Query-Table-Data">5</td>
                                            <td className="Admin-Query-Table-Data">Account Update</td>
                                            <td className="Admin-Query-Table-Data">+1-888-999-0000</td>
                                            
                                        </tr>
                                        <tr>
                                            <td className="visitor-purple-icon"><FaPlusCircle className="visitor-purple-icon" />11</td>
                                            <td className="Admin-Query-Table-Data">Alexander Lee</td>
                                            <td className="Admin-Query-Table-Data">5</td>
                                            <td className="Admin-Query-Table-Data">Account Update</td>
                                            <td className="Admin-Query-Table-Data">+1-888-999-0000</td>
                                            
                                        </tr>
                                        <tr>
                                            <td className="visitor-purple-icon"><FaPlusCircle className="visitor-purple-icon" />12</td>
                                            <td className="Admin-Query-Table-Data">Alexander</td>
                                            <td className="Admin-Query-Table-Data">5</td>
                                            <td className="Admin-Query-Table-Data">Account Update</td>
                                            <td className="Admin-Query-Table-Data">+1-888-999-0000</td>
                                            
                                        </tr>
                                    </tbody>

                                </table>
                            </div>



                        </div>



                    </div>
                </div>
                <p className="text-secondary text-center mt-4">Copyright © 2024 All rights reserved | This application is made by Solushyfy</p>
            </div>

        </div>

    )
}

export default Complaint