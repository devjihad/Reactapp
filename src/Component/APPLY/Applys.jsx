// import { useState } from "react";
// import { Removedata } from "../Local Storage/Storage";


const Applys = ({valu}) => {
  // const{_id}=valu
  console.log(valu)
  // const[loader, setloader]=useState()
  // const handle=(id)=>{
  //  const data =loader.filter(load=>load._id !== id)
  //  if(data){
  //   setloader(data)
    
  //  }
  //  Removedata(_id)
  // }
  
    return (
        <div className="hero max-w-5xl mx-auto bg-slate-300 mt-5">
  <div className="hero-content flex-col lg:flex-row gap-10 text-black">
    <img
      src={valu.image}
      className=" rounded-lg shadow-2xl h-[250px] w-[250px]" />
    <div>
      <h1 className="text-5xl font-bold">{valu.category_name}</h1>
      <p className="py-1">{valu.jobSummary}</p>
      <p className="py-1">{valu.location}</p>
     <div className="flex justify-center"> 
        <button className="btn btn-primary" >Delete</button>
    </div>
    </div>
  </div>
</div>
    );
};

export default Applys;