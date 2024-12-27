import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Getdata } from "../Local Storage/Storage";
import Applys from "./Applys";
// import Applys from "./Applys";

const Apply = () => {
    const load =useLoaderData()
    const[ value ,setvalue]=useState([])
    console.log(value)
    useEffect(()=>{
        const data =Getdata()
        const arra = []
        setvalue(arra)
        for(const datee of data){
            const findData =load.find(loaed=> loaed._id ===datee)
         
            arra.push(findData)
        }
    },[])
    return (
        <div>
           {
            value.map(valu=><Applys valu={valu} key={valu._id}></Applys>)
           } 
        </div>
    );
};

export default Apply;