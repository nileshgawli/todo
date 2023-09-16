import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <div className="h-screen bg-accent">
        <div className="h-screen bg-dark">
          <Navbar />
          <Timeline />
          <div className="w-full flex justify-center">
            <div className="w-[80%]">
              <AddTask />
              <Tasks/>
              <Tasks/>
              <Tasks/>
              <Tasks/>
              <Tasks/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
