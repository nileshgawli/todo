import * as React from "react";
import '../App.css'


function Navbar() {

  return (
    <>
      <div className="flex justify-center items-center gap-6 w-full h-14 border-b-2 border-b-[rgba(51,55,62,1)]">
        <button className="font-bold tracking-wider text-sm text-kinda-gray px-3 py-1 focus:text-light focus:border-b-4 focus:border-b-[#E55C8A]">Day</button>
        <button className="font-bold tracking-wider text-sm text-kinda-gray px-3 py-1 focus:text-light focus:border-b-4 focus:border-b-[#E55C8A]">Week</button>
        <button className="font-bold tracking-wider text-sm text-kinda-gray px-3 py-1 focus:text-light focus:border-b-4 focus:border-b-[#E55C8A]">Month</button>
        <button className="font-bold tracking-wider text-sm text-kinda-gray px-3 py-1 focus:text-light focus:border-b-4 focus:border-b-[#E55C8A]">Year</button>
      </div>
    </>
  );
}

export default Navbar;
