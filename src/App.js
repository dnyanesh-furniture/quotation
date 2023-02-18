
import Quotation from './components/Quotation/Quotation'
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import CustomerInfo from './components/Quotation/Elements/CustomerInfo';
import Details from './components/Quotation/Elements/Details';

function App() {
  return (
  <div>
  
   <Router>
          <Routes>
            <Route exact path='/' element={<Quotation/>}></Route>
            <Route exact path='/custinfo' element={< CustomerInfo />}></Route>
            <Route exact path='/finalquote' element={< Details />}></Route>
          </Routes>
   </Router>
   
   
  </div>
   
  );
}

export default App;
