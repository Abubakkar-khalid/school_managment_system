import { Link } from "react-router-dom";
import image from '../images/Solushyfy-logo.png';
import { BsFillInboxesFill } from "react-icons/bs";
import { useState } from 'react';
import { FaGreaterThan } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";


const Sidebar = () => {

  const [showOptions, setShowOptions] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [activeLink , setActiveLink] = useState('')

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const handleMenuClick = () => {
    setShowSubMenu(!showSubMenu);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }
  


  return (
    // <!-- Sidebar -->

    // <!-- End Sidebar -->

    <div className=" position-fixed col-lg-2 d-none d-lg-block sidebar h-auto Sidebar-Container" style={{height:"100vh"}}>
      <div className="d-flex flex-column flex-shrink-0  text-white container-fluid">
        <a to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none Sidebar-Logo-Container">
          <span className="fs-3">
            <img src={image} className="img-fluid Solushyfy-Logo"  alt="" />
          </span>
        </a>
        <hr />
        {/* Dashboard area in sidebar  */}
        <ul className="nav nav-pills flex-column mb-auto">
          <span className="Side-bar-spans">Dashboard</span>
          <li className="nav-item">
            <Link to="/" className="nav-link Sidebar-options" aria-current="page">
              <BsFillInboxesFill /><span className="ms-2">Dashboard</span>
            </Link>
          </li>
        </ul>
        <hr />
        {/* Dashboard area in sidebar end */}

        {/* Administration area in sidebar  */}
        <ul className="nav nav-pills flex-column mb-auto">
          <span className="Side-bar-spans fs-6">Administration</span>
          <div className="custom-dropdown">
            <span className="dropdown-text d-flex justify-content-around" onClick={handleClick}>
              <div className="Sidebar-options"><RiAdminFill className="mb-1" />
               <span className="ms-1 fs-6"> Admin Section</span></div>

              <div>
                <FaGreaterThan className="mb-1 Navbar-Greater-Sign text-secondary"
                className= {`arrow-sign ${showOptions ? 'rotate' : ''}`} 
                /></div>
            </span>
            <div
            className={`dropdown-options ${showOptions ? 'show-options' : ''}`}
            >
              <ul className="Sidebar-UL">
                <li ><Link to="/" onClick={() => handleLinkClick("/")} style={{color: activeLink === '/' ? "white" : ""}}  >Admission Query</Link></li>
                <li ><Link to="/visitor-book" onClick={() => handleLinkClick("/visitor-book")} style={{color: activeLink === '/visitor-book' ? "white" : ""}} >Visitor Book</Link></li>
                <li><Link to="/complaint" onClick={() => handleLinkClick("/complaint")} style={{color: activeLink === '/complaint' ? "white" : ""}}>Complaint</Link></li>
                <li><Link to="/postal-recieve" onClick={() => handleLinkClick("/postal-recieve")} style={{color: activeLink === '/postal-recieve' ? "white" : ""}}>Postal Recieve</Link></li>
                <li><Link to="/postal-dispatch" onClick={() => handleLinkClick("/postal-dispatch")} style={{color: activeLink === '/postal-dispatch' ? "white" : ""}}>Postal Dispatch</Link></li>
                <li><Link to="/phone-call-log" onClick={() => handleLinkClick("/phone-call-log")} style={{color: activeLink === '/phone-call-log' ? "white" : ""}}>Phone Call Log</Link></li>
                <li><Link to="/admin-setup" onClick={() => handleLinkClick("/admin-setup")} style={{color: activeLink === '/admin-setup' ? "white" : ""}}>Admin Setup</Link></li>
                <li><Link to="/id-card" onClick={() => handleLinkClick("/id-card")} style={{color: activeLink === '/id-card' ? "white" : ""}}>ID Card</Link></li>
                <li><Link to="/certificate" onClick={() => handleLinkClick("/certificate")} style={{color: activeLink === '/certificate' ? "white" : ""}}>Certificate</Link></li>
                <li><Link to="/generate-certificate" onClick={() => handleLinkClick("/generate-certificate")} style={{color: activeLink === '/generate-certificate' ? "white" : ""}}>Generate Certificate</Link></li>
                <li><Link to="/generate-Id-Card" onClick={() => handleLinkClick("/generate-Id-Card")} style={{color: activeLink === '/generate-Id-Card' ? "white" : ""}}>Generate ID Card</Link></li>
              </ul>
            </div>
          </div>
        </ul>

        {/* Administration area in sidebar end */}

        {/* Accounts Section  */}
        <ul className="nav nav-pills flex-column mb-auto mt-4">
          <span className="Side-bar-spans fs-6">Accounts</span>
          <div className="custom-dropdown">
            <span className="dropdown-text d-flex justify-content-around" onClick={handleMenuClick}>
              <div className="Sidebar-options"><RiAdminFill className="mb-1"/> <span className=" fs-6"> Wallet</span></div>

              <div>
                <FaGreaterThan className="mb-1 Navbar-Greater-Sign text-secondary"
                className={`arrow-sign ${showSubMenu ? 'rotate' : ''}`} 
                /></div>
            </span>
            <div
            className={`dropdown-options ${showSubMenu ? 'show-options' : ''}`}
            >
              <ul className="Sidebar-UL">
                <li><Link to="/pending-deposit" onClick={() => handleLinkClick("/pending-deposit")} style={{color: activeLink === '/pending-deposit' ? "white" : ""}}>Pending Deposit</Link></li>
                <li><Link to="/approve-deposit" onClick={() => handleLinkClick("/approve-deposit")} style={{color: activeLink === '/approve-deposit' ? "white" : ""}}>Approve Deposit</Link></li>
                <li><Link to="/reject-deposit" onClick={() => handleLinkClick("/reject-deposit")} style={{color: activeLink === '/reject-deposit' ? "white" : ""}}>Reject Deposit</Link></li>
                <li><Link to="/wallet-transaction" onClick={() => handleLinkClick("/wallet-transaction")} style={{color: activeLink === '/wallet-transaction' ? "white" : ""}}>Wallet Transaction</Link></li>
                <li><Link to="/refund-request" onClick={() => handleLinkClick("/refund-request")} style={{color: activeLink === '/refund-request' ? "white" : ""}}>Refund Request</Link></li>
              </ul>
            </div>
          </div>
        </ul>
        {/* Accounts Section end */}
      </div>
    </div>
  )
}

export default Sidebar;