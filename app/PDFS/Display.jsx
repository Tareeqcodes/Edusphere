import React from 'react'

const Display = () => {
  return (
    <div>
       <div className="flex gap-4 mb-4">
  <select className="p-2 border rounded">
    <option value="">Filter by Faculty</option>
    <option value="Science">Science</option>
    <option value="Engineering">Engineering</option>
  </select>
  <select className="p-2 border rounded">
    <option value="">Filter by Department</option>
    <option value="Biology">Biology</option>
    <option value="Civil Engineering">Civil Engineering</option>
  </select>
  <input
    type="text"
    placeholder="Search by File Name"
    className="p-2 border rounded w-full"
  />
</div>

    </div>
  )
}

export default Display