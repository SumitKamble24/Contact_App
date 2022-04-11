
import './App.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import ContactList from './components/ContactList';
import { Button } from '@mui/material';
import Header from './components/Header';
import CreateContact from './components/CreateContact';


function App() {
  return (
    <div className='Page'>

    <div className='Head'>
      <Header title="Contact Manager"/>
      </div> 
    
      <div className='btn_post'>
        <Router>
          <div className='btn_sub'>
            <Link to="/ContactList" className="Linkt"><Button className="dashbtn" variant="outlined" color="secondary"><b>Contact List</b> </Button>
            </Link>
            <Link to="/Create_Contact" className="Linkt"><Button className="dashbtn" variant='outlined' color="secondary" ><b>Create Contact</b> </Button></Link>

           
          </div>

          <div>
            <Route path="/ContactList"><ContactList/></Route>
            <Route path="/Create_Contact"><CreateContact/></Route>
            
          </div>
        </Router>
    <div>

    </div>
      </div>
    </div>
  );
}

export default App;
