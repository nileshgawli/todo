import React from "react";
import "../App.css";

export default function Task({ tasks }) {
  return (
    <>
      {tasks.map((element) => (
        <div>
          <div className="w-full flex items-center  justify-between mt-8">
            <div className="flex items-center gap-4">
              <input
                className="w-4 h-4 hover:accent-accent cursor-pointer"
                type="radio"
                name="check"
              />

              <div key={element.id} className="text-light">{element.title}</div>
            </div>
            <img  className="cursor-pointer w-5" src="./edit.png" alt="" />
          </div>
          <div key={element.id} className="pl-8 text-kinda-gray">{element.description}</div>
        </div>
      ))}
    </>
  );
}