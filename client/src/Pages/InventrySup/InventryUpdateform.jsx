import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import axios from 'axios';

export default function InventryUpdateform() {
    const { id } = useParams(); // Retrieve the id parameter from the URL

    const [Id, setId] = useState("");
    const [name, setName] = useState("");
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState(""); // Corrected spelling
    
    useEffect(() => {
        axios
          .get(`http://localhost:3001/server/inventory/inventoryGetOne/${id}`)
          .then((result) => {
            console.log("data Calling",result);
    
            setId(result.data.data.Id);
            setName(result.data.data.name);
            setQty(result.data.data.qty);
            setPrice(result.data.data.price);
          })
          .catch((err) => console.log(err));
      }, [id]);
    
      const handleUpdate = (e) => {
        e.preventDefault();
        axios
          .put(`http://localhost:3001/server/inventory/inventoryUpdate/${id}`, {
            Id,
            name,
            qty,
            price, 
          })
          .then((result) => {
            console.log(result);
            alert("Product details successfuly update");
            // You can redirect to another page or perform any other action upon successful update
          })
          .catch((error) => {
            console.error('Product not update :', error);
          });
      };
    
  return (
<div >                    
      <div className='flex justify-between mt-4 px-14 '>
        <div><img  className='w-[120px] h-[48px] ' src={Logo} alt='Logo'/></div>
        <div>
            <ul className='flex gap-6'>
              <li className='hover:text-[#75d705] hover:border-solid cursor-pointer text-2xl font-serif'>Update page</li>
            </ul>
        </div>
        <div><h1 className='Navbart_btn'>Login</h1></div>
      </div>

      <div className='flex flex-row' >
        <div className='w-[20%] h-[500px] flex-grow border'>
          <div className=" w-1/2 bg-white bg rounded p-3 ml-[300px]">
            <h2 className=" text-2xl font-bold mb-4 font-serif">Update Product</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-2 font-serif">
                <label htmlFor="">ID</label>
                <input
                  type="text"
                  placeholder="Enter the Id"
                  className="w-full p-2 border rounded"
                  onChange={(e) => setId(e.target.value)}
                  value={Id}
                />
              </div>
              <div className="mb-2 font-serif"> 
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="Enter the name"
                  className="w-full p-2 border rounded "
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="mb-2 font-serif">
                <label htmlFor="">Qty</label>
                <input
                  type="number"
                  placeholder="Enter the Qty"
                  className="w-full p-2 border rounded "
                  onChange={(e) => setQty(e.target.value)}
                  value={qty}
                />
              </div>
              <div className="mb-2 font-serif">
                <label htmlFor="">Price</label>
                <input
                  type="number"
                  placeholder="Enter the price"
                  className="w-full p-2 border rounded "
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </div>
              <button className='w-[150px] h-[40px] bg-green-900 text-white rounded-xl text-center ml-96 mt-6'>Update</button>
            </form>
            <div className='flex flex-row p-3 justify-between font-serif'>
            </div>
          </div>
        </div>
      </div>
    </div>  )
}
