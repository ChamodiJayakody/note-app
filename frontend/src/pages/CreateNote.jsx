import { Card, Label, Textarea, TextInput } from "flowbite-react";
import React from "react";

export default function CreateNote() {
  return (
    <div className="flex items-center mx-auto">
      <Card className="  bg-teal-300  w-96 shadow-2xl">
        <div>
          <form action="">
            <div className="">
              <Label htmlFor="title">Title</Label>
              <TextInput type="text" id="title" />
            </div>
            <div className=" mt-3">
              <Label htmlFor="content">Content</Label>
              <Textarea type="text" id="content" />
            </div>
            
          </form>
        </div>
      </Card>
    </div>
  );
}
