import { Button } from "flowbite-react";
import img1 from "../assets/image1.jpg";
import React, { useState } from 'react';
import Modal from "react-modal";
import Auth from "../components/Auth";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="min-h-screen relative">
      <img
        src={img1}
        alt="Background Image"
        className="absolute inset-0 object-cover w-full h-full"
      />

      <div className="relative flex justify-center items-center ">
        <div className="text-center">
          <div>
            <h1 className="text-6xl  text-text_medium mt-28">
              <span className="font-semibold">Note </span><span className="font-medium">Making App</span>
            </h1>
          </div>
          
          <p className="text-2xl font-normal mt-10 text-text_light">
            Capture your ideas quickly and easily.
          </p>
          <p className="text-2xl font-normal mt-0 text-text_light">
            Keep your thoughts organized!
          </p>
          
          <Button className="bg-pink-800 hover:bg-pink-500 text-2xl p-2 mt-10 ring-0 ring-transparent mx-auto"
            onClick={() => setOpenModal(true)}>
            Get Started
          </Button>
          <Modal
            isOpen={openModal}
            onRequestClose={() => setOpenModal(false)}
            style={{
              overlay: {
                backgroundColor: "rgba(19, 85, 80, 0.8)",
              },
            }}
            contentLabel=""
            className="w-[60%] bg-white p-5 my-28 mx-auto rounded-2xl overflow-scroll"
          >
            <div className="justify-center">
              <Auth />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}