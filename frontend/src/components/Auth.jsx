import React from "react";

import { Link } from "react-router-dom";
import { Button } from "flowbite-react";


function Auth() {
  return (
    <div className="h-fit flex   rounded-3xl  ">
<div>
      <h1 className="text-3xl pt-8   text-gray-700">
        <span className="font-semibold">
          Getting Started with your New Note✨
        </span>{" "}
      </h1>



      <div className="text-center text-gray-700 font-medium text-xl mt-5">
        Already have an Account?
        <Link to="/sign-in">
          <div className="text-pink-800 hover:text-pink-500 text-2xl mt-2  ">
            Sign in
          </div>
        </Link>
      </div>

      <div className="flex  justify-center">
        <Link to="/sign-up">
          <Button className="bg-pink-800 hover:bg-pink-500 m-5 mb-10  ring-0 ring-transparent">
            Create Account
          </Button>
        </Link>
      </div>

      </div>

    </div>
  );
}

export default Auth;