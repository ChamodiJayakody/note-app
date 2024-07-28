import React from 'react'
import img5 from "../assets/notes.png";

function Note() {
  return (
    
      <div className="flex hover:shadow-xl  rounded-3xl ml-20 mr-10 mt-10">
        <div className=" bg-pink-100 rounded-3xl pr-10">
          <h1 className="text-3xl pt-10 ml-10  text-gray-600">
          
            <span className="font-semibold">Getting Started with your New Note✨</span>{" "}
          </h1>
          <p className="text-xl mt-14 ml-10 text-gray-700">📝  This is your digital canvas. Paint it with ideas, dreams, or lists.</p>
          <p className="text-xl mt-10 ml-10 text-gray-700">📝  Never lose a thought: Sync your notes across devices. Access them anytime, anywhere.</p>
          <p className="text-xl mt-10 ml-10 text-gray-700">📝  Note-taking can be enjoyable! Let's make it an adventure.</p>
        </div>
        <img src={img5} className="size-96 ml-20 mr-10 mt-10 " />
      </div>
    
  )
}

export default Note
