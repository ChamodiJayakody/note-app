import { Button, Card, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import React from "react";
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreateNote() {
  const [value, setValue] = useState('');
  return (
    <div className="flex mt-10 mx-auto w-full min-w-screen">
      <div className="  bg-teal-300  shadow-2xl rounded-3xl p-5 mx-5 md:10 lg:mx-40 w-full h-80">
        <div >
          <form  >
            <div className="">
              <Label htmlFor="title">Title</Label>
              <TextInput type="text" id="title" className="" />
            </div>
            <div className=" mt-3">
              <Label htmlFor="content">Content</Label>
              
              <ReactQuill theme="snow" value={value} onChange={setValue} id="content" className="bg-white" />
            </div>
            <Button className="bg-red-500 mt-5">Submit</Button>
          </form>
        </div>
      </div>
      
      
    </div>
  );
}
