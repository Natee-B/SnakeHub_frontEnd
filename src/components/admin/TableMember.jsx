import React, { useEffect, useState } from "react";
import useAuthStore from "../../store/authStore";
import { toast } from "react-toastify";
import useMemberStore from "../../store/memberStore";

export default function TableMember() {
  const Member = useMemberStore((state) => state.Member);
  const getMember = useMemberStore((state) => state.getMember);
  const updateMember = useMemberStore((state) => state.updateMember);
  const deleteMember = useMemberStore((state) => state.deleteMember);
  const token = useAuthStore((state) => state.token);
  const [member, setMember] = useState([]);
  
  useEffect(() => {
    getMember(token);
  }, []);

  console.log('Member', Member)

  if (!Member) {
    return <p>Loading...</p>; // ตอนแรกมัน Error เหมือนโหลดไม่ทัน งมเป็น ชม. เหมือนตอนลบแคช แล้วไม่มีข้อมูล ต้องเฟชให้ได้ก่อน1ครั้งมั้ง ถึงจะไม่error
  }

  // const getData = async () => {
  //   try {
  //     const res = await listMember();
  //     setMember(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const hdlRemoveMember = async (id) => {
      await deleteMember(id,token);
      // setMember(res.data);
      // setMember((prevMembers) => prevMembers.filter((el) => el.id !== id));
      await getMember(token)
  };

  const hdlUpdateMember = async (e, id) => {
    const form = {role: e.target.value}
      await updateMember(id, form ,token);
      // setMember(res);
      // setMember((prevMembers) => prevMembers.map((member) => 
      //     member.id === id ? { ...member, role } : member
      //   )
      // );
      await getMember(token)
  };

  return (
    <div>
      TableMember
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
          {Member.map((el, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{el.email}</td>
              <td>
                <select
                  defaultValue={el.role}
                  onChange={(e) => hdlUpdateMember(e, el.id)}
                >
                  <option value="ADMIN">Admin</option>
                  <option value="USER">User</option>
                </select>
              </td>



              <td>
                <button className="p-2 rounded-xl bg-red-300 hover:bg-red-700" onClick={() => hdlRemoveMember(el.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
