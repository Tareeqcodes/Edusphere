import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { account, ID } from '../config/appwrite';
import Spinner from '../../src/components/Spinner'

const AuthContext = createContext();
export function useUser() {
  return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

 

  // const lectureId = import.meta.env.VITE_LECTURER_TEAM_ID;

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get('auth_token');
      if(token){
        try {
          await checkUsersStatus();
        } catch (error) {
          console.log("cookies:", error)
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const signUp = async (email, password) => {
    try {
      await account.create(ID.unique(), email, password);
    //    const userId = newUser.$id;
    //    await account.createEmailPasswordSession(email, password);
    // console.log('Session created successfully');

    //  if(role === 'lecturer'){
    //    const confirmUrl =  `http://localhost:3000/teams/confirm?userId=${newUser.$id}&teamId=${lectureId}`
    //   await teams.createMembership(
    //     lectureId,
    //     ['member'],
    //      email,
    //      userId,
    //      confirmUrl
    //   ); console.log('lecturer added to', lectureId);
    //  }
      
      await sendVerificationEmail();
      toast.success('Account created');
      return signIn(email, password);
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };


  const signIn = async (email, password) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      Cookies.set("auth_token", session.$id, { expires: 7, secure: true, sameSite: "strict" });;
      await checkUsersStatus();
      navigate("/")
    } catch (error) {
      console.log("sign-in error", error)
    }
  };


  const checkUsersStatus = async () => {
     try {
      const userDetails = await account.get();
      setUser(userDetails);

      // if (!lectureId) {
      //   console.error('Team IDs are not properly set. Check your environment variables.');
      //   return;
      // }
      // const lecturerMemberships = await teams.listMemberships(
      //   lectureId
      // );
      
      // const isLecturer = lecturerMemberships.memberships.some(
      //   (membership) => membership.userId === userDetails.$id
      // );
     } catch (error) {
      if(error.code===401){
       setUser(null);
      } else{
        console.error("check users status error:", error);
 
     }}
  }

  const sendVerificationEmail = async () => {
    try {
      const user = await account.get();
      console.log("current user:", user)
      const response = await account.createVerification('http://localhost:3000/');
      console.log("Verification email sent:", response);
    } catch (error) {
      console.error("Verification error:", error);
    }
  };

  const signOut = async () => {
    try {
      await account.deleteSession("current");
      Cookies.remove('auth_token');
      setUser(null);
      navigate("/");
      toast.success("Signed out successfully.");
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {loading ? <Spinner /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
