import { FaAlignJustify } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdOutlineSignalCellularAlt2Bar } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";


const Navbar = () => {
  return (


    <>

<nav className="navbar navbar-expand-lg bg-body-tertiary py-2 mb-2">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><FaAlignJustify className="tiles-icon" /></a>
    <div className="d-flex ">
                            <span><IoMdSearch className="fs-5 mt-3 " /></span>
                            <span>  <input type="text" className=" mt-2 form-control search-input h-75 w-75" placeholder="Search" style={{backgroundColor:"#F8F8F9"}} /></span>
                        </div>      
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {/* <!-- Other navbar items (if any) --> */}
      </ul>
      <form className="d-flex me-3" role="search">
        <div className="mt-1 d-flex">
          <div className="d-flex gap-0">
      <CiSearch className="fw-bolder mt-3 fs-4 search-icon" /><span> <input type="text" className="  form-control search-input h-75 w-100 mt-2 " style={{backgroundColor:"#F8F8F9"}} placeholder="Name/Admission No" /></span>
      </div>
       <span className="me-3 small-text " style={{color:"#7883B3"}}>2024 [Jan-Dec]</span>
      
       <span><MdMessage className="ms-3 Message-Icon-Navbar  mt-3" style={{color:"#7883B3"}} /></span>
       <span><IoIosNotifications className="ms-2 Bell-Icon-Navbar  mt-3" style={{color:"#7883B3"}} /></span>
       <span><FaEarthAmericas  className="ms-2 Earth-Icon-Navbar  mt-3" style={{color:"#7883B3"}} /></span>
       <span><MdOutlineSignalCellularAlt2Bar   className="ms-2  Signal-Icon-Navbar mt-2" style={{color:"#7883B3"}} /></span>
       <span><IoIosContact   className="Profile-Icon-Navbar " style={{color:"#7883B3"}}/></span>
      </div>
       
      </form>
    </div>
  </div>
</nav>
    </>


  )
}

export default Navbar;