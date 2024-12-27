import { useEffect, useState } from "react";
import Category from "./Category";


const Categorys = () => {
    const [value, setvalue]=useState([])
    // console.log(value)
    useEffect(()=>{
        fetch('https://next-level-two-ashen.vercel.app/category?fbclid=IwZXh0bgNhZW0CMTAAAR1yZRJVtYwP0Zj5Hv2-jKdIZ72R7xnNDikYkZuwfLJ5JtLqauU0mLrXXwc_aem_B34KIwirNIEkkykVCTfcoA/caterogy')
        .then(res=>res.json())
        .then(data=>setvalue(data))
    },[])
    return (
        <div className="grid grid-cols-3 max-w-5xl mx-auto">
            {
                value.map(valu=> <Category key={valu._id} valu={valu} ></Category>)
            }
        </div>
    );
};

export default Categorys;