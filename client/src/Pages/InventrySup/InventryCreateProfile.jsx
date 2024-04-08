import React, { useState,useEffect } from 'react'
import Logo from '../../assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import pic from "../../assets/Picture leaf.jpg"
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import axios from 'axios';


export default function InventryCreateProfile() {
    const {id} =useParams();// Retrieve the id parameter from the URL

    const [Id, setID] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [place, setPlace] = useState('');
    const [phone, setPhone] = useState('');

    // const navigate = useNavigate();

    // const handleProfileSubmit = async (e) => {
    //     e.preventDefault();
    
    //     try {
    //         const response = await axios.post('http://localhost:3001/server/inventory/inventoryProfileCreate', {
    //             Id,
    //             name,
    //             email,
    //             place,
    //             phone,
    //         });
    
    //         if (response.status === 201) {
    //             console.log(response.data);
    //             alert('Profile details created successfully!');
    //             navigate('/Home');
    //         } else {
    //             // Handle non-200 status codes
    //             throw new Error(response.statusText || 'Failed to create product');
    //         }
    //     } catch (error) {
    //         // If the error is an object, stringify it to get useful information
    //         const errorMessage = error.response ? JSON.stringify(error.response.data) : error.message;
    //         console.error('Error creating product:', errorMessage);
    //         alert('Failed to create product. Please try again.');
    //     }
    // };
    useEffect(() => {
        axios
          .get(`http://localhost:3001/server/inventory/inventoryProfileGetOne/${id}`)
          .then((result) => {
            console.log("data Calling",result);
    
            setID(result.data.data.Id);
            setName(result.data.data.name);
            setEmail(result.data.data.email);
            setPlace(result.data.data.place);
            setPhone(result.data.data.phone)
          })
          .catch((err) => console.log(err));
      }, [id]);
    
      const handleUpdate = (e) => {
        e.preventDefault();
        axios
          .put(`http://localhost:3001/server/inventory/updateProfileDetailsById/${id}`, {
            Id,
            name,
            email,
            place,
            phone, 
          })
          .then((result) => {
            console.log(result);
            alert("Profile details successfuly update");
            // You can redirect to another page or perform any other action upon successful update
          })
          .catch((error) => {
            console.error('Pr not update :', error);
          });
      };

  return (
    <div>
    {/**Navbar */}
    <div className='flex justify-between  mt-4 px-14 '>
    <div><img  className='w-[120px] h-[48px] ' src={Logo} alt='Logo'/></div>
        <div>
        <ul className='flex gap-6'>
            <li className='hover:text-[#75d705] hover:border-solid cursor-pointer text-2xl font-serif'>Add new stock</li>
        </ul>
    </div>
    <div><h1 className='Navbart_btn'>Login</h1></div>
    </div>
    {/**Form for adding a new profile details*/}

<div className=' flex flex-row'style={{ backgroundImage: `url(${pic})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} >

    <div className='w-[20%] h-[500px] flex-grow border '>
        
        <div className=" w-1/2 bg-white bg rounded p-3 ml-[300px] backdrop-grayscale-0 bg-white/30">
            <form onSubmit={handleUpdate} >
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
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        placeholder="Enter the email"
                        className="w-full p-2 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-2 font-serif">
                    <label htmlFor="">Place</label>
                    <input
                        type="text"
                        placeholder="Enter the place"
                        className="w-full p-2 border rounded"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                    />
                </div>
                <div className="mb-2 font-serif">
                    <label htmlFor="">Phone.No</label>
                    <input
                        type="text"
                        placeholder="Enter the phone.no"
                        className="w-full p-2 border rounded"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className='flex flex-row p-3 justify-between font-serif'>
                    <Link to ='/InventryProfile' className="btn ml-4">Back</Link>
                    <button className="btn">Add</button>
            
                </div>
            </form>
        </div>

    </div>
</div>
</div>
)
}
