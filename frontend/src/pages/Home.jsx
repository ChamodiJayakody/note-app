import { Button } from "flowbite-react";
import img1 from "../assets/image1.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <img src={img1} alt="Background Image" className="absolute inset-0 object-cover w-screen h-screen" />
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div>
          <h1 className="text-6xl font-bold text-gray-800">Docket</h1>
          <h2 className="text-4xl font-semibold text-gray-600">Management App</h2>
          <p className="text-xl mt-4 text-gray-500">Simplify your docket management. Stay organized, productive, and on top of your tasks with Write!</p>
          <Link to="/notes?tab=notes">
            <Button className="bg-teal-600 text-2xl p-2 mt-6 hover:bg-red-800 ring-0 ring-transparent">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}