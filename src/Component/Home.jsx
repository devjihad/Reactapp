
import Categorys from "./CATEGORY/Categorys";
import Hero from "./Hero";
import Jobs from "./JOBS/Jobs";


const Home = () => {
    return (
      <div>
         <Hero></Hero>
         <h1 className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-500 text-center text-3xl font-bold mt-5 text-white py-3">Category</h1>
         
         <Categorys></Categorys>
         <h1 className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-500 text-center text-3xl font-bold mt-5 text-white py-3">Jobs</h1>
         <Jobs></Jobs>
      </div>
    );
};

export default Home;