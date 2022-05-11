import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Post from "./components/post/Post";
import { Context } from "./context/Context";
import {useContext} from "react"

function App() {
  const {user} = useContext(Context);
  return (
   
      <Router>
      <Topbar/>
     
          <Routes>
          <Route  path="/" element={<Home />}></Route>

          </Routes>
          
          <Routes><Route  path="/register" element={user ? <Home/> :<Register />}> 
            {/* {user ? <Home/> :<Register />} */}
          </Route>
          </Routes>

          <Routes><Route  path="/login" element={user?<Home/>:   <Login />}>
            {/* {user?<Home/>:   <Login />} */}
          </Route></Routes>

        <Routes>  <Route path="/write" element={user?<Write /> :<Register/>}>
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
