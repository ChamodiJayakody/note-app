import { Button } from "flowbite-react";
import img1 from "../assets/image1.png";
import React, { useState } from 'react';
import Modal from "react-modal";
import Auth from "../components/Auth";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="min-h-screen">
      <img
        src={img1}
        alt="Background Image"
        className="absolute inset-0 object-cover mt-10 h-screen ml-72"
      />

      <div className="absolute ">
        <div>
          <h1 className="text-6xl  pt-10 ml-16 text-text_medium ">
            <span className="font-semibold">Note</span>
          </h1>
        </div>
        <div>
          <h1 className="text-6xl pt-4 ml-16  text-text_light ">
            <span className="font-medium">Making App</span>
          </h1>
        </div>
        <p className="text-2xl font-normal mt-14 ml-16 text-text_light">
          Capture your ideas quickly and easily.
        </p>
        <p className="text-2xl font-normal mt-0 ml-16 text-text_light">
          Keep your thoughts organized!
        </p>
        
          <Button className="bg-pink-800 hover:bg-pink-500 text-2xl p-2 ml-16 mt-20  ring-0 ring-transparent"
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
          className="w-[60%] bg-white p-5 my-28 mx-auto rounded-2xl overflow-scroll "
        >
          <div className=" justify-center">
            <Auth />
            
          </div>
        </Modal>
        
      </div>
    </div>
  );
}