import { IoIosSearch } from "react-icons/io";

const GenerateCard = () => {
    return (

        <div className="m-2">
            <div className="d-flex justify-content-between px-4">
                <h6 className="text-secondary fs-5">Generate ID Card</h6>
                <p className="text-secondary"><a href="#" className="text-secondary text-decoration-none">Dashboard</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="#" className="text-secondary text-decoration-none">Admin Section </a> &nbsp;&nbsp;|&nbsp;&nbsp;  <a href="#" className="text-secondary text-decoration-none">Generate Id Card</a></p>
                </div>


            <div className="border p-3 rounded-2 shadow-sm m-3">
                <h6>Select Criteria</h6>

                <div className="container">
                    <div className="row text-secondary">
                        <div className="col ">
                            <label htmlFor="fontBody" className="col-form-label">Role <span className="text-danger">*</span></label>
                            <select id="fontBody" name="fontBody" className="form-control text-secondary">
                                <option value="Arial">Select Role</option>
                                <option value="Calibri">Calibri</option>
                                <option value="Comic Sans MS">Comic Sans MS</option>
                                <option value="Courier New">Courier New</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Helvetica">Helvetica</option>
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="Verdana">Verdana</option>
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="fontBody" className="col-form-label">ID Card <span className="text-danger">*</span></label>
                            <select id="fontBody" name="fontBody" className="form-control text-secondary">
                                <option value="Arial">Select ID Card</option>
                                <option value="Calibri">Calibri</option>
                                <option value="Comic Sans MS">Comic Sans MS</option>
                                <option value="Courier New">Courier New</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Helvetica">Helvetica</option>
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="Verdana">Verdana</option>
                            </select>
                        </div>
                        <div className="col text-secondary mt-1">
                            <label htmlFor="inputEmail4" className="form-label">Grid Gap(PX)<span className="text-danger">*</span></label>
                            <input type="text" className="form-control" id="inputEmail4" />
                        </div>

                    </div>
                </div>
                <div className="d-flex justify-content-end mt-3 me-3 ">
                    <button className="btn btn-sm visitor-button text-white px-3 rounded-3"> <span><IoIosSearch className="me-1 fs-5" /></span> Search</button>
                </div>
            </div>




            <p className="text-secondary text-center mt-4">Copyright © 2024 All rights reserved | This application is made by Solushyfy</p>
        </div>

    )
}

export default GenerateCard