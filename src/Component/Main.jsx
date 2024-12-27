import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./CATEGORY/Footer";


const Main = () => {
    return (
        <div>
           <Nav></Nav>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Main;