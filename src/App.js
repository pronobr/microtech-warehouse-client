import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Others/Header/Header';
import MyItems from './components/MyItems/MyItems';

import AddItem from './components/AddItem/AddItem';
import InventoryDetails from './components/InventoryDetails/InventoryDetails';
import ManageInventories from './components/ManageInventories/ManageInventories';
import PrivateRouth from './components/PrivateRouth/PrivateRouth';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myitem" element={<MyItems></MyItems>} />
        <Route path="/blog" element={<Blogs></Blogs>} />
        <Route path="*" element={<NotFound></NotFound>} />
        <Route path="/manageinventories" element={
          <PrivateRouth>
        <ManageInventories></ManageInventories>
        </PrivateRouth>
        } />
        <Route path="/additem" element={<AddItem></AddItem>} />
        
        <Route path="/inventory/:inventoryId" element={<PrivateRouth>
          <InventoryDetails></InventoryDetails>
        </PrivateRouth>} />
        
        
        {/* <RequireAuth>
       
        </RequireAuth> */}
       
      </Routes>
    </div>
  );
}

export default App;
