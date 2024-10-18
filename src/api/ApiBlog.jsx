import axios from "axios";

export const apiBlog = () => axios.get("http://localhost:8444/api/blog");

export const apiBlogDetail = (form) =>
  axios.get("http://localhost:8444/api/blog/:blogId", form);

export const apiAddBlog = (form, token) =>
  axios.post("http://localhost:8444/api/blog/addBlog", form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
