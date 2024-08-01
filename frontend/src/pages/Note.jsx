import React from "react";
import img5 from "../assets/notes.png";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

function Note() {
  return (
    <div className="h-fit flex hover:shadow-xl  rounded-3xl ml-10 mr-10 mt-0">
      <div className=" bg-pink-100 rounded-3xl pr-10">
        <h1 className="text-3xl pt-8 ml-10  text-gray-600">
          <span className="font-semibold">
            Getting Started with your New Note✨
          </span>{" "}
        </h1>
        <p className="text-lg mt-7 ml-10 text-gray-700">
          📝 This is your digital canvas. Paint it with ideas, dreams, or lists.
        </p>
        <p className="text-lg mt-6 ml-10 text-gray-700">
          📝 Never lose a thought: Sync your notes across devices. Access them
          anytime, anywhere.
        </p>
        <p className="text-lg mt-6 ml-10 text-gray-700">
          📝 Note-taking can be enjoyable! Let's make it an adventure.
        </p>
        <div className="mt-7">
          <div className="text-center text-gray-600 font-semibold text-lg">
            Already have an Account?<div className="hover:text-teal-400 text-xl">Sign in</div>
          </div>

          <div className="flex  justify-center">
            <Link to="/sign-up">
              <Button className="bg-teal-600 hover:bg-red-800 m-5 mb-10   ring-0 ring-transparent">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <img src={img5} className="size-96 ml-20 mr-10 mt-10 pb-0" />
    </div>
  );
}

export default Note;