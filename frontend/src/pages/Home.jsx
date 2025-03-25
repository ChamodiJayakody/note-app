import { Button } from "flowbite-react";
import img1 from "../assets/image1.jpg";
import React, { useState } from 'react';
import Modal from "react-modal";
import Auth from "../components/Auth";
import img2 from "../assets/notes.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) {
      navigate("/create-note");
    } else {
      setOpenModal(true);
    }
  };

  return (
    <div className="min-h-screen flex justify-center  mt-20">
      <div className="md:w-5/12 my-3 relative">
        <img
          src={img1}
          alt="Background Image"
          className=" fixed inset-0 object-cover w-full h-full"
          style={{ zIndex: -2, opacity: 1 }}
        />

        <div className="relative flex justify-center items-center">
          <div className="text-center">
            <div>
              <h1 className="text-6xl text-text_medium mt-28">
                <span className="font-semibold">Note </span><span className="font-medium">Making App</span>
              </h1>
            </div>

            <p className="text-2xl font-normal mt-10 text-text_light">
              Capture your ideas quickly and easily.
            </p>
            <p className="text-2xl font-normal mt-0 text-text_light">
              Keep your thoughts organized!
            </p>
            
            <Button className="bg-pink-800 hover:bg-pink-500 text-2xl p-2 rounded-full mt-10 ring-0 ring-transparent mx-auto"
              onClick={handleGetStarted}>
              Get Started
            </Button>
            <Modal
              isOpen={openModal}
              onRequestClose={() => setOpenModal(false)}
              style={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
              contentLabel=""
              className="w-[60%] mx-auto rounded-2xl"
            >
              <div
                className=" relative w-full h-full bg-cover bg-center p-5 rounded-2xl flex justify-center items-center"

              >
                <div className="bg-white bg-opacity-70 p-10 rounded-2xl hover:shadow-2xl"
                  style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover' }}>
                  <Auth />
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}