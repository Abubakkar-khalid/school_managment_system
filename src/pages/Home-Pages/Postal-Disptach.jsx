

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


const PostalDisptach = () => {
    return (

        <div className="m-2">

            <div className="d-flex justify-content-between px-4">
                <h6 className="text-secondary fs-5">Postal Disptach</h6>
                <p className="text-secondary"><a href="#" className="text-secondary text-decoration-none">Dashboard</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="#" className="text-secondary text-decoration-none">Admin Section </a> &nbsp;&nbsp;|&nbsp;&nbsp;  <a href="#" className="text-secondary text-decoration-none">Visitor Book</a></p>
            </div>

            <div className="mx-4">
                <div className="row">
                    <div className="col col-3 shadow-lg py-4 rounded-2">
                        <div className="">
                            <p className="fs-5">Add Postal Dispatch</p>
                        </div>
                        {/* Input fields  */}
                        <div className="Input-fields">
                            <label htmlFor="inputEmail4" className="form-label ms-1 text-secondary">To Title<span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="Purpose" id="inputEmail4" />
                        </div>
                        <div className="Input-fields mt-4">
                            <label htmlFor="inputEmail4" className="form-label ms-1 text-secondary fs-6">Reference No<span className="text-danger">*</span></label>
                            <input type="number" className="form-control" placeholder="Number" id="inputEmail4" />
                        </div>
                        <div className="Input-fields mt-4">
                            <label htmlFor="inputEmail4" className="form-label ms-1 text-secondary fs-6">Address<span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="Number" id="inputEmail4" />
                        </div>
                        <div className="Input-fields mt-4">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Note</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="Input-fields mt-4">
                            <label htmlFor="inputEmail4" className="form-label ms-1 text-secondary fs-6">From Title</label>
                            <input type="text" className="form-control" placeholder="ID" id="inputEmail4" />
                        </div>
                        <div className="Input-fields mt-4">
                            <label htmlFor="inputEmail4" className="form-label ms-1 text-secondary fs-6">Date</label>
                            <input type="date" className="form-control" placeholder="No of Person" id="inputEmail4" />
                        </div>

                        <div className="Input-fields mt-4">
                            <label htmlFor="inputEmail4" className="form-label ms-1 text-secondary fs-6">File <span className="text-danger">*</span></label>
                            <input type="file" className="form-control" placeholder="" id="inputEmail4" />
                            <p className="text-primary visitor-paragraph">(PDF,DOC,DOCX,JPG,JPEG,PNG,TXT are allowed for upload)</p>
                        </div>

                        <div className="d-flex justify-content-center me-4 mt-4">
                            <button type="button" className="btn btn-primary visitor-button"><FaCheck /> Save Postal Dispatch</button>
                        </div>
                        {/* Input fields end  */}
                    </div>
                    <div className="col col-9 ">


                        <div className="Table-Box border shadow-sm px-4 py-3">
                            <div className="Table-Header d-flex justify-content-between">
                                <div className="fw-bold mt-2 fs-5">Postal Receive List</div>
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
                                <table className="visitor-table visitor-table-hover visitor-table-fixed table-hover table-fixed w-100 mt-3">
                                    <thead className="visitor-table-light">
                                        <tr>
                                            <th scope="col"><FaArrowDown /> Form Title</th>
                                            <th scope="col"><FaArrowDown /> Reference No</th>
                                            <th scope="col"><FaArrowDown /> Address</th>
                                            <th scope="col"><FaArrowDown /> To Title</th>
                                            <th scope="col"><FaArrowDown /> Note</th>
                                        </tr>
                                    </thead>
                                    <tbody className="visitor-table-data">
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" />Technical Inquiry</td>
                                            <td className="Admin-Query-Table-Data">#REF12345</td>
                                            <td className="Admin-Query-Table-Data">742 Evergreen Terrace, Springfield</td>
                                            <td className="Admin-Query-Table-Data">Support Team</td>
                                            <td className="Admin-Query-Table-Data">Customer reported a minor issue with the delivery timing but was overall satisfied with the service.</td>
                                        </tr>
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" /> Technical Inquiry</td>
                                            <td className="Admin-Query-Table-Data">#REF23456</td>
                                            <td className="Admin-Query-Table-Data">123 Baker Street, London</td>
                                            <td className="Admin-Query-Table-Data">Technical Support</td>
                                            <td className="Admin-Query-Table-Data">User requested assistance with setting up the new software version.</td>
                                        </tr>
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" /> Sales Inquiry</td>
                                            <td className="Admin-Query-Table-Data">#REF34567</td>
                                            <td className="Admin-Query-Table-Data">555 Maple Avenue, Boston</td>
                                            <td className="Admin-Query-Table-Data">Sales Department</td>
                                            <td className="Admin-Query-Table-Data">Potential client requested a quote for bulk product purchase.</td>
                                        </tr>
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" />Technical Inquiry</td>
                                            <td className="Admin-Query-Table-Data">#REF45678</td>
                                            <td className="Admin-Query-Table-Data">890 Oak Street, Miami</td>
                                            <td className="Admin-Query-Table-Data">Business Development</td>
                                            <td className="Admin-Query-Table-Data">A company reached out to discuss potential business collaboration.</td>
                                        </tr>
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" /> Service Feedback</td>
                                            <td className="Admin-Query-Table-Data">#REF56789</td>
                                            <td className="Admin-Query-Table-Data">1600 Pennsylvania Ave, Washington DC</td>
                                            <td className="Admin-Query-Table-Data">Customer Relations</td>
                                            <td className="Admin-Query-Table-Data">Client expressed satisfaction with the recent service but suggested more frequent updates.</td>
                                        </tr>
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" /> Delivery Status</td>
                                            <td className="Admin-Query-Table-Data">#REF67890</td>
                                            <td className="Admin-Query-Table-Data">742 Park Avenue, New York</td>
                                            <td className="Admin-Query-Table-Data">Logistics Team</td>
                                            <td className="Admin-Query-Table-Data">Customer inquired about the status of their package, which was delayed due to weather.</td>
                                        </tr>
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" /> Refund Request</td>
                                            <td className="Admin-Query-Table-Data">#REF78901</td>
                                            <td className="Admin-Query-Table-Data">312 Silver Street, Denver</td>
                                            <td className="Admin-Query-Table-Data">Billing Department</td>
                                            <td className="Admin-Query-Table-Data">Client requested a refund for a product that was damaged during shipping.</td>
                                        </tr>
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" /> General Inquiry</td>
                                            <td className="Admin-Query-Table-Data">#REF89012</td>
                                            <td className="Admin-Query-Table-Data">478 Elm Street, Austin</td>
                                            <td className="Admin-Query-Table-Data">Customer Support</td>
                                            <td className="Admin-Query-Table-Data">Customer asked general questions about the companys return policy and warranties.</td>
                                        </tr>
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" /> Account Update</td>
                                            <td className="Admin-Query-Table-Data">#REF90123</td>
                                            <td className="Admin-Query-Table-Data">1234 Cherry Lane, Los Angeles</td>
                                            <td className="Admin-Query-Table-Data">Accounts Team</td>
                                            <td className="Admin-Query-Table-Data">User updated their contact information and requested a new password.</td>
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

export default PostalDisptach