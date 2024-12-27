import { Link,  useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Getdata, Setdata } from "../Local Storage/Storage";


const Details= () => {
    const User =useLoaderData()

    const{_id,category_name,companyName,deadline,description,duty_hours,jobSummary,job_title,location,postDate,skills }=User

    const click=()=>{
      const valu = Getdata()
      const dupli = valu.find(val=>val===_id)
      if(!dupli){
        Setdata(_id)
        toast('Applied Successfully')
      }
       
        else{
            toast.error('Already exist')
        }
    const navigate = useNavigate()
    navigate('Apply')
    }
   
   return (
       <div className="max-w-5xl mx-auto text-white ">
       <h1 className="text-3xl font-bold text-center bg-slate-400 text-white py-4 mt-5">THIS IS JOB DETAILS</h1>
      <div className="grid grid-cols-3 gap-5">
      <div className="col-span-2 border-2 p-5 mt-5 rounded-xl">
           <h1 className="text-2xl font-bold">Job Title</h1>
           <h1>{job_title}</h1>
           <hr  className="border-b-2 my-5"/>
           <h1 className="text-2xl font-bold">Job Sumary</h1>
           <h1>{jobSummary}</h1>
           <hr  className="border-b-2 my-5"/>
           <h1 className="text-2xl font-bold">Description</h1>
           <h1>{description}</h1>
           <hr  className="border-b-2 my-5"/>
       </div>
       <div className=" border-2 p-5 mt-5 rounded-xl">
        <h1 className="text-2xl font-bold">Company Name</h1>
        <h1>{companyName}</h1>
        <h1 className="text-2xl font-bold">Skill</h1>
        <h1>{skills}</h1>
        <h1 className="text-2xl font-bold">Location</h1>
        <h1>{location}</h1>
        <button className="btn btn-outline  text-white mt-4  font-bold text-xl" onClick={click}>Apply</button>
       
        <ToastContainer /> 

       </div>
      </div>
       <Link to='/'><button className="btn bg-slate-50 text-black">Go to Home </button></Link>
       </div>
   )
    
};

export default Details;