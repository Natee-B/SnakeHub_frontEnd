// import React, { useEffect } from 'react';
// import useAuthStore from '../../store/authStore';
// import useMemberStore from '../../store/memberStore';

// export default function ManageUser() {
//   const user = useAuthStore((state) => state.user); //ดึงมาจาก Store ทำให้ user ไม่สามารถเข้าหน้าเดียวกันได้มั้งนะ
//   const token = useAuthStore((state) => state.token);
//   const getMember = useMemberStore((state) => state.getMember);
//   const Member = useMemberStore((state) => state.Member);

//   useEffect(() => {
//     getMember(token);
//   }, []);

//   const result = Member.filter(el => el.id === user.id);
//   const thisUser = result[0] || {}; 
//   console.log('thisUser', thisUser)
//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-8">User Information</h1>
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div><strong>ID:</strong> {thisUser.id || "-"}</div>
//           <div><strong>City:</strong> {thisUser.city || "-"}</div>
//           <div><strong>Role:</strong> {thisUser.role || "-"}</div>
//           <div><strong>Address 1:</strong> {thisUser.address1 || "-"}</div>
//           <div><strong>Username:</strong> {thisUser.username || "-"}</div>
//           <div><strong>Address 2:</strong> {thisUser.address2 || "-"}</div>
//           <div><strong>First Name:</strong> {thisUser.firstName || "-"}</div>
//           <div><strong>Phone Number:</strong> {thisUser.phoneNumber || "-"}</div>
//           <div><strong>Last Name:</strong> {thisUser.lastName || "-"}</div>
//           <div><strong>Zip Code:</strong> {thisUser.zipCode || "-"}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import useAuthStore from "../../store/authStore";
import useMemberStore from "../../store/memberStore";

export default function ManageUser() {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const getMember = useMemberStore((state) => state.getMember);
  const updateMember = useMemberStore((state) => state.updateMember);
  const Member = useMemberStore((state) => state.Member);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    getMember(token);
  }, []);

  useEffect(() => {
    if (Member.length > 0) {
      const result = Member.find((el) => el.id === user.id);
      if (result) {
        setFormData(result); //ยัดข้อมูลของ User ที่loginอยู่ตอนนี้
      }
    }
  }, [Member]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    await updateMember(user.id, formData, token);
    setIsEditing(false); //ออกจากหน้า Edit
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Manage User</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            User ID
          </label>
          <p className="mt-1">{formData.id || "-"}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={formData.username || ""}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          ) : (
            <p className="mt-1">{formData.username || "-"}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          {isEditing ? (
            <input
              type="text"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          ) : (
            <p className="mt-1">{formData.email || "-"}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <p className="mt-1">{formData.role || "-"}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address 1
          </label>
          {isEditing ? (
            <input
              type="text"
              name="address1"
              value={formData.address1 || ""}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          ) : (
            <p className="mt-1">{formData.address1 || "-"}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address 2
          </label>
          {isEditing ? (
            <input
              type="text"
              name="address2"
              value={formData.address2 || ""}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          ) : (
            <p className="mt-1">{formData.address2 || "-"}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          {isEditing ? (
            <input
              type="text"
              name="city"
              value={formData.city || ""}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          ) : (
            <p className="mt-1">{formData.city || "-"}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Zip Code
          </label>
          {isEditing ? (
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode || ""}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          ) : (
            <p className="mt-1">{formData.zipCode || "-"}</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        {isEditing ? (
          <>
            <button
              onClick={() => setIsEditing(false)}
              className="mr-4 py-2 px-4 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}

