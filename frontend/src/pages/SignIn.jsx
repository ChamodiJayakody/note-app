import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";

import img6 from "../assets/bg.png";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="min-h-screen flex mt-32 justify-center">
      <div className=" w-3/12 my-3 relative ">
        <div>
          

          <div
            className="bg-gray-200 bg-opacity-40 rounded-3xl border-2 border-gray-300  shadow-2xl"
          >
            <h1 className="pt-3 text-2xl text-center text-gray-800 font-semibold ">Sign In</h1>
           

            <div className="mx-7 mt-4 hover:shadow-2xl">
              <TextInput placeholder="Email Address" />
            </div>

            <div className="mx-7 mt-3 hover:shadow-2xl">
              <TextInput placeholder="Password" />
            </div>

           

            <div className="flex justify-center">
              <Link to="/notes?tab=new-note">
                <Button className="bg-pink-800 hover:bg-pink-500 mt-6  ring-0 ring-transparent ">
                  Sign In
                </Button>
              </Link>
            </div>

           

            <div className="flex gap-2 justify-center mt-2  items-center">
              <Checkbox id="remember" className="text-gray-800 mb-4"/>
              <Label htmlFor="remember" className="text-gray-800 mb-5">Remember me</Label>
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
