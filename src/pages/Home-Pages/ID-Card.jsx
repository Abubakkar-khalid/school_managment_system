// 
// import { FaCheck } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";
import { TbCopyX } from "react-icons/tb";
import { RiFileCopy2Fill } from "react-icons/ri";
import { FaFilePdf } from "react-icons/fa";
import { HiClipboardCopy } from "react-icons/hi";
import { IoMdCopy } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
// import { FaPlusCircle } from "react-icons/fa";

const IDCard = () => {
    return (
        <div>
            <p className="text-end text-secondary m-4 pe-4"><a href="#" className="text-secondary text-decoration-none">Dashboard |</a></p>
            <div className="Table-Box border shadow-sm mx-5 rounded-2 px-4 py-3">

                <div className="text-end">
                    <button className="btn text-white visitor-button me-0 px-4"><FaPlus /> Create Id Card</button>

                </div>
                <div className="Table-Header d-flex justify-content-between">
                    <div className="fw-bold mt-2 fs-5">ID Card List</div>
                    <div className="d-flex border-purple-bottom">
                        <span><IoMdSearch className="fs-6 mt-2 " /></span>
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


                <div className="" style={{ width: '100%' }}>
                    <table className="visitor-table visitor-table-hover visitor-table-fixed table-hover table-fixed w-100 mt-3">
                        <thead className="visitor-table-light">
                            <tr>
                                <th scope="col"><FaArrowDown />SL</th>
                                <th scope="col"><FaArrowDown />Title</th>
                                <th scope="col"><FaArrowDown /> Role</th>
                                <th scope="col"><FaArrowDown />Aciton</th>
                            </tr>
                        </thead>
                        <tbody className="visitor-table-data">
                            {/* <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" /> Customer Feedback</td>
                                            <td className="Admin-Query-Table-Data">#REF12345</td>
                                            <td className="Admin-Query-Table-Data">742 Evergreen Terrace, Springfield</td>
                                            <td className="Admin-Query-Table-Data">Support Team</td>
                                            <td className="Admin-Query-Table-Data">Customer reported a minor issue with the delivery timing but was overall satisfied with the service.</td>
                                            <td className="Admin-Query-Table-Data">10th Feb, 2023</td>
                                        </tr>
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" /> Technical Inquiry</td>
                                            <td className="Admin-Query-Table-Data">#REF23456</td>
                                            <td className="Admin-Query-Table-Data">123 Baker Street, London</td>
                                            <td className="Admin-Query-Table-Data">Technical Support</td>
                                            <td className="Admin-Query-Table-Data">User requested assistance with setting up the new software version.</td>
                                            <td className="Admin-Query-Table-Data">22nd Jan, 2022</td>
                                        </tr>
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" /> Sales Inquiry</td>
                                            <td className="Admin-Query-Table-Data">#REF34567</td>
                                            <td className="Admin-Query-Table-Data">555 Maple Avenue, Boston</td>
                                            <td className="Admin-Query-Table-Data">Sales Department</td>
                                            <td className="Admin-Query-Table-Data">Potential client requested a quote for bulk product purchase.</td>
                                            <td className="Admin-Query-Table-Data">5th Jul, 2020</td>
                                        </tr>
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" /> Partnership Proposal</td>
                                            <td className="Admin-Query-Table-Data">#REF45678</td>
                                            <td className="Admin-Query-Table-Data">890 Oak Street, Miami</td>
                                            <td className="Admin-Query-Table-Data">Business Development</td>
                                            <td className="Admin-Query-Table-Data">A company reached out to discuss potential business collaboration.</td>
                                            <td className="Admin-Query-Table-Data">7th Aug, 2021</td>
                                        </tr>
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" /> Service Feedback</td>
                                            <td className="Admin-Query-Table-Data">#REF56789</td>
                                            <td className="Admin-Query-Table-Data">1600 Pennsylvania Ave, Washington DC</td>
                                            <td className="Admin-Query-Table-Data">Customer Relations</td>
                                            <td className="Admin-Query-Table-Data">Client expressed satisfaction with the recent service but suggested more frequent updates.</td>
                                            <td className="Admin-Query-Table-Data">15th Sep, 2022</td>
                                        </tr>
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" /> Delivery Status</td>
                                            <td className="Admin-Query-Table-Data">#REF67890</td>
                                            <td className="Admin-Query-Table-Data">742 Park Avenue, New York</td>
                                            <td className="Admin-Query-Table-Data">Logistics Team</td>
                                            <td className="Admin-Query-Table-Data">Customer inquired about the status of their package, which was delayed due to weather.</td>
                                            <td className="Admin-Query-Table-Data">20th Jun, 2020</td>
                                        </tr>
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" /> Refund Request</td>
                                            <td className="Admin-Query-Table-Data">#REF78901</td>
                                            <td className="Admin-Query-Table-Data">312 Silver Street, Denver</td>
                                            <td className="Admin-Query-Table-Data">Billing Department</td>
                                            <td className="Admin-Query-Table-Data">Client requested a refund for a product that was damaged during shipping.</td>
                                            <td className="Admin-Query-Table-Data">30th Apr, 2023</td>
                                        </tr>
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" /> General Inquiry</td>
                                            <td className="Admin-Query-Table-Data">#REF89012</td>
                                            <td className="Admin-Query-Table-Data">478 Elm Street, Austin</td>
                                            <td className="Admin-Query-Table-Data">Customer Support</td>
                                            <td className="Admin-Query-Table-Data">Customer asked general questions about the companys return policy and warranties.</td>
                                            <td className="Admin-Query-Table-Data">22nd Nov, 2021</td>
                                        </tr>
                                        <tr>
                                            <td><FaPlusCircle className="visitor-purple-icon" /> Account Update</td>
                                            <td className="Admin-Query-Table-Data">#REF90123</td>
                                            <td className="Admin-Query-Table-Data">1234 Cherry Lane, Los Angeles</td>
                                            <td className="Admin-Query-Table-Data">Accounts Team</td>
                                            <td className="Admin-Query-Table-Data">User updated their contact information and requested a new password.</td>
                                            <td className="Admin-Query-Table-Data">14th Dec, 2022</td>
                                        </tr> */}
                        </tbody>
                    </table>
                    <p className="text-center text-secondary mt-2">No Data Available In Table</p>
                </div>





            </div>

        </div>
    )
}

export default IDCard