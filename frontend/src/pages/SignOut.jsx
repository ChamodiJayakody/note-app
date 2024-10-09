import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { MdLoop } from "react-icons/md";
import img6 from "../assets/bg.png";
import { Link } from "react-router-dom";

import { Toast } from "flowbite-react";

const SignOut=({onSignOut})=>{
  


  return (
    <div className="min-h-screen flex mt-32 justify-center">
      <div className=" w-3/12 my-3 relative ">
      <Toast>
      <div className="flex items-start">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-900 dark:text-cyan-300">
          <MdLoop className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Oh no! You're leaving...</span>
          <div className="mb-2 text-sm font-normal">Are you sure?</div>
          <div className="flex gap-2">
            <div className="w-auto bg-gray-700 text-white">
              <Button size="xs">Naah, Just Kidding</Button>
            </div>
            <div className="w-auto">
              <Button color="light" size="xs" onClick={onSignOut}>
                Yes, Sign Me Out
              </Button>
            </div>
          </div>
        </div>
        <Toast.Toggle />
      </div>
    </Toast>

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
  
export default SignOut;
