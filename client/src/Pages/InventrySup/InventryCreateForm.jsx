import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function InventryCreateForm() {
    const [Id, setID] = useState('');
    const [name, setName] = useState('');
    const [qty, setQty] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post('http://localhost:3001/server/inventory/inventoryCreate', {
            Id,
            name,
            qty,
            price
        });

        if (response.status === 201) {
            console.log(response.data);
            alert('Product created successfully!');
            navigate('/InventryAddtoform');
        } else {
            // Handle non-200 status codes
            throw new Error(response.statusText || 'Failed to create product');
        }
    } catch (error) {
        // If the error is an object, stringify it to get useful information
        const errorMessage = error.response ? JSON.stringify(error.response.data) : error.message;
        console.error('Error creating product:', errorMessage);
        alert('Failed to create product. Please try again.');
    }
};

  return (
    <div>
        <div className='flex justify-between  mt-4 px-14 '>
            <div><img  className='w-[120px] h-[48px] ' src={Logo} alt='Logo'/></div>
            <div>
                <ul className='flex gap-6'>
                    <li className='hover:text-[#75d705] hover:border-solid cursor-pointer text-2xl font-serif'>Add new stock</li>
                </ul>
            </div>
            <div><h1 className='Navbart_btn'>Login</h1></div>
        </div>
        
            <div className=' flex flex-row' >

                <div className='w-[20%] h-[500px] flex-grow border '>
                    <div className=" w-1/2 bg-white bg rounded p-3 ml-[300px] backdrop-grayscale-0 bg-white/30">
                            <form onSubmit={handleSubmit} >
                                <h2 className="text-2xl font-bold mb-4 font-serif">Add Product</h2>
                                <div className="mb-2 font-serif">
                                    <label htmlFor="">ID</label>
                                    <input
                                            type="text"
                                            placeholder="Enter the Id"
                                            className="w-full p-2 border rounded"
                                            value={Id}
                                            onChange={(e) => setID(e.target.value)}
                                            />
                                </div>
                                <div className="mb-2 font-serif">
                                    <label htmlFor="">Name</label>
                                    <input
                                            type="text"
                                            placeholder="Enter the Name"
                                            className="w-full p-2 border rounded"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            />
                                </div>
                                <div className="mb-2 font-serif">
                                    <label htmlFor="">Qty</label>
                                    <input
                                            type="number"
                                            placeholder="Enter the Qty"
                                            className="w-full p-2 border rounded"
                                            value={qty}
                                            onChange={(e) => setQty(e.target.value)}
                                        />
                                </div>
                                <div className="mb-2 font-serif">
                                    <label htmlFor="">Price</label>
                                    <input
                                            type="text"
                                            placeholder="Enter the price"
                                            className="w-full p-2 border rounded"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                </div>
                                <div className='flex flex-row p-3 justify-between font-serif'>
                                <Link to ='/InventryAddtoform' className="btn ml-4">Back</Link>
                                <button className="btn">Add</button>
                                    
                                </div>
                            </form>
                            

                    </div>
                </div>
            </div>
    </div>

  )
}
