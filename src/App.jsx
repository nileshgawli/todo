import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import axios from 'axios';

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("https://todo-555sakfi8-kolwankar-siddhiraj.vercel.app/api/task/get/all?page=1")
    .then((res)=> {
      setTasks(res.data.data);
    })
    .catch((err)=> {
      console.log(err);
    })
  }, []);

  return (
    <>
      <div className="h-screen bg-accent">
        <div className="h-screen bg-dark">
          <Navbar />
          <Timeline />
          <div className="w-full flex justify-center">
            <div className="w-[80%]">
              <AddTask />
              <Tasks tasks = {tasks}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
