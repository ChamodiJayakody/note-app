import { Button } from "flowbite-react";
import img1 from "../assets/image1.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      {" "}
      <div className="flex">
        <div>
          <h1 className="text-6xl pt-10 ml-16  text-gray-600">
            <span className="font-bold">Docket</span>{" "}
            <span className="font-semibold">Management App</span>{" "}
          </h1>
          <p className="text-xl mt-10 ml-16 text-gray-500">Simplify your docket management. Stay organized, productive, and on top of your tasks with Write!</p>
          <Link to="/notes">
            <Button className="bg-red-500 p-2 ml-16 mt-10 hover:bg-green-600 ring-0 ring-transparent">
              Get Started
            </Button>
          </Link>
        </div>
        <img src={img1} className="w-3/6 ml-20 mr-10 mt-10 rounded-3xl hover:shadow-xl" />
      </div>
    </div>
  );
}
