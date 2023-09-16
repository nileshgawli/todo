import * as React from "react";
import "../App.css";

function Task() {
  return (
    <>

      <div className="w-full flex items-center  justify-between mt-8">
        <div className="flex items-center gap-4">
        <input
          className="w-4 h-4 hover:accent-accent cursor-pointer"
          type="radio"
          name="check"
        />

        <div className="text-light">Getting an invite for dribble</div>
        </div>
        <img className="cursor-pointer w-5" src="./edit.png" alt="" />
      </div>
      {/* Description */}
      <div className="pl-8 text-kinda-gray">one of my goals in 2022</div>

    </>
  );
}

export default Task;
