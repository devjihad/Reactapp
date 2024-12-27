import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className="flex max-w-5xl mx-auto justify-between bg-gradient-to-r from-indigo-500  h-16 items-center font-bold px-10 text-white text-2xl ">
          LOGO 
        <div className="flex gap-10">
        <Link to='/'>Home</Link>   
        <Link to='Apply'>Apply</Link>   
        </div> 
        <button className="btn">Sign in</button>
        </div>
    );
};

export default Nav;