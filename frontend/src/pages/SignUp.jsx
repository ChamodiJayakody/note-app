import { Button, Checkbox, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import img6 from "../assets/auth.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { validateemail } from "../utils/validateemail";

export default function SignUp() {
  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formdata)
    // setError("");

    

    if (
      !formdata.firstname ||
      !formdata.lastname ||
      !formdata.email ||
      !formdata.password ||
      !formdata.confirmpassword
    ) {
      setError("Please fill out all fields.");
      setTimeout(() => setError(null), 3000);
      return;
    }
    //console.log(formdata);

    if (formdata.password !== formdata.confirmpassword) {
      setError("Passwords do not match.");
      setTimeout(() => setError(null), 3000);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message || "Failed to sign up"); // Add statusText for more info
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }

      // ... navigate on successful signup
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center mt-4">
      <div className="md:w-3/12 my-3 relative">
        <div>
          <div className="bg-teal-400 bg-opacity-20 rounded-3xl shadow-2xl ">
            <h1 className="pt-3 text-2xl text-center text-gray-80 font-semibold">
              Sign Up
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="mx-7 mt-4 hover:shadow-2xl">
                <TextInput
                  type="text"
                  placeholder="First Name"
                  id="firstname"
                  name="firstname"
                  onChange={handleChange}
                />
              </div>

              <div className="mx-7 mt-3 hover:shadow-2xl">
                <TextInput
                  type="text"
                  placeholder="Last Name"
                  id="lastname"
                  name="lastname"
                  onChange={handleChange}
                />
              </div>

              <div className="mx-7 mt-3 hover:shadow-2xl">
                <TextInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                />
              </div>

              <div className="mx-7 mt-3 hover:shadow-2xl">
                <TextInput
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>

              <div className="mx-7 mt-3 hover:shadow-2xl">
                <TextInput
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                />
              </div>

              <div className="shadow-none mx-7 mt-1 px-2 bg-gray-100 bg-opacity-70 rounded-lg">
                {error && (
                  <p className="text-red-500 text-xs pb-1 font-semibold">
                    {error}
                  </p>
                )}
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-pink-800 hover:bg-pink-500 mt-4 ring-0 ring-transparent"
                >
                  {loading ? (
                    <>
                      <Spinner size="sm" />
                      <span className="pl-3">Loading...</span>
                    </>
                  ) : (
                    "Sign Up"
                  )}
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

            <div className="flex gap-2 justify-center mt-2 items-center">
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