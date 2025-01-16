import { useState, useEffect } from 'react'
import { databases, Query } from '../config/appwrite'
import { useAuth } from '../context/Authcontext'
import { FaTrash } from 'react-icons/fa'
import { toast } from 'react-toastify'


const DeleteRoom =  ( {roomId }) => {
    const [documents, setDocuments] = useState([]);
    const [error, setError] = useState(null);
    const [loadingItems, setLoadingItems] = useState(true)
    const { user, loading } = useAuth()
    console.log('User:', user);

  
    useEffect( () => {
      const fetchDocs =  async () => {
    
        try {
          const userId = user.$id;
          const response = await databases.listDocuments(
            import.meta.env.VITE_DATABASE_ID,
            import.meta.env.VITE_ROOMS_COLLECTION_ID,
            [Query.equal('user_id', userId)]
          );
          setDocuments(response.documents);
          setLoadingItems(false);
        } catch (err) {
          console.error('Failed to fetch Items:', err);
           setError('Failed to fetch Items. Please try again later.');
        } 
      }; 
      
      fetchDocs();
    }, [user])

    if(loading || loadingItems) {
      return <p>Loading...</p>
    }

    if(error) {
      return  <p className="text-red-500">{error}</p>;
    }

    const handleDelete = async () => {

      const roomToDelete = documents.find((room) => room.$id === roomId);

      if(roomToDelete) {
        try {
          const confirmed = window.confirm(
            'Are you sure you want to delete this room?'
          ); 
          if (confirmed) {
            await databases.deleteDocument(
              import.meta.env.VITE_DATABASE_ID,
              import.meta.env.VITE_ROOMS_COLLECTION_ID,
              roomToDelete.$id,
            );
            setDocuments((prevDocument) => prevDocument.filter((room) => room.$id !==roomId)),
            toast.success('Room deleted successfully')
          };
        } catch (error) {
          console.error('Failed to delete room:', error);
        }
      }
    }

    return (
        <>
        
        <button onClick={handleDelete} className='flex bg-red-600 py-2 px-4   rounded-md items-center justify-center gap-1'>
        <span className='text-sm'><FaTrash /></span>
          <p className='text-sm'>Delete Rental</p> 
        </button>

        </>
    )
    
}

export default DeleteRoom

