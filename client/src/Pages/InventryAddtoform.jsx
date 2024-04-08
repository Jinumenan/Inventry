import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import Footer from "../component/Footer";

export default function InventryAddtoform() {
    const [InProduct, setInProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/server/inventory/inventoryGetAll")
          .then((result) => {
            console.log("data: ", typeof result.data.data); // Check the fetched data
            console.log("data: ", Object.values(result.data.data)); // Check the fetched data
            setInProduct(result.data ? Object.values(result.data.data) : []);
          })
          .catch((err) => console.error(err)); // Log any errors
    
          console.log(InProduct,"data calling")
      }, []);
    
      const handleDelete = (id)=>
      {
        axios.delete(`http://localhost:3001/server/inventory/inventoryDelete/${id}`)
        .then(res=>{console.log(res)
          alert('Inventory details delete successfully!');
    
            window.location.reload()
        } )
        .catch(err=>console.log(err))
      }

  return (
    <div>
    {/* Footer */}
    <div className="flex justify-between  mt-4 px-14 ">
      <div>
        <img className="w-[120px] h-[62px] " src={Logo} alt="Logo" />
      </div>
      <div>
        <ul className="flex gap-6">
          <li className="hover:text-[#75d705] hover:border-solid cursor-pointer text-2xl font-serif">
            Inventory Page
          </li>
        </ul>
      </div>
      <div>
        <h1 className="Navbart_btn">Login</h1>
      </div>
    </div>

    {/* sidebar button*/}
    <div className=" flex flex-row">
      <div className="className= bg-lime-950 w-[200px] h-[600px] text-center rounded-tr-2xl rounded-bl-2xl mx-4  ">
        <Link to="/InventryProfile" className="btn"><VscAccount />Profile</Link>
        <Link to="/InventryAddtoform" className="btn"><MdOutlineLocalGroceryStore />Add to Form</Link>
        <Link to="/InventryAnalytics" className=" btn"><MdOutlineAnalytics />Analytics</Link>
        <Link to ='/InventryCalculation'className='btn-side' >Calculate</Link>
        <Link to="/" className=" btn">Back</Link>
      </div>
      <div className="w-[20%] h-[600px] flex-grow border rounded-b">
          <main className="main-container">
          <div className="">
            <h3 className=" text-2xl font-serif">Inventory Product list</h3>
            <hr />
          </div>
          </main>

        {/* search */}
          <div className="w-[300px] ml-[50px]">
          <label>
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg class=" fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              class="search"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
          </div>

          <div className=" bg-white rounded p-3 ">
            <div className="flex justify-end">
              <Link to="/create" className="btn m-[30px]"><IoMdAddCircleOutline /> Add Product</Link>
            </div>
            <div className="tableContainer">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Qty</th>
                      <th>Price(LKR)</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* get all data from db */}
                    {InProduct.map((product, index) => (
                      <tr key={index}>
                        <td>{product.Id}</td>
                        <td>{product.name}</td>
                        <td>{product.qty}</td>
                        <td>{product.price}</td>
                        <td className="flex">
                          <Link to={`/InventryUpdateform/${product._id}`} className="btn-update"><MdModeEditOutline/></Link>
                          <button className="btn-delete" onClick={(e)=>handleDelete(product._id)}><MdDelete /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
              </table>
            </div>
        </div>
      </div>
    </div>
    <br/>
    <div>
    <Footer/>
    </div>
  </div>
)
}
