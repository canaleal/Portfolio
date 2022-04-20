import React from 'react'
import { Link } from "react-router-dom";

const MainHeader =()=> {

  
    return (
      
           <div className='header h-full '>
                <div className='flex flex-col justify-center items-center h-full p-20' >
                    
                        <h2 className='text-4xl '>Alex Canales</h2>
                        <p>Experienced creating responsive applications for mobile, desktop & web.</p>
  
                        <Link to="/projects" className="special-btn my-10 rounded-lg">View Projects</Link>
             
                </div>              
            </div>
  
    )
  
};

export default  React.memo(MainHeader);
