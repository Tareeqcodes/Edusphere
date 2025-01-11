import { databases } from '../config/appwrite';

const GetSingleRoom = async (id) => {
  try {
    const room = await databases.getDocument(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_COLLECTION_ID,
      id
    );
    return room;
  } catch (error) {
    console.error('Error fetching the room:', error);
    throw error;
  }
};

export default GetSingleRoom;
