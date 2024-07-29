import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";

import img6 from "../assets/bg.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen flex justify-center ">
      <div className=" w-4/12 my-3 relative ">
        <div>
          

          <div
            className="bg-gray-900 bg-opacity-60 rounded-3xl"
          >
            <h1 className="pt-3 text-2xl text-center text-gray-50 font-semibold ">Sign Up</h1>
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
                <Button className="bg-teal-500 hover:bg-red-700 mt-6  ring-0 ring-transparent ">
                  Sign Up
                </Button>
              </Link>
            </div>

            <div className=" text-center text-gray-50 font-semibold text-lg mt-4">
              Already have an Account?<div className="hover:text-teal-300 text-xl">Sign in</div>
            </div>

            <div className="flex gap-2 justify-center mt-2  items-center">
              <Checkbox id="remember" className="text-gray-800 mb-4"/>
              <Label htmlFor="remember" className="text-gray-50 mb-4">Remember me</Label>
            </div>

            
          </div>
        </div>

        <img
          src={img6}
          alt="Background Image"
          className="fixed inset-0 w-screen"
          style={{ zIndex: -2, opacity: 1}}
        />
      </div>
    </div>
  );
}
