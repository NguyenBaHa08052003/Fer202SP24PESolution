import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ListEmployees from "./components/ListEmployees";
import EditPro from "./components/EditPro";
import AddProject from "./components/AddProject";

function App(){
    return (
       <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/departments/:id/employees" element={<ListEmployees/>}/>
        <Route path="/projects/edit/:id" element={<EditPro/>}/>
        <Route path="/add/project" element={<AddProject/>}/>
       </Routes>
    )
}

export default App;