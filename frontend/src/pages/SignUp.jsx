import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";

import img6 from "../assets/bg.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen flex justify-center ">
      <div className=" w-3/12 my-3 relative ">
        <div>
          <div className="bg-gray-200 bg-opacity-50 rounded-3xl shadow-2xl border-2 border-gray-200">
            <h1 className="pt-3 text-2xl text-center text-gray-80 font-semibold ">
              Sign Up
            </h1>
            <div className="mx-7 mt-4 hover:shadow-2xl">
              <TextInput placeholder="First Name" />
            </div>

            <div className="mx-7 mt-3 hover:shadow-2xl ">
              <TextInput placeholder="Last Name" />
            </div>

            <div className="mx-7 mt-3 hover:shadow-2xl">
              <TextInput placeholder="Email Address" />
            </div>

            <div className="mx-7 mt-3 hover:shadow-2xl">
              <TextInput placeholder="Password" />
            </div>

            <div className="mx-7 mt-3 hover:shadow-2xl">
              <TextInput placeholder="Confirm Password" />
            </div>

            <div className="flex justify-center">
              <Link to="/">
                <Button className="bg-pink-800 hover:bg-pink-500 mt-4  ring-0 ring-transparent ">
                  Sign Up
                </Button>
              </Link>
            </div>

            <div className=" text-center text-gray-800 font-semibold text-lg mt-3">
              Already have an Account?
              <Link to="/sign-in">
                <div className="text-pink-800 hover:text-pink-500 text-xl">
                  Sign in
                </div>
              </Link>
            </div>

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
