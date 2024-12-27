import { SiHyperskill } from "react-icons/si";


const Category = ({valu}) => {
// console.log(valu)
const{category_name,img}= valu
    return (
        <div className="h-[300px] w-[250px] bg-slate-300  mb-10 mx-14 rounded-xl mt-10">
            <img src={img} alt="" />

          <h1 className="flex items-center gap-1 justify-center text-black font-bold"> <SiHyperskill />{category_name}</h1>
          
            
        </div>
    );
};

export default Category;