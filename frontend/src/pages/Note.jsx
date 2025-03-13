import React from "react";
import img5 from "../assets/notes.jpg";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";


function Note() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <div className="max-w-2xl text-center flex flex-col items-center justify-center z-10">
        <h1 className="text-3xl text-gray-700">
          <span className="font-semibold ">
            Getting Started with your New Note✨
          </span>{" "}
        </h1>
        <p className="text-lg mt-7  text-gray-800">
          📝 This is your digital canvas. Paint it with ideas, dreams, or lists.
        </p>
        <p className="text-lg mt-6  text-gray-800">
          📝 Never lose a thought: Sync your notes across devices. Access them
          anytime, anywhere.
        </p>
        <p className="text-lg mt-6  text-gray-800">
          📝 Note-taking can be enjoyable! Let's make it an adventure.
        </p>
        <div>
          <div className="text-center text-gray-700 font-medium text-xl mt-5">
            Already have an Account?
            <Link to="/sign-in">
              <div className="text-pink-800 hover:text-pink-500 text-2xl mt-2 ">
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
        <img
          src={img5}
          alt="Background Image"
          className="fixed inset-0 w-screen"
          style={{ zIndex: -2, opacity: 1 }}
        />
      </div>
      
  );
}

export default Note;