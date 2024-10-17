import { IoMdSearch } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";
import { TbCopyX } from "react-icons/tb";
import { RiFileCopy2Fill } from "react-icons/ri";
import { FaFilePdf } from "react-icons/fa";
import { HiClipboardCopy } from "react-icons/hi";
import { IoMdCopy } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";


const RefundRequest = () => {
    return (
        <div>
            <div className="Main-Admin-Query px-4 py-2">
                <div className="d-flex justify-content-between px-4">
                    <h6 className="text-secondary fs-5">Refund Request</h6>
                    <p className="text-secondary"><a href="#" className="text-secondary text-decoration-none">Dashboard</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="#" className="text-secondary text-decoration-none">Wallet</a>  &nbsp;&nbsp;|&nbsp;&nbsp; <a href="#" className="text-secondary text-decoration-none">Refund Request</a> </p>
                </div>
                {/* Second Section  */}
                <div className="Table-Box border shadow-sm px-4 py-3">
                    <div className="Table-Header d-flex justify-content-between">
                        <div></div>
                        <div className="d-flex border-purple-bottom">
                            <span><IoMdSearch className="fs-3 mt-2 " /></span>
                            <span>  <input type="text" className="form-control search-input" placeholder="Quick Search" /></span>
                        </div>                        
                        <div className="d-flex rounded-5  w-auto">
                              <div className="border rounded-start-5 border-right px-2 mt-2 icon-container">
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
                        <table className="Pending-page-table w-100 mt-3">
                            <thead className="Pending-page-table-head table-light">
                                <tr>
                                    <th scope="col"><FaArrowDown /> SL</th>
                                    <th scope="col"><FaArrowDown /> Name</th>
                                    <th scope="col"><FaArrowDown /> Method</th>
                                    <th scope="col"><FaArrowDown /> Pending</th>
                                    <th scope="col"><FaArrowDown /> Approve</th>
                                    <th scope="col"><FaArrowDown /> Reject</th>
                                    <th scope="col"><FaArrowDown /> Note</th>
                                    <th scope="col"><FaArrowDown /> Status</th>
                                    <th scope="col"><FaArrowDown /> File</th>
                                </tr>
                            </thead>
                            <tbody className="Pending-page-table-body">
                            </tbody>
                        </table>
                        <p className="text-secondary text-center mt-4">No Data Available in Table</p>
                    </div>



                </div>
                <p className="fw-thin text-secondary text-center mt-3">Copyright © 2024 All rights reserved | This application is made by Solushyfy</p>

            </div>


        </div>
    )
}

export default RefundRequest