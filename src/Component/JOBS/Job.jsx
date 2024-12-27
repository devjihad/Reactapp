import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";

const Job = ({date}) => {
    // console.log(date)
    const {image,job_title, companyName,location,salary, skills ,_id}= date
    return (
        <div className="h-[450px] w-[300px] bg-slate-300 text-black my-5 rounded-box">
            <img className="h-[250px] w-[300px]" src={image} alt="" />
           <div className="px-5">
           <h1 className="text-2xl font-bold">{job_title}</h1>
            <p className="text-xl font-semibold">{companyName}</p>
            {/* <p>{skills}</p> */}
           <div className="flex gap-5">
           <p>{salary}</p>
           <p className="flex items-center gap-1"> <IoLocation />{location}</p>
           </div>
            <div className="flex justify-center">
           <Link to={`/job/${_id}`}> <button className="btn mt-5 ">Details </button></Link>
            </div>
           </div>
           <div>
        
           </div>
        </div>
    );
};

export default Job;