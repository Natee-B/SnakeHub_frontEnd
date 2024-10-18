import React, { useState } from "react";
import useAuthStore from "../../store/authStore";
import validate from "../../utils/validator";
import { Link } from "react-router-dom";

const initialState = {
  identify: "",
  password: "",
};
export default function Login() {
  const actionLogin = useAuthStore((state) => state.actionLogin);
  
  const [form, setForm] = useState({
    identify: "",
    password: "",
  });
  console.log(form)

  const [formErrors, setFormErrors] = useState({});

  const hdlOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const hdlSubmit = async(e) => {
    e.preventDefault();
    const errors = validate.Login(form);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors); 
      return; 
    }
    const result = await actionLogin(form)
    if(result){
      setForm(initialState)
      setFormErrors({})
    }

  };

  return (
    <div className="flex h-[calc(100vh-129px)] w-screen  text-white bg-[url('https://picsum.photos/2000')] bg-cover bg-center ">


      <div className="bg-black bg-opacity-30 h-full w-1/3 min-w-[250px] items-center p-8 flex flex-col justify-between">
        <div className=" text-8xl">Logo</div>

        <div className="w-full">
          <h1 className="text-3xl font-bold">LOGIN</h1>
          <form
            className="flex flex-col gap-4 items-center w-full"
            onSubmit={hdlSubmit}
          >
            <div className="w-full">
              <label className="font-bold ">
                Username or Email
                <div>
                  <input
                    className=" bg-black bg-opacity-25 rounded-xl h-8 w-full hover:bg-opacity-50 pl-3"
                    name="identify"
                    value={form.identify}
                    onChange={hdlOnChange}
                  />

                  {formErrors.identify && (
                      <span className="text-red-400 text-sm font-normal">
                        {formErrors.identify}
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

            <button className=" rounded-xl bg-black bg-opacity-30 w-full h-12 p-2 text-nowrap font-bold mt-8 hover:bg-opacity-60 ">
              Confirm
            </button>
          </form>
        </div>

        <div className=" flex justify-between w-full">
          <div>
            <p>
            <Link to={"/register"}> Sign in</Link>
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
