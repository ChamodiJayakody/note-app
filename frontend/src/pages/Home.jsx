import { Button } from "flowbite-react";
import img1 from "../assets/image1.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      <img
        src={img1}
        alt="Background Image"
        className="absolute inset-0 object-cover mt-10 h-screen ml-72"
      />

      <div className="absolute ">
        <div>
          <h1 className="text-6xl  pt-10 ml-16 text-gray-700 ">
            <span className="font-bold">Note</span>
          </h1>
        </div>
        <div>
          <h1 className="text-6xl pt-4 ml-16  text-gray-700 ">
            <span className="font-semibold">Making App</span>
          </h1>
        </div>
        <p className="text-2xl font-semibold mt-14 ml-16 text-gray-600">
          Capture your ideas quickly and easily.
        </p>
        <p className="text-2xl font-semibold mt-0 ml-16 text-gray-600">
          Keep your thoughts organized!
        </p>
        <Link to="/notes?tab=notes">
          <Button className="bg-teal-600 hover:bg-red-800 text-2xl p-2 ml-16 mt-20  ring-0 ring-transparent">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}