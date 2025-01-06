import React, { useState } from "react";
import { createContext } from "react";
const dataContext = createContext();



function Data({ children }) {
    //   console.log(children)
    const [formData, setFormData] = useState({url:'',type:'Post'})
    const [headerData,setHeaderData]=useState([]);
    const[paramData,setParamData]=useState([]);
    const[jsonText,setJsonText]=useState('')
    return (
        <dataContext.Provider value={{ formData, setFormData,headerData,setHeaderData,paramData,setParamData,jsonText,setJsonText }}>
            {children}
        </dataContext.Provider>
    )
}
export { dataContext };
export default Data;








