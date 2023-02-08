import './App.css';
import DataFetching from './HooksComponents/DataFetching';
//import ApiFetch from './HOOK_API_PROJET/ApiFetch';
//import ExBootstrap from './Project1/ExBootstrap';
// import Form from './Project1/Form';
// import Header from './Project1/Header';
//import { Routes,Route} from 'react-router-dom';
// import About from './Router/About';
// import Home from './Router/Home';
// import Services from './Router/Services';
// import Navbar from './Router/Navbar';
// import Transaction from './Router/Transaction';

function App() {
  return (
    <>
    {/* <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Transaction' element={<Transaction/>}/>
    </Routes> */}
    {/* <Header/>
    <Form/> */}
 {/* <ApiFetch/> */}
 <DataFetching/>
    </>
  );
}

export default App;
