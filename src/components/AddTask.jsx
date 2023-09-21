import * as React from "react";
import axios from 'axios';
import '../App.css'


function AddTask() {
  const [text, setText] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('https://todo-555sakfi8-kolwankar-siddhiraj.vercel.app/api/task/add',
    {
      title: text,
      description: 'this is description',
      due_date: '27-07-2023'
    })
    .then((res) => {
      console.log('Posting data', res);
      setText('')
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <img
        className="absolute top-2 left-3 h-6" src="./todo.png" alt="" />
        <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        className="w-full rounded-sm bg-[#2c313692] outline-2 outline-[#30353b] outline py-2 px-12 text-light tracking-wide placeholder:text-kinda-gray placeholder:text-sm placeholder:font-semibold" type="text" placeholder="Add a task..."/>
      </div>
    </form>
    </>
  );
}

export default AddTask;
