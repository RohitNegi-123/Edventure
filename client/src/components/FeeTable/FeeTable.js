import React,{useState} from 'react'
import  './FeeTable.css'
function FeeTable() {

    const [btn1,setBtn1]=useState(true);
    const [btn2,setBtn2]=useState(false);
    const [btn3,setBtn3]=useState(false);
    const [btn4,setBtn4]=useState(false);

    const handleSetBtn1=()=>{
       setBtn1(true);
       setBtn2(false);
        setBtn3(false);
       setBtn4(false);
    }
    const handleSetBtn2=()=>{
        setBtn1(false);
        setBtn2(true);
         setBtn3(false);
        setBtn4(false);
    }
    const handleSetBtn3=()=>{
        setBtn1(false);
        setBtn2(false);
         setBtn3(true);
        setBtn4(false);
    }
    const handleSetBtn4=()=>{
        setBtn1(false);
       setBtn2(false);
        setBtn3(false);
       setBtn4(true);
    }

    return (
       
        <div className="container-table">
            <h1>Fee Structure: </h1>

            <div className ="courseWrapper">

                <button onClick={handleSetBtn1}
                className={btn1?'dark-btn courseName':'light-btn courseName'}
                >CE</button>


                <button onClick={handleSetBtn2}
                className={btn2?'dark-btn courseName':'light-btn courseName'}
               >ME</button>

                <button onClick={handleSetBtn3}
                className={btn3?'dark-btn courseName':'light-btn courseName'}
                >EE</button>

                <button onClick={handleSetBtn4}
                className={btn4?'dark-btn courseName':'light-btn courseName'}
                >E & T</button>

            </div>
            
            <table className="fee-table">
            <tr>
                        <th> Course</th>
                        <th> Fee</th>
                        <th> Teaching Hours</th>
                        <th> Course Validity</th>
                        <th> Course Language</th>
                        <th> Commencement Date</th>
                        <th> Batch Timings</th>
                        
                    </tr>
                
                <tbody>
                    
                    <tr>
                        <td>ESE + Gate 2022 Live Online Courses</td>
                        <td>Rs. 62501 + GST</td>
                        <td>1200 Hours</td>
                        <td >Till ESE 2022 Pre and Gate 2022 Examination</td>
                        
                       <td className="sub-col">
                            <tr >
                                <td>Hinglish</td>
                            </tr>
                            <tr>
                                <td>Hinglish</td>                      
                            </tr>
                            <tr>
                                <td>English</td> 
                            </tr>   
                        </td>             
                            

                        
                        <td className="sub-col">
                            <tr>
                               <td> 5th May, 2021</td>
                            </tr>
                            <tr>
                            <td> 5th May, 2021</td>
                            </tr>
                            <tr>
                            <td> 5th May, 2021</td>            
                            </tr>
                          </td>  
                        
                        <td className="sub-col">
                            
                            <tr>
                                <td><span>1st Batch</span> <br/>8:30 AM to 1:30 PM </td>
                            </tr>
                            <tr>
                                <td><span>2nd Batch</span><br/> 2:30 PM to 8:30 PM</td>                      
                            </tr>
                            <tr>
                                <td><span>3rd Batch</span><br/> 2:30 PM to 8:30 PM</td>                 
                            </tr>
                            
                        </td>
                    </tr>   
                    
                    </tbody>
            </table>
            
        </div>
    )
}

export default FeeTable