import { Routes, Route } from 'react-router-dom'
import './App.css'
// import Home from './pages/Home'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import AdminQuery from './pages/Home-Pages/Admin-Query'
import VisitorBook from './pages/Home-Pages/Visitor-Book'
import Complaint from './pages/Home-Pages/Complaint'
import PostalRecieve from './pages/Home-Pages/Postal-Recieve'
import PostalDisptach from './pages/Home-Pages/Postal-Disptach'
import PhoneCallLog from './pages/Home-Pages/Phone-Call-Log'
import AdminSetup from './pages/Home-Pages/Admin-Setup'
import IDCard from './pages/Home-Pages/ID-Card'
import Certificate from './pages/Home-Pages/Certificate'
import GenerateCertificate from './pages/Home-Pages/Generate-Certificate'
import GenerateCard from './pages/Home-Pages/Generate-Card'
import PendingDeposit from './pages/Wallet-Pages/Pending-Deposit'
import ApproveDeposit from './pages/Wallet-Pages/Approve-Deposit'
import RejectDeposit from './pages/Wallet-Pages/Reject-Deposit'
import WalletTransaction from './pages/Wallet-Pages/Wallet-Transaction'
import RefundRequest from './pages/Wallet-Pages/Refund-Request'

function App() {


  return (

    <div className="  row h-100 ">
      <Sidebar />
      <div className=" col-lg-10 p-0 " style={{marginLeft:"16.5%"}}>
        <Navbar />
        <div className="container-fluid p-1">
          {/* Main Content */}
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<AdminQuery />} />
            <Route path="/visitor-book" element={<VisitorBook />} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/postal-recieve" element={<PostalRecieve />} />
            <Route path="/postal-dispatch" element={<PostalDisptach />} />
            <Route path="/phone-call-log" element={<PhoneCallLog />} />
            <Route path="/admin-setup" element={<AdminSetup/>} />
            <Route path="/id-card" element={<IDCard/>} />
            <Route path="/certificate" element={<Certificate/>} />
            <Route path="/generate-certificate" element={<GenerateCertificate/>} />
            <Route path="/generate-Id-Card" element={<GenerateCard/>} />
        {/* Wallet page Routes */}
            <Route path="/pending-deposit" element={<PendingDeposit/>} />
            <Route path="/approve-deposit" element={<ApproveDeposit/>} />
            <Route path="/reject-deposit" element={<RejectDeposit/>} />
            <Route path="/wallet-transaction" element={<WalletTransaction/>} />
            <Route path="/refund-request" element={<RefundRequest/>} />
          </Routes>
          {/* Add your dashboard content here */}
        </div>
      </div>
    </div>
  )
}

export default App
