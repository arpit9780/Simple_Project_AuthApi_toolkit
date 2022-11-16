import './App.css';
import {Route,Routes} from 'react-router-dom'
import { LoginUser } from './Components/LoginUser';
import { SignupUser } from './Components/SignupUser';
import { Header } from './Components/Header';
import { Dashboard } from './Components/Dashboard';
import { PrivateRout } from './PrivRoute/PrivateRout';
import { ViewDetail } from './Components/ViewDetail';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12 col-sm-12 col'>
      <Header/>
        </div>
      </div>
    </div>
      <Routes>
        <Route path='/' element={<LoginUser/>}/>
        <Route path='/signup' element={<SignupUser/>}/>
        <Route path='/dashboard' element={<PrivateRout><Dashboard/></PrivateRout>}/>
        <Route path='/view/:id' element={<ViewDetail/>}/>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
