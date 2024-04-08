import React, { useEffect, useState } from 'react'
import Logo from '../assets/Logo.png'
// import FOOTER from '../src/assets/Picture leaf.jpg';
import { Link } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import profile from "../assets/Picture leaf.jpg"
import Footer from '../component/Footer';
// import { selectUser } from './authSlice';
import axios from "axios";

export default function InventryProfile() {

        // const [InDetails, setInDetails] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:3001/server/inventory/inventoryProfileGetAll")
    //       .then((result) => {
    //         console.log("data: ", typeof result.data.data); // Check the fetched data
    //         console.log("data: ", Object.values(result.data.data)); // Check the fetched data
    //         setInDetails(result.data ? Object.values(result.data.data) : []);
    //       })
    //       .catch((err) => console.error(err)); // Log any errors
    
    //       console.log(InDetails,"cdcdcdcd")
    //   }, []);
    


  return (
    <>
    <div className='flex justify-between  mt-4 px-14 '>
          <div><img  className='w-[120px] h-[62px] ' src={Logo} alt='Logo'/></div>
        <div>
            <ul className='flex gap-6'>
            <li className='hover:text-[#75d705] hover:border-solid cursor-pointer text-2xl font-serif'>Inventory Dashbord</li>
            </ul>
        </div>
          <div><h1 className='Navbart_btn'>Login</h1></div>
    </div>

    
    <div className=' flex flex-row ' >
        <div className='className= bg-lime-950 w-[200px] h-[600px]text-center  rounded-tr-2xl rounded-bl-2xl mx-4'>
            <Link to ='/Inventry_info' className='btn'><VscAccount /> Profile</Link>
            <Link to ='/InventryAddtoform' className='btn'><MdOutlineLocalGroceryStore />Add to Form</Link>
            <Link to='/InventryAnalytics' className=' btn'><MdOutlineAnalytics />Analytics</Link>
            <Link to ='/InventryCalculation'className='btn-side' >Calculate</Link>
            <Link to ='/' className=' btn'>Back</Link>

        </div>
        <div className='w-[20%] h-[700px] flex-grow border bg-lime-50 rounded-br-2xl rounded-tl-2xl '>
          <div className="w-[1165px] h-[136px] flex flex-row items-start justify-end py-0 px-5 box-border max-w-full">
            <img
            className="h-[136px] w-[161px] relative rounded-[50%] object-cover z-[1]"
            loading="lazy"
            alt=""
            src={profile}
            />
          </div>
          <div className=" w-1/2 bg-white bg rounded p-3 ml-[300px] backdrop-grayscale-0 bg-white/30">
                <form onSubmit='' >
                    <h2 className="text-2xl font-bold mb-4 font-serif">Add Product</h2>
                    <div className="mb-2 font-serif">
                        <label htmlFor="">ID</label>
                        <input
                            type="text"
                            placeholder="Menan001"
                            className="w-full p-2 border rounded"
                            

                            />
                    </div>
                    <div className="mb-2 font-serif">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            placeholder="Menan"
                            className="w-full p-2 border rounded"
                            

                            />
                    </div>
                    <div className="mb-2 font-serif">
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            placeholder="menan@gmail.com"
                            className="w-full p-2 border rounded"
                            

                        />
                    </div>
                    <div className="mb-2 font-serif">
                        <label htmlFor="">Place</label>
                        <input
                            type="text"
                            placeholder="Batticaloa"
                            className="w-full p-2 border rounded"
                            
                            
                        />
                    </div>
                    <div className="mb-2 font-serif">
                        <label htmlFor="">Phone.No</label>
                        <input
                            type="text"
                            placeholder="+94 77613765"
                            className="w-full p-2 border rounded"
                            
                            
                        />
                    </div>
                    <div className='flex flex-row p-3 justify-between font-serif'>
                    <Link to ="/createProfile" className="edit_btn">Edite</Link>
                </div>
                </form>
{ /* <div className=" w-1/2 bg rounded pr-6 ml-[300px] backdrop-grayscale-0 bg-gray-300 ">
                        <form>
                            <h2 className="text-2xl font-bold font-serif text-center pt-8">Profile</h2>

                            
                                {InDetails.map((details)=>(
                                    <tr >
            
                                        <h1 className="style_map pt-8">ID:-<p className='text-[18px] pl-[80px]  '>{details.Id}</p></h1>
                                        <h1 className="style_map">Name:-<p className='text-[18px] pl-[80px] '>{details.name}</p></h1>
                                        <h1 className="style_map">Email:-<p className='text-[18px] pl-[80px] '>{details.email}</p></h1>
                                        <h1 className="style_map">Place:-<p className='text-[18px] pl-[80px] '>{details.place}</p></h1>
                                        <h1 className="style_map">Phone:-<p className='text-[18px] pl-[80px] '>{details.phone}</p></h1>

                                    </tr>
                                ))}
                            
        
           
                            <div className='flex flex-row p-3 justify-between font-serif'>
                            <Link to ="/createProfile" className="edit_btn">Edite</Link>
                                
                            </div>
                        </form>
                </div>            */}
                
        </div>
    </div>
    </div>
    <br/>
    <div>
    <Footer/>
    </div>

</>  )
}
