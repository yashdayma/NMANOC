import React from "react";
import { Link } from "react-router-dom";

const Circulars=()=>{
    return (

       <div className=" p-24 " >
        <table className="">
            <thead className=" border border-black bg-orange-400">
                <tr  className="  ">
                     <td className="font-bold text- border-2 text-center p-2 border-black"> S no.</td>
                    <td className="font-bold text- border-2 text-center p-2 border-black"> Circular.</td>
                    <td className="font-bold text- border-2 text-center p-2 border-black"> Date</td>
                    <td className="font-bold text- border-2 text-center p-2 border-black"> Action</td>
                </tr>
            </thead >
            <tbody className="p-2 border-2 border-black">
                <tr className="p-2" >
                <td className="border-2 text-center p-2 border-black">1</td>
                <td className="border-2 text-center p-2 border-black">Forwarding of NOC applications by Competent Authorities to national Monuments Authority-reg</td>
                 <td className="border-2 text-center p-2 border-black">August 24, 2022</td>
                 <td className="border-2 text-center p-2 border-black">View</td>
                </tr>
                <tr  className="p-2 border-b border-black">
                 <td className="border-2 text-center p-2 border-black">2</td>
                 <td className="border-2 text-center p-2 border-black">Circular relating to HIA Report from INTACH</td>
                 <td className="border-2 text-center p-2 border-black">January 07, 2020</td>
                 <td className="border-2 text-center p-2 border-black">View</td>
                </tr>
                <tr className="p-2 border-b border-black">
                 <td className="border-2 text-center p-2 border-black">3</td>
                 <td className="border-2 text-center p-2 border-black">Circular on SMARAC App II</td>
                 <td className="border-2 text-center p-2 border-black">January 28, 2020</td>
                 <td className="border-2 text-center p-2 border-black">View</td>
                </tr>
                <tr className="p-2 border-b border-black">
                 <td className="border-2 text-center p-2 border-black">4</td>
                 <td className="border-2 text-center p-2 border-black">Circular for the covid</td>
                 <td className="border-2 text-center p-2 border-black">August 24, 2022</td>
                 <td className="border-2 text-center p-2 border-black">View</td>
                </tr>
                <tr className="p-2 border-b border-black ">
                 <td className="border-2 text-center p-2 border-black">5</td>
                 <td className="border-2 text-center p-2 border-black">Circular on colour coded map of Crentrally Protected Monuments in Delhi</td>
                 <td className="border-2 text-center p-2 border-black"> September 06, 2022</td>
                 <td className="border-2 text-center p-2 border-black">View</td>
                </tr>
                <tr className="p-2">
                 <td className="border-2 text-center p-2 border-black">6</td>
                 <td className="border-2 text-center p-2 border-black">Circular related to oline applications</td>
                 <td className="border-2 text-center p-2 border-black">August 24, 2022</td>
                 <td className="border-2 text-center p-2 border-black">View</td>
                </tr>
            </tbody>
        </table>
       </div>
      
      

    )
}

    export default Circulars;