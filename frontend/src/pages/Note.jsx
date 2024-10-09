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
        <div>
          <div className="text-center text-gray-600 font-medium text-lg mt-5">
            Already have an Account?
            <Link to="/sign-in">
              <div className="text-pink-800 hover:text-pink-500 text-xl mt-2 ">
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

      <img src={img5} className="size-96 ml-20 mr-10 mt-10 pb-0" />
    </div>
  );
}

export default Note;
