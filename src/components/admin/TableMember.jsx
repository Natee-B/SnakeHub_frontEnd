// import React, { useEffect, useState } from "react";
// import { listMember, removeMember, updateMember } from "../../api/member";
// import useAuthStore from "../../store/authStore";
// import { toast } from "react-toastify";

// export default function TableMember() {
//   const [member, setMember] = useState([]);
//   const token = useAuthStore((state) => state.token);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     try {
//       const res = await listMember();
//       setMember(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const hdlRemoveMember = async (id) => {
//     try {
//       const res = await removeMember(token, id);
//       // setMember(res.data);
//       setMember((prevMembers) => prevMembers.filter((el) => el.id !== id));
//       console.log("res.data", res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const hdlUpdateMember = async (e, id) => {
//     const role = e.target.value;
//     console.log(role);
//     try {
//       const res = await updateMember(token, id, { role });
//       // setMember(res);
//       // setMember((prevMembers) => prevMembers.map((member) => 
//       //     member.id === id ? { ...member, role } : member
//       //   )
//       // );
      
//     getData()

//       toast.success(res.data.message);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       TableMember
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">No</th>
//             <th scope="col">Email</th>
//             <th scope="col">Role</th>
//             <th scope="col">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {member.map((el, index) => (
//             <tr key={index}>
//               <th scope="row">{index + 1}</th>
//               <td>{el.email}</td>
//               {/* <td>{el.role}</td> */}



//               <td>
//                 <select
//                   defaultValue={el.role}
//                   onChange={(e) => hdlUpdateMember(e, el.id)}
//                 >
//                   <option value="ADMIN">Admin</option>
//                   <option value="USER">User</option>
//                   {/* <option value="editor">Editor</option> */}
//                   {/* เพิ่ม role อื่น ๆ ที่ต้องการ */}
//                 </select>
//               </td>



//               <td>
//                 <p onClick={() => hdlRemoveMember(el.id)}>Delete</p>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
