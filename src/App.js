import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddUser from "./components/Adduser";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<UserList/>}/>
        <Route  path="add" element={<AddUser/>}/>
        <Route  path="edit/:id" element={<EditUser/>}/>
        <Route  path="detail/:id" element={<UserDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
