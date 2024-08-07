import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { useState } from "react";
import img6 from "../assets/bg.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import PasswordInput from "../components/PasswordInput";
import { validateemail } from "../utils/validateemail";

export default function SignUp() {
  const [firstname, setFname] = useState();
  const [lastname, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstname) {
      setError("Please enter your first name");
      return;
    }

    if (!lastname) {
      setError("Please enter your last name");
      return;
    }

    if (!validateemail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    if (!cpassword) {
      setError("Please confirm the password");
      return;
    }

    if (password!==cpassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    setError("");

    axios
      .post("http://localhost:3001/sign-up", {
        firstname,
        lastname,
        email,
        password,
        cpassword,
      })
      .then((result) => console.log(result), navigate("/sign-in"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex justify-center ">
      <div className=" w-3/12 my-3 relative ">
        <div>
          <div className="bg-gray-300 bg-opacity-50 rounded-3xl shadow-2xl border-2 border-gray-200">
            <h1 className="pt-3 text-2xl text-center text-gray-80 font-semibold ">
              Sign Up
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="mx-7 mt-4 hover:shadow-2xl">
                <TextInput
                  name="firstname"
                  autoComplete="off"
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>

              <div className="mx-7 mt-3 hover:shadow-2xl">
                <TextInput
                  onSubmit={PasswordInput}
                  name="lastname"
                  autoComplete="off"
                  type="text"
                  placeholder="Last Name"
                  className="form-control "
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>

              <div className="mx-7 mt-3 hover:shadow-2xl">
                <TextInput
                  name="email"
                  autoComplete="off"
                  type="text"
                  placeholder="Email Address"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className=" mx-7 mt-3 hover:shadow-2xl">
                <PasswordInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>

              <div className="mx-7 mt-3 hover:shadow-2xl">
                <PasswordInput
                  value={cpassword}
                  onChange={(e) => setCpassword(e.target.value)}
                  placeholder="Confirm Password"
                />
              </div>

              <div className="shadow-none mx-7 mt-1 px-2 bg-gray-100 bg-opacity-70 rounded-lg">
                {error && (
                  <p className="text-red-500 text-xs pb-1 font-semibold">
                    {" "}
                    {error}
                  </p>
                )}
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className=" bg-pink-800 hover:bg-pink-500 mt-4  ring-0 ring-transparent "
                >
                  Sign Up
                </Button>
              </div>
            </form>

            <p className="text-sm text-center mb-4 mt-4">
              Already have an Account?{" "}
              <Link
                to="/sign-in"
                className="font-medium text-primary underline"
              >
                Sign in
              </Link>
            </p>

            <div className="flex gap-2 justify-center mt-2  items-center">
              <Checkbox id="remember" className="text-gray-800 mb-4" />
              <Label htmlFor="remember" className="text-gray-800 mb-4">
                Remember me
              </Label>
            </div>
          </div>
        </div>

        <img
          src={img6}
          alt="Background Image"
          className="fixed inset-0 w-screen"
          style={{ zIndex: -2, opacity: 1 }}
        />
      </div>
    </div>
  );
}
