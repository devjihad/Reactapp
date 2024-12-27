import { useEffect, useState } from "react";
import Job from "./job";

const Jobs = () => {
    const [data, setdata]=useState([])
    const[ valu, setvalu]=useState(3)
    // console.log(data)
    useEffect(()=>{
        fetch('https://next-level-two-ashen.vercel.app/jobs?fbclid=IwZXh0bgNhZW0CMTAAAR1yZRJVtYwP0Zj5Hv2-jKdIZ72R7xnNDikYkZuwfLJ5JtLqauU0mLrXXwc_aem_B34KIwirNIEkkykVCTfcoA/jobs')
        .then(res=>res.json())
        .then(dataa=>setdata(dataa))
    },[])
    return (
        
          <div>
             <div className="grid grid-cols-3 max-w-5xl mx-auto">
             {
                data.length?data.slice(0,valu).map(date=><Job key={date._id} date={date}></Job> ):<div className="grid grid-cols-3 gap-96">
                    <div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
                    <div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
                    <div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
                </div>
            }
            
           </div>
           <div className="flex mt-5 justify-center">
           {
               valu=== 3?<button className="btn btn-primary text-xl font-bold " onClick={()=>setvalu(data.length)}>View all</button>:<button className="btn btn-primary text-xl font-bold " onClick={()=>setvalu(3)}>Show Three</button>
           }
       </div>
          </div>
        
    );
};

export default Jobs;