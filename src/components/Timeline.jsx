import { useState } from "react";
import "../App.css";

function Timeline() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevDay = () => {
    const prevDate = new Date(currentDate);
    prevDate.setDate(prevDate.getDate() - 1);
    setCurrentDate(prevDate);
  };

  const handleNextDay = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const weekday = currentDate.toLocaleDateString(undefined, {
    weekday: "long",
  });
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  console.log(currentDate.toLocaleDateString(undefined, { weekday: "long" }));

  return (
    <>
      <div className="flex justify-center text-kinda-gray gap-10 m-14">
        <button className="text-5xl" onClick={handlePrevDay}>&lt;</button>
        <div className="flex flex-col justify-center items-center w-44">
          <div className="text-light text-4xl font-semibold">{weekday}</div>
          <div className="text-md">{formattedDate}</div>
        </div>
        <button className="text-5xl" onClick={handleNextDay}>&gt;</button>
      </div>
    </>
  );
}

export default Timeline;
