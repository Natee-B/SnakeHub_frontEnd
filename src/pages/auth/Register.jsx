import React, { useState } from "react";
import useAuthStore from "../../store/authStore";
import { toast } from "react-toastify";
import validate from "../../utils/validator";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
  email: "",
  confirmPassword: "",
}; 

export default function Register() {
  const name = useAuthStore((state) => state.name);
  const actionRegister = useAuthStore((state) => state.actionRegister);
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
  });

  const [formErrors ,setFormErrors] = useState({})

  const hdlOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  };

  const hdlSubmit = (e) => {
    e.preventDefault();

    const errors = validate.Register(form);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors); 
      return; 
    }
    
    actionRegister(form)
    setForm(initialState)
    setFormErrors({})
    navigate("/login")
  };


  return (
    <div className="flex justify-between  text-white bg-[url('https://picsum.photos/4000')] bg-cover bg-center">
      <div className="bg-black bg-opacity-30  w-1/3 min-w-[250px]  h-full items-center p-8 flex flex-col justify-between">
        <div className=" text-8xl">Logo</div>

        <div className="w-full">
          <h1 className="text-3xl font-bold">REGISTER</h1>
          <form
            className="flex flex-col gap-4 items-center"
            onSubmit={hdlSubmit}
          >
            <div className="w-full">
              <label className="font-bold ">
                Username
                <div>
                  <input
                    className=" bg-black bg-opacity-25 rounded-xl h-8 w-full hover:bg-opacity-50 pl-3"
                    name="username"
                    value={form.username}
                    onChange={hdlOnChange}
                  />

                  {formErrors.username && (
                      <span className="text-red-400 text-sm font-normal">
                        {formErrors.username}
                      </span>
                    )}

                </div>
              </label>
            </div>

            <div className="w-full">
              <label className="font-bold ">
                Email
                <div>
                  <input
                    className=" bg-black bg-opacity-25 rounded-xl h-8 w-full hover:bg-opacity-50 pl-3"
                    name="email"
                    value={form.email}
                    onChange={hdlOnChange}
                  />

                  {formErrors.email && (
                      <span className="text-red-400 text-sm font-normal">
                        {formErrors.email}
                      </span>
                    )}

                </div>
              </label>
            </div>

            <div className="w-full">
              <label className="font-bold ">
                Password
                <div>
                  <input
                    className=" bg-black bg-opacity-25 rounded-xl h-8 w-full hover:bg-opacity-50 pl-3"
                    name="password"
                    value={form.password}
                    onChange={hdlOnChange}
                  />

                  {formErrors.password && (
                      <span className="text-red-400 text-sm font-normal">
                        {formErrors.password}
                      </span>
                    )}

                </div>
              </label>
            </div>

            <div className="w-full">
              <label className="font-bold ">
                Confirm Password
                <div>
                  <input
                    className=" bg-black bg-opacity-25 rounded-xl h-8 w-full hover:bg-opacity-50 pl-3"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={hdlOnChange}
                  />

                  {formErrors.confirmPassword && (
                      <span className="text-red-400 text-sm font-normal">
                        {formErrors.confirmPassword}
                      </span>
                    )}

                </div>
              </label>
            </div>

            <button className=" rounded-xl bg-black bg-opacity-30 w-full h-12 p-2 text-nowrap font-bold mt-8 hover:bg-opacity-60 ">
              Confirm Register
            </button>
          </form>
        </div>

        <div className=" flex justify-between w-full">
          <div>
          <p>
            <Link to={"/login"}> Login</Link>
            </p>
          </div>
          <div>
            <p>Forget Password</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-end w-full">
        <div className="px-40 pb-10 break-words text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          ratione maiores non dolore sunt perspiciatis minima aut sequi
          voluptatibus, expedita officiis corporis possimus quisquam quidem et
          blanditiis! Illum, laboriosam exercitationem.
        </div>
      </div>
    </div>
  );
}
