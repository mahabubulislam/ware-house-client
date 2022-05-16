import { Route, Routes } from "react-router-dom";
import AddItems from "./components/AddItems/AddItems";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";




function App() {
  return (
    <div>
       <Header></Header>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path='/additem' element={<AddItems/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
