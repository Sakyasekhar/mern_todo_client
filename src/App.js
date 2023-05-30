import React from 'react';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import './App.css';



import Home from './pages/home';
import Navbar from "./components/navbar";
import Newblog from './pages/newblog';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <br />
      <div className='content'>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/create" Component={Newblog} />
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AppNav } from "./Components/AppNav";
// import { Home } from "./Pages/Home";
// import { Users } from "./Pages/Users";
// export const App = () => {
//   return (
//     <Router>
//       <AppNav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/users" element={<Users />} />
//       </Routes>
//     </Router>
//   );