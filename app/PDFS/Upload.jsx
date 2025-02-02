import React, { useState } from 'react';
import { databases, ID, storage } from '../config/appwrite';


const Upload = () => {
  const [formData, setFormData] = useState({
    uploaderName: '',
    faculty: '',
    department: '',
    level: '',
    semester: '',
    pdfFile: null,
  });

  const [ departments, setDeparments] = useState([])

  const facultyDepartments = {
    Science: ['Biology', 'Chemistry', 'Physics', 'Mathematics'],
    Engineering: ['Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Computer Engineering'],
    Arts: ['History', 'Philosophy', 'Linguistics', 'Fine Arts'],
    Medicine: ['Nursing', 'Pharmacy', 'Public Health', 'Surgery'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'faculty') {
        setDeparments(facultyDepartments[value] || [])
        setFormData({
            ...formData,
            [name]: value,
            department:''
          });
    } else {
        setFormData({
            ...formData,
            [name]: value,
          });
    }
    
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      pdfFile: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Upload PDF to Appwrite Storage
      const file = await storage.createFile(
        import.meta.env.VITE_BUCKECT_ID, // Replace with your bucket ID
        ID.unique(),
        formData.pdfFile
      );
 
      // 2. Save metadata in Appwrite Database
      await databases.createDocument(
        import.meta.env.VITE_DATABASE_ID,  // Replace with your database ID
        import.meta.env.VITE_PDFS_COLLECTION_ID, // Replace with your collection ID
        ID.unique(),
        {
          uploadername: formData.uploaderName,
          faculty: formData.faculty,
          department: formData.department,
          level: formData.level,
          semester: formData.semester,
          fileId: file.$id, // Store the uploaded file's ID
        }
      );

      alert('PDF uploaded successfully!');

      // Reset form
      setFormData({
        uploaderName: '',
        faculty: '',
        department: '',
        level: '',
        semester: '',
        pdfFile: null,
      });
      setDeparments([])
    } catch (error) {
      console.error('Error uploading PDF:', error);
      alert('There was an error uploading your file.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 mt-6 bg-blue-50 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Upload PDF Resources</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-blue-700 font-medium mb-1">Uploader Name</label>
          <input
            type="text"
            name="uploaderName"
            value={formData.uploaderName}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-blue-700 font-medium mb-1">Faculty</label>
          <select
            name="faculty"
            value={formData.faculty}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select faculty</option>
            {Object.keys(facultyDepartments).map((faculty) => (
              <option key={faculty} value={faculty}>
                {faculty}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-blue-700 font-medium mb-1">Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:border-blue-500"
            required
            disabled={!formData.faculty}
          >
            <option value="">Select department</option>
            {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-blue-700 font-medium mb-1">Level</label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:border-blue-500"
            disabled={!formData.faculty}
            required
          >
            <option value="">Select level</option>
            <option value="100">100 Level</option>
            <option value="200">200 Level</option>
            <option value="300">300 Level</option>
            <option value="400">400 Level</option>
            <option value="500">500 Level</option>
          </select>
        </div>

        <div>
          <label className="block text-blue-700 font-medium mb-1">Semester</label>
          <select
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:border-blue-500"
            disabled={!formData.faculty}
            required
          >
            <option value="">Select semester</option>
            <option value="first">First Semester</option>
            <option value="second">Second Semester</option>
          </select>
        </div>

        <div>
          <label className="block text-blue-700 font-medium mb-1">Upload PDF</label>
          <input
            type="file"
            name="pdfFile"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
          disabled={!formData.faculty}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;
