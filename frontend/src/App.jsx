import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AdminRegistration from './components/AdminDashboard/AdminRegister/AdminRegistration';
import AdminLogin from './components/AdminDashboard/Authentication/AdminLogin';
import ProtectedRoute from './components/AdminDashboard/Authentication/ProtectedRoute';
import AdminDonation from './components/AdminDashboard/DonationHandling/AdminDonation';
import CreateEvents from './components/AdminDashboard/EventsHandler/CreateEvents';
import DeleteEvent from './components/AdminDashboard/EventsHandler/DeleteEvent';
import UpdateEvent from './components/AdminDashboard/EventsHandler/UpdateEvent';
import AdminQueries from './components/AdminDashboard/QueryHandling/AdminQueries';
import Donations from './components/Donations/Donations';
import Events from './components/Events/Events';
import EventsPage from './components/Events/EventsPage';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Gods from './components/Gods/Gods';
import Navbar from './components/Navbar/Navbar';
import QueryForm from './components/QueryForm/QueryForm';
import Slidingbar from './components/Slidingbar/Slidingbar';
import SlidingImages from './components/SlidingImages/SlidingImages';
import SubGods from './components/SubGods/SubGods';
function App() {
  return(
     <Router>
      <Routes>
        <Route path="/" element={<>
              <Navbar />
              <Slidingbar />
              <SlidingImages />
              <Events />
              <Gods />
              <SubGods />
              <QueryForm />
              <Footer />
              </>}/>
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<>
              <Navbar />
              <Gallery />
              <Footer />
              </>} />
              <Route path="/donations" element={<>
              <Navbar />
              <Donations />
              <Footer />
              </>} />
        <Route path="/about" element={<>
              <About />
              <Footer />
              </>} />
        <Route path="/admin/dashboard" element={<>
        <ProtectedRoute>
         <Navbar />
              <AdminDashboard />
              <Footer />
            </ProtectedRoute>
                </>} />
       <Route path="/createevent" element={<>
       <ProtectedRoute>
       <Navbar />
       <CreateEvents />
       <Footer />
       </ProtectedRoute>
       </>} />
       <Route path="/deleteevent" element={<>
        <ProtectedRoute>
       <Navbar />
       <DeleteEvent />
            <Footer />
            </ProtectedRoute>
       </>
       } />
       <Route path="/admindonation" element={<>
       <ProtectedRoute>
       <Navbar />
       <AdminDonation />
       <Footer />
       </ProtectedRoute>
       </>} />
       <Route path="/adminquery" element={<>
       <ProtectedRoute>
       <Navbar />
       <AdminQueries />
       <Footer />
       </ProtectedRoute>
       </>} />
        <Route path='/adminregister' element={<>
            <Navbar />
       <AdminRegistration />
       </>} />
       <Route path='/admin/login' element={<>
            <Navbar />
       <AdminLogin />
       </>} />
       <Route path="/updateevent" element={<>
        <ProtectedRoute>
       <Navbar />
       <UpdateEvent />
       <Footer />
       </ProtectedRoute>
       </>} />
      </Routes>
    </Router>
  )
}

export default App;
