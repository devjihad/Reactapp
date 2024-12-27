const Getdata=()=>{
    const get =localStorage.getItem('value')
    if(get){
        return JSON.parse(get)
    }
   
        return []
    
}
 const Setdata=(id)=>{
    const gettdata =Getdata()
    const duplicate =gettdata.find(gett=> gett===id)
    if(!duplicate){
        gettdata.push(id)
        localStorage.setItem('value',JSON.stringify(gettdata))
    }
 }

 export{ Getdata,Setdata}