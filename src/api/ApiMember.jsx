import axios from "axios";

export const ApiGetMember = (token) =>
    axios.get("http://localhost:8444/api/member/getMember/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
export const ApiUpdateMember = (userId,form,token) =>
    axios.post(`http://localhost:8444/api/member/updateMember/${userId}`,form, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
export const ApiDeleteMember = (userId,token) =>
    axios.delete(`http://localhost:8444/api/member/deleteMember/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });