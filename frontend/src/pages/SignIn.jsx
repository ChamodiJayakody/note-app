import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { useState } from "react";
import img6 from "../assets/bg.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import { validateemail } from "../utils/validateemail";

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateemail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    axios
      .post("http://localhost:3001/sign-in", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex mt-28 justify-center">
      <div className=" w-3/12 my-3 relative ">
        <div>
          <div className="bg-gray-200 bg-opacity-40 rounded-3xl border-2 border-gray-300  shadow-2xl">
            <h1 className="pt-3 text-2xl text-center text-gray-800 font-semibold ">
              Sign In
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="mx-7 mt-4 hover:shadow-2xl">
                <TextInput
                  name="email"
                  autoComplete="off"
                  type="text"
                  placeholder="Email Address"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mx-7 mt-3 hover:shadow-2xl">
                <PasswordInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
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
                  className="bg-pink-800 hover:bg-pink-500 mt-6  ring-0 ring-transparent "
                >
                  Sign In
                </Button>
              </div>
            </form>

            <div className="flex gap-2 justify-center mt-2  items-center">
              <Checkbox id="remember" className="text-gray-800 mb-4" />
              <Label htmlFor="remember" className="text-gray-800 mb-5">
                Remember me
              </Label>
            </div>

            <p className="text-sm text-center mb-4">
              Not registered yet?{" "}
              <Link
                to="/sign-up"
                className="font-medium text-primary underline"
              >
                Create an Account
              </Link>
            </p>
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
