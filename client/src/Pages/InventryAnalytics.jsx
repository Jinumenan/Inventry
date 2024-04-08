import React from 'react'
import Logo from '../assets/Logo.png'
import { GoArchive } from "react-icons/go";
import { TbCategory } from "react-icons/tb";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LineChart, Line } from 'recharts';
import { Link } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import Footer from '../component/Footer';

export default function InventryAnalytics() {
    const data = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100
        }
      ];
    
    
    return (
        <div>
        <div className='flex justify-between  mt-4 px-14 '>
           <div><img  className='w-[120px] h-[62px] ' src={Logo} alt='Logo'/></div>
           <div>
               <ul className='flex gap-6'>
                   <li className='hover:text-[#75d705] hover:border-solid cursor-pointer text-2xl font-serif'>Analytics Page</li>
               </ul>
           </div>
               <div><h1 className='Navbart_btn'>Login</h1></div>
       </div>

       <div className=' flex flex-row ' >
           <div className='className= bg-lime-950 w-[200px] h-[600px]text-center rounded-tr-2xl rounded-bl-2xl mx-4 '>
               <Link to='/InventryProfile' className='btn'><VscAccount /> Profile</Link>
               <Link to='/InventryAddtoform' className='btn'><MdOutlineLocalGroceryStore />Add to Form</Link>
               <Link to ='/InventryAnalytics' className=' btn'><MdOutlineAnalytics />Analytics</Link>
               <Link to ='/InventryCalculation'className='btn-side' >Calculate</Link>
               <Link to ='/' className=' btn'>Back</Link>


           </div>
           <div className='w-[20%] h-auto flex-grow border rounded-br-2xl rounded-tl-2xl mx-3 '>
               <main className='main-cards pl-[200px] pb-4'>
                   <div className='card ml-[70px] mt-4'>
                       <div className='card-inner'>
                           <h3 className='font-serif'>Products</h3>
                           <GoArchive className='card_icon'/>
                       </div>
                           <h1>300</h1>
                   </div>
                   <div className='card ml-[150px] mt-4'>
                       <div className='card-inner'>
                           <h3 className='font-serif'>CATEGORIES</h3>
                           <TbCategory className='card_icon'/>
                       </div>
                       <h1>12</h1>
                   </div>
                   </main>
                   
               <div className='charts'>
                   {/* bar chart */}
       
               <ResponsiveContainer width="80%" height="80%">
                     <BarChart
                       width={500}
                       height={300}
                       data={data}
                       margin={{
                         top: 5,
                         right: 30,
                         left: 20,
                         bottom: 5,
                       }}
                     >
                       <CartesianGrid strokeDasharray="3 3" />
                       <XAxis dataKey="name" />
                       <YAxis />
                       <Tooltip />
                       <Legend />
                       <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                       <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                   </BarChart>
               </ResponsiveContainer>
                         {/* pie chart */}
               <ResponsiveContainer width="80%" height="80%">
                     <LineChart
                       width={500}
                       height={300}
                       data={data}
                       margin={{
                         top: 5,
                         right: 30,
                         left: 20,
                         bottom: 5,
                       }}
                     >
                       <CartesianGrid strokeDasharray="3 3" />
                       <XAxis dataKey="name" />
                       <YAxis />
                       <Tooltip />
                       <Legend />
                       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                     </LineChart>
               </ResponsiveContainer>
           </div>
           </div>        
           
       </div>
       <br/>
       <div>
         <Footer/>
       </div>
   </div>  )
}
