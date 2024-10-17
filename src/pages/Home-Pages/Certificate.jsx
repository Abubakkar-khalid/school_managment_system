// import React from 'react'
import CertificateImage from '../../images/Certificate-image.jpg';
import { FaCheck } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";
import { TbCopyX } from "react-icons/tb";
import { RiFileCopy2Fill } from "react-icons/ri";
import { FaFilePdf } from "react-icons/fa";
import { HiClipboardCopy } from "react-icons/hi";
import { IoMdCopy } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";

// import { FaPlusCircle } from "react-icons/fa";




const Certificate = () => {
return (

<div className="m-2">
<div className="d-flex justify-content-between px-4">
<h6 className="text-secondary fs-5">Certificate</h6>
<p className="text-secondary">Dashboard &nbsp;&nbsp;|&nbsp;&nbsp; Admin Section  &nbsp;&nbsp;|&nbsp;&nbsp;  Certificate</p>
</div>
<div className="mx-4">
<div className="row">
<div className="col col-5 shadow-lg py-4 rounded-2">
<div className="">
<p className="fs-5">Add Certificate</p>
</div>
{/* Input fields  */}
<div className="Input-fields">
<label htmlFor="inputEmail4" className="form-label ms-1 text-secondary">Certificate Name*</label>
<input type="text" className="form-control" placeholder="Purpose" id="inputEmail4" />
</div>
<div className="Input-fields mt-4">
<label htmlFor="inputEmail4" className="form-label ms-1 text-secondary fs-6">Header left text</label>
<input type="text" className="form-control" placeholder="Number" id="inputEmail4" />
</div>

<div className="Input-fields mt-4">
<label htmlFor="inputEmail4" className="form-label ms-1 text-secondary fs-6">Date</label>
<input type="date" className="form-control" placeholder="ID" id="inputEmail4" />
</div>
<div className="Input-fields mt-4">
<label htmlFor="inputEmail4" className="form-label ms-1 text-secondary fs-6">Body (Max Character Length 500)</label>
<input type="text" className="form-control" placeholder="No of Person" id="inputEmail4" />
<div className="text-primary">
[name] [dob] [present_address] [guardian] [created_at] [admission_no] [roll_no] [gender] [admission_date] [category] [cast] [father_name] [mother_name] [religion] [email] [phone] [class] [section]
</div>
</div>

{/* _____________________________ */}
<div className=" mt-4">
<div className="row">

<div className="col">
<div className="form-group">
<label htmlFor="fontBody">Font Body:</label>
<select id="fontBody" name="fontBody" className="form-control mt-4">
<option value="Arial">Arial</option>
<option value="Calibri">Calibri</option>
<option value="Comic Sans MS">Comic Sans MS</option>
<option value="Courier New">Courier New</option>
<option value="Georgia">Georgia</option>
<option value="Helvetica">Helvetica</option>
<option value="Times New Roman">Times New Roman</option>
<option value="Verdana">Verdana</option>
</select>
</div>
</div>
<div className="col">
<label htmlFor="inputEmail4" className="form-label ms-1 fs-6">Font Size</label>
<input type="text" className="form-control" placeholder="Ex: 2em" id="inputEmail4" />
</div>
</div>
</div>

{/* _____________________________ */}


<div className="Input-fields mt-4">
<label htmlFor="inputEmail4" className="form-label ms-1 text-secondary">Footer left text*</label>
<input type="text" className="form-control" placeholder="Purpose" id="inputEmail4" />
</div>

<div className="Input-fields mt-4">
<label htmlFor="inputEmail4" className="form-label ms-1 text-secondary">Footer Center text*</label>
<input type="text" className="form-control" placeholder="Purpose" id="inputEmail4" />
</div>

<div className="Input-fields mt-4">
<label htmlFor="inputEmail4" className="form-label ms-1 text-secondary">Footer Right text*</label>
<input type="text" className="form-control" placeholder="Purpose" id="inputEmail4" />

</div>

<div className="col mt-4">
<div className="form-group">
<label htmlFor="fontBody " className="text-secondary">Page Layout</label>
<select id="fontBody" placeholder='Page Layout' name="fontBody" className="form-control mt-4 text-secondary">
<option value="Arial">Page Layout</option>
<option value="Calibri">Calibri</option>
<option value="Comic Sans MS">Comic Sans MS</option>
<option value="Courier New">Courier New</option>
<option value="Georgia">Georgia</option>
<option value="Helvetica">Helvetica</option>
<option value="Times New Roman">Times New Roman</option>
<option value="Verdana">Verdana</option>
</select>
</div>
</div>
{/* _____________________________ */}
<div className=" mt-4">
<div className="row text-secondary">

<div className="col">
<div className="form-group">
<label htmlFor="fontBody">Height(mm)</label>
<input type="text" className="mt-1 form-control" placeholder="Height" id="inputEmail4" />
</div>
</div>
<div className="col">
<div className="form-group">
<label htmlFor="fontBody">Width(mm)</label>
<input type="text" className="mt-1 form-control" placeholder="Width" id="inputEmail4" />
</div>
</div>

</div>
</div>

{/* _____________________________ */}




<div className="d-flex gap-2 text-secondary mt-3">
<span>Student Photo</span>

<div className="form-check text-secondary">
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
<label className="form-check-label" htmlFor="flexRadioDefault1">
Yes
</label>
</div>
<div className="form-check text-secondary">
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
<label className="form-check-label" htmlFor="flexRadioDefault2">
None
</label>
</div>

</div>




<div className="Input-fields mt-4">
<label htmlFor="inputEmail4" className="form-label ms-1 text-secondary fs-6">Image</label>
<input type="file" className="form-control" placeholder="" id="inputEmail4" />
</div>

<div className="d-flex justify-content-center me-4 mt-4">
<button type="button" className="btn btn-primary visitor-button"><FaCheck /> Save Certificate</button>
</div>
{/* Input fields end  */}
</div>
<div className="col col-7 ">
<div className="Table-Box border shadow-sm px-4 py-3">
<div className="Table-Header d-flex justify-content-between">
<div className="fw-bold mt-4 fs-5">Postal Receive List</div>
<div className="d-flex border-purple-bottom">
<span><IoMdSearch className="fs-3 mt-4 " /></span>
<span>  <input type="text" className="form-control search-input icon-container mt-3" placeholder="Quick Search" /></span>
</div>                        
<div className="d-flex  rounded-5 border-purple w-auto">
<div className="border rounded-start-5 border-right border-primary px-2 mt-4 icon-container"><FaRegCopy className=" fs-6 mt-1" /></div>
<div className="border -right border-primary px-2 mt-4 icon-container"><TbCopyX className=" fs-6 mt-1" /></div>
<div className="border border-right border-primary px-2 mt-4 icon-container"><RiFileCopy2Fill className=" fs-6 mt-1" /></div>
<div className="border border-right border-primary px-2 mt-4 icon-container"><FaFilePdf className=" fs-6 mt-1" /></div>
<div className="border border-right border-primary px-2 mt-4 icon-container"><HiClipboardCopy className=" fs-6 mt-1" /></div>
<div className="border border-right border-primary px-2 mt-4 rounded-end-5 icon-container"><IoMdCopy className=" fs-6 mt-1" /></div>
</div>
</div>


<div className="visitor-table-container" style={{ width: '100%' }}>
<table className="visitor-table visitor-table-hover visitor-table-fixed table-hover table-fixed w-100 mt-3">
<thead className="Certificate-table-light">
<tr>
<th scope="col"><FaArrowDown /> Name</th>
<th scope="col"><FaArrowDown /> Background Image</th>
<th scope="col"><FaArrowDown /> Default For</th>
</tr>
</thead>
<tbody className="visitor-table-data text-secondary">
<tr>
<td> Certificate in Technical Communication (PCTC)</td>
<td className="Admin-Query-Table-Data">
  <img src={CertificateImage} className='img-fluid' alt="" />
</td>
<td className="Admin-Query-Table-Data"></td>
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

export default Certificate