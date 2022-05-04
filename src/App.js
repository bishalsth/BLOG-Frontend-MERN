import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Post from "./components/post/Post";


function App() {
  const user=true;
  return (
   
      <Router>
      <Topbar/>
     
          <Routes>
          <Route  path="/" element={<Home />}></Route>

          </Routes>
          
          <Routes><Route  path="/register" element={<Register />}> 
            {/* {user ? <Home/> :<Register />} */}
          </Route>
          </Routes>

          <Routes><Route  path="/login" element={<Login/>}>
            {/* {user?<Home/>:   <Login />} */}
          </Route></Routes>

        <Routes>  <Route path="/write" element={<Write/>}>
            {/* {user?<Write /> :<Register/>} */}
          </Route></Routes>

         {/* <Routes> <Route  path="/settings" component={Settings}>
            <Settings></Settings>
            {user ?<Settings />:<Register/>}
          </Route></Routes> */}

      <Routes>    <Route  path="/post/:postId" element={<Single/>}>
            
          </Route></Routes>
      
      </Router>
  );
}

export default App;
