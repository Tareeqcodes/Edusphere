import React from 'react'
import { useState } from 'react'
import { storage, databases, ID } from '../config/appwrite'
import {toast} from 'react-toastify'
import { useAuth } from '../context/Authcontext'




const UploadRoom = () => {
  const { user} = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    amenities: '',
    address: '',
    location: '',
    price: '',
    contact: '',
    image: null,
  });
  
  const [loading, setLoading] = useState(false);
  const resetForm = () => {
  setFormData({
    name: '',
    description: '',
    amenities: '',
    address: '',
    location: '',
    price: '',
    contact: '',
    image: null,
  })
}
  
   
  const handleInputChange = (e) =>{
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, image: files[0] })); 
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData(true)
    if (!user || !user.$id) {
      toast.error("User is not authenticated");
      setLoading(true)
      return;
    }

    let imageID;
    const image = formData.image;

    if (image && image.size > 0 && image.name !== 'undefined'){
      try {
        const response = await storage.createFile('rooms', ID.unique(), image)
        imageID = response.$id;
        
      } catch (error) {
        console.log('Error uploading image', error);
        return {
          error: 'Error uploading image',
        };
      }
    }

    const documentData = {
      user_id: user.$id,
      name: formData.name,
      description: formData.description,
      amenities: formData.amenities,
      address: formData.address,
      location: formData.location,
      price: formData.price,
      contact: formData.contact,
      image: imageID, 
    };
      try {
        await databases.createDocument(
          import.meta.env.VITE_DATABASE_ID,
          import.meta.env.VITE_COLLECTION_ID,
          ID.unique(),
          documentData
         );
        //  console.log('Document data:', documentData);

         toast.success('Room created successfully');
         resetForm();
      } catch (error) {
        toast.error('Failed to create room');
        console.log('Error creating room:',error)
      } finally{
        setLoading(false)
      }
  }

  if(loading) {
    return <div>Loading...</div>
  }
  
  return (
    <section className='text-center h-full'>
    <h2 className='text-xl bg-slate-200 border border-b-4 text-black shadow-sm py-5 mb-5 font-semibold'>Add Your Property</h2>
    <div  className=' text-justify mt-16 w-full'>
      <form onSubmit={handleSubmit}>
      <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-gray-700 font-bold mb-2'
            >
              Room Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='border rounded w-full py-1 px-2'
              placeholder='Enter a name (Large Conference Room)'
              value={formData.name}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block text-gray-700 font-bold mb-2'
            >
              Description
            </label>
            <textarea
              id='description'
              name='description'
              className='border rounded w-full  py-1 px-2'
              placeholder='Enter a description for the rental'
              value={formData.description}
              onChange={handleInputChange}
              required
              disabled={loading}
            ></textarea>
          </div>
          <div className='mb-4'>
            <label 
              htmlFor='amenities'
              className='block text-gray-700 font-bold mb-2'
            >
              Amenities
            </label>
            <input
              type='text'
              id='amenities'
              name='amenities'
              className='border rounded w-full py-1 px-2'
              placeholder='Solarlight, pipewater, etc.'
              value={formData.amenities}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='address'
              className='block text-gray-700 font-bold mb-2'
            >
              Address
            </label>
            <input
              type='text'
              id='address'
              name='address'
              className='border rounded w-full py-1 px-2'
              placeholder='Enter full address'
              value={formData.address}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='location'
              className='block text-gray-700 font-bold mb-2'
            >
              Location
            </label>
            <input
              type='text'
              id='location'
              name='location'
              className='border rounded w-full py-1 px-2 mb-3'
              placeholder='Location of the rental'
              value={formData.location}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
             
          <div className='mb-4'>
            <label
              htmlFor='price'
              className='block text-gray-700 font-bold mb-2'
            >
              Price
            </label>
            <select name="price" id="price"
            value={formData.price}
            required
            onChange={handleInputChange}
            disabled={loading}
            >
              <option value="" disabled>Select price range</option>
                <option value='₦50K - 60K'>₦50K - ₦60K</option>
                <option value='₦60K - 70K'>₦60K - ₦70K</option>
                <option value='₦70K - 80K'>₦70K - ₦80K</option>
                <option value='₦80K - 90K'>₦80K - ₦90K</option>
                <option value='₦90K - 100K'>₦90K - ₦100K</option>
                <option value='₦100K - 125K'>₦100K - ₦125K</option>
                <option value='₦125K - 150K'>₦125K - ₦150K</option>
                <option value='₦150K - 175K'>₦150K - ₦175K</option>
                <option value='₦175K - 200K'>₦175K - ₦200K</option>
                <option value='Over ₦1M'>Over ₦1M</option>
            </select>
            
          </div>
          <div className='mb-4'>
            <label
              htmlFor='contact'
              className='block text-gray-700 font-bold mb-2'
            >
              Contact-Info
            </label>
            <input
              type='number'
              id='contact'
              name='contact'
              className='border rounded w-full py-1 px-2'
              placeholder='Phone number '
              value={formData.contact}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>
         
          <div className='mb-8'>
            <label
              htmlFor='image'
              className='block text-gray-700 font-bold mb-2'
            >
              Image
            </label>

            <input
              type='file'
              id='image'
              name='image'
              className='border rounded w-full py-1 px-2'
              onChange={handleInputChange}
              
              required
              disabled={loading}
            />
          </div>
          <div className='flex flex-col gap-5'>
            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-3 mt-5 rounded hover:bg-blue-700'
              disabled={loading}
            >
              { loading ? 'submitting...' : 'Add Room' }
            </button>
            
          </div>
          </div>
      </form>
      {loading && <div className="text-center mt-4">Loading...</div>}
    </div>
    </section>
  )
}

export default UploadRoom