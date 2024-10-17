import { IoMdSearch } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";
import { TbCopyX } from "react-icons/tb";
import { RiFileCopy2Fill } from "react-icons/ri";
import { FaFilePdf } from "react-icons/fa";
import { HiClipboardCopy } from "react-icons/hi";
import { IoMdCopy } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";


const AdminQuery = () => {
    return (
        <div >
         
            <div className=" Main-Admin-Query px-4 py-2">
                
                <div className="d-flex justify-content-between px-4">
                <h5 className="text-secondary fs-5">Admission Query</h5>
            <p className="text-secondary"><a href="#" className="text-secondary text-decoration-none">Dashboard</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="#" className="text-secondary text-decoration-none">Admin Section</a>  &nbsp;&nbsp;|&nbsp;&nbsp; <a href="#" className="text-secondary text-decoration-none">Visitor Book</a> </p>
        </div>
                {/* First Section  */}
                <div className="border p-4 rounded-3 shadow-sm">

                    <div className="d-flex justify-content-between ">
                        <h5>Select Criteria</h5>
                        <button
                            type="button"
                            className="btn btn-primary fw-bold"
                            style={{
                                paddingY: '0.25rem',
                                paddingX: '0.5rem',
                                fontSize: '1rem',
                            }}
                        >
                            + Add
                        </button>
                    </div>

                    <div className="d-flex gap-3 mt-3 justify-content-between">

                        <div className="col">
                            <label htmlFor="inputEmail4" className="form-label">Date From</label>
                            <input type="date" className="form-control" id="date" />
                        </div>
                        <div className="col">
                            <label htmlFor="inputPassword4" className="form-label">Date to</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col">
                            <label htmlFor="inputEmail4" className="form-label">Source</label>

                            <select className="form-select">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="inputEmail4" className="form-label">Status</label>

                            <select className="form-select">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>

                    </div>
                    <div className="d-flex justify-content-end">
                        <button
                            type="button"
                            className="btn btn-primary fw-bold mt-4"
                            style={{
                                paddingY: '0.25rem',
                                paddingX: '0.5rem',
                                fontSize: '1rem',
                            }}
                        >
                            <IoMdSearch className="fs-5 me-1 " /> Search
                        </button>
                    </div>
                </div>

                {/* Second Section  */}


                <div className="Table-Box mt-5 border shadow-sm px-4 py-3">
                    <div className="Table-Header d-flex justify-content-between">
                        <div className="fs-5">Query List</div>
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


                    <div className="table-container" style={{ width: '100%' }}>
  <table className="table table-hover table-fixed w-100 mt-3">
    <thead className="table-light">
      <tr>
        <th scope="col"><FaArrowDown />SL</th>
        <th scope="col"><FaArrowDown />Name</th>
        <th scope="col"><FaArrowDown />Phone</th>
        <th scope="col"><FaArrowDown />Source</th>
        <th scope="col"><FaArrowDown />Query Date</th>
        <th scope="col"><FaArrowDown />Last Follow Up Date</th>
        <th scope="col"><FaArrowDown />Next Follow Up Date</th>
      </tr>
    </thead>
    <tbody className="table-data">
  <tr>
  <td><FaPlusCircle className="visitor-purple-icon" />1</td>
    <td className="Admin-Query-Table-Data">John Doe</td>
    <td className="Admin-Query-Table-Data">+1-555-234-5678</td>
    <td className="Admin-Query-Table-Data">sales inquiry</td>
    <td className="Admin-Query-Table-Data">12th Feb, 2023</td>
    <td className="Admin-Query-Table-Data">18th Feb, 2023</td>
    <td className="Admin-Query-Table-Data">1st Mar, 2023</td>
  </tr>
  <tr>
  <td><FaPlusCircle className="visitor-purple-icon" />2</td>
    <td className="Admin-Query-Table-Data">Emily Carter</td>
    <td className="Admin-Query-Table-Data">+1-678-123-9987</td>
    <td className="Admin-Query-Table-Data">technical support</td>
    <td className="Admin-Query-Table-Data">22nd Jan, 2022</td>
    <td className="Admin-Query-Table-Data">15th Feb, 2022</td>
    <td className="Admin-Query-Table-Data">10th Mar, 2022</td>
  </tr>
  <tr>
  <td><FaPlusCircle className="visitor-purple-icon" />3</td>
    <td className="Admin-Query-Table-Data">Michael Smith</td>
    <td className="Admin-Query-Table-Data">+1-222-344-5567</td>
    <td className="Admin-Query-Table-Data">product query</td>
    <td className="Admin-Query-Table-Data">5th Jul, 2020</td>
    <td className="Admin-Query-Table-Data">11th Jul, 2020</td>
    <td className="Admin-Query-Table-Data">19th Jul, 2020</td>
  </tr>
  <tr>
  <td><FaPlusCircle className="visitor-purple-icon" />4</td>
    <td className="Admin-Query-Table-Data">Sophia Johnson</td>
    <td className="Admin-Query-Table-Data">+1-789-333-4455</td>
    <td className="Admin-Query-Table-Data">partnership inquiry</td>
    <td className="Admin-Query-Table-Data">7th Aug, 2021</td>
    <td className="Admin-Query-Table-Data">13th Aug, 2021</td>
    <td className="Admin-Query-Table-Data">28th Aug, 2021</td>
  </tr>
  <tr>
  <td><FaPlusCircle className="visitor-purple-icon" />5</td>
    <td className="Admin-Query-Table-Data">William Brown</td>
    <td className="Admin-Query-Table-Data">+1-444-555-6789</td>
    <td className="Admin-Query-Table-Data">billing issue</td>
    <td className="Admin-Query-Table-Data">19th Oct, 2019</td>
    <td className="Admin-Query-Table-Data">25th Oct, 2019</td>
    <td className="Admin-Query-Table-Data">2nd Nov, 2019</td>
  </tr>
  <tr>
  <td><FaPlusCircle className="visitor-purple-icon" />6</td>
    <td className="Admin-Query-Table-Data">Isabella Martinez</td>
    <td className="Admin-Query-Table-Data">+1-666-777-9988</td>
    <td className="Admin-Query-Table-Data">service feedback</td>
    <td className="Admin-Query-Table-Data">15th Sep, 2022</td>
    <td className="Admin-Query-Table-Data">20th Sep, 2022</td>
    <td className="Admin-Query-Table-Data">30th Sep, 2022</td>
  </tr>
  <tr>
  <td><FaPlusCircle className="visitor-purple-icon" />7</td>
    <td className="Admin-Query-Table-Data">Oliver Lee</td>
    <td className="Admin-Query-Table-Data">+1-555-444-3333</td>
    <td className="Admin-Query-Table-Data">delivery status</td>
    <td className="Admin-Query-Table-Data">10th Jun, 2020</td>
    <td className="Admin-Query-Table-Data">15th Jun, 2020</td>
    <td className="Admin-Query-Table-Data">25th Jun, 2020</td>
  </tr>
  <tr>
  <td><FaPlusCircle className="visitor-purple-icon" />8</td>
    <td className="Admin-Query-Table-Data">Ava Wilson</td>
    <td className="Admin-Query-Table-Data">+1-888-999-1212</td>
    <td className="Admin-Query-Table-Data">refund request</td>
    <td className="Admin-Query-Table-Data">30th Apr, 2023</td>
    <td className="Admin-Query-Table-Data">5th May, 2023</td>
    <td className="Admin-Query-Table-Data">15th May, 2023</td>
  </tr>
  <tr>
  <td><FaPlusCircle className="visitor-purple-icon" />9</td>
    <td className="Admin-Query-Table-Data">Liam Davis</td>
    <td className="Admin-Query-Table-Data">+1-777-888-9999</td>
    <td className="Admin-Query-Table-Data">general inquiry</td>
    <td className="Admin-Query-Table-Data">22nd Nov, 2021</td>
    <td className="Admin-Query-Table-Data">29th Nov, 2021</td>
    <td className="Admin-Query-Table-Data">5th Dec, 2021</td>
  </tr>
  <tr>
  <td><FaPlusCircle className="visitor-purple-icon" />10</td>
    <td className="Admin-Query-Table-Data">Mia Harris</td>
    <td className="Admin-Query-Table-Data">+1-444-222-1111</td>
    <td className="Admin-Query-Table-Data">account update</td>
    <td className="Admin-Query-Table-Data">14th Dec, 2022</td>
    <td className="Admin-Query-Table-Data">21st Dec, 2022</td>
    <td className="Admin-Query-Table-Data">30th Dec, 2022</td>
  </tr>
</tbody>

  </table>
</div>



                </div>
<p className="fw-thin text-secondary text-center mt-3">Copyright © 2024 All rights reserved | This application is made by Solushyfy</p>

            </div>


        </div>
    )
}

export default AdminQuery