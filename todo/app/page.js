"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);


  // on submission of the form values(state) of both the input will be updated
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);

    setTitle(""); // will set the input box empty after the click on add to ask btn
    setDesc("");

    console.log(mainTask);
  };


  // setting function for delete button
  const deleteHandler = (i)=> {
let copyTask = [...mainTask]
const removed = copyTask.splice(i, 1)
console.log(removed);

setMainTask(copyTask)
  }

  let renderTask = <h2>No task available</h2>;
  // adding task on UI
  if (mainTask.length > 0) {
    renderTask = mainTask.map((target, index) => {
      return (
        <li key={index} 
        className="flex items-center justify-between mb-5">
          <div className="flex justify-between mb-5 w-2/3">
            <h5 className="text-xl font-semibold">{target.title}</h5>
            <h6 className="text-xl font-semibold">{target.desc}</h6>
          </div>
{/*  for deleting */}
          <button onClick={()=>{
            deleteHandler(index)
          }} 
          className="bg-red-400 text-white px-4 py-2 rounded">
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white text-4xl font-bold p-5 text-center">
        ToDo List
      </h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter title"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter description"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <button className="bg-black text-white text-2xl px-4 py-2 rounded bold m-5">
          Add task
        </button>
      </form>

      <hr />

      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
