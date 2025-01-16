import { useState, useEffect } from 'react'
import { databases, Query } from '../config/appwrite'
import { useAuth } from '../context/Authcontext'
import MyRoom from './MyRoom'
import Spinner from '../../src/components/Spinner'

const ViewRoom =  () => {
    const [documents, setDocuments] = useState([]);
    const [error, setError] = useState(null);
    const [loadingRooms, setLoadingRooms] = useState(true)
    const { user, loading } = useAuth()
    console.log('User:', user);

  
    useEffect( () => {
      const fetchRoom =  async () => {
    
        try {
          const userId = user.$id;
          const response = await databases.listDocuments(
            import.meta.env.VITE_DATABASE_ID,
            import.meta.env.VITE_ROOMS_COLLECTION_ID,
            [Query.equal('user_id', userId)]
          );
          setDocuments(response.documents);
          setLoadingRooms(false);

         
        } catch (err) {
          console.error('Failed to fetch rooms:', err);
           setError('Failed to fetch rooms. Please try again later.');
        } 
      }; 
      
      fetchRoom();
    }, [user])

    if(loading || loadingRooms) {
      return <Spinner />
    }

    if(error) {
      return  <p className="text-red-500">{error}</p>;
    }

    return (
        <div className='justify-center items-center text-center mt-5'>
        
        { documents.length > 0 ? (
           documents.map((room) => <MyRoom room={room} key={room.$id} />)
        ) : (
            <p className='text-xl font-poppins font-medium'>You haven't added any rooms yet.</p>
        )} 

        </div>
    )
    
}

export default ViewRoom