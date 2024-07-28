import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import img3 from "../assets/background.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen flex justify-center ">
      <div
        className=" mt-10 border-2 w-4/12 rounded-2xl "
        style={{ backgroundImage: `url(${img3})` }}
      >
        <h1 className="mt-7 text-2xl text-center">Sign Up</h1>
        <div className="mx-7 mt-10">
          <TextInput placeholder="First Name" />
        </div>
        <div className="mx-7 mt-4">
          <TextInput placeholder="Last Name" />
        </div>
        <div className="mx-7 mt-4">
          <TextInput placeholder="Email Address" />
        </div>
        <div className="mx-7 mt-4">
          <TextInput placeholder="Password" />
        </div>
        <div className="mx-7 mt-4">
          <TextInput placeholder="Confirm Password" />
        </div>
        <div className="text-center">
          Already have an Account?<div>Sign in</div>
        </div>
        <div className="flex  gap-2 justify-center">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <div className="flex  justify-center"><Link to="/">
        <Button className="bg-red-500 m-5 hover:bg-green-600 ring-0 ring-transparent">
            Create Account
          </Button>
          </Link>
          
        </div>
        
      </div>
    </div>
  );
}
