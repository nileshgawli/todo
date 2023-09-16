import * as React from "react";
import '../App.css'


function AddTask() {

  return (
    <>
      <div className="relative">
        <img className="absolute top-2 left-3 h-6" src="./todo.png" alt="" />
        <input className="w-full rounded-sm bg-[#2c313692] outline-2 outline-[#30353b] outline py-2 px-12 text-light tracking-wide placeholder:text-kinda-gray placeholder:text-sm placeholder:font-semibold" type="text" placeholder="Add a task..."/>
      </div>
    </>
  );
}

export default AddTask;
