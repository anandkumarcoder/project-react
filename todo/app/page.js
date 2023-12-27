"use client"
import React, { useState } from 'react'




const page = () => {

  const [title, setTitle] = useState("")
const [desc, setDesc] = useState("")

const submitHandler = (e) =>{
 e.preventDefault()
console.log(title);
console.log(desc);

setTitle("")
setDesc("")
}

  return (
  <>
  <h1 className='bg-black text-white text-4xl font-bold p-5 text-center'>ToDo List</h1>

<form onSubmit={submitHandler}>
<input type="text" placeholder='Enter title' 
  className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' 
  value={title}
  onChange={(e) =>{
    setTitle(e.target.value);
  }}
  />

<input type="text" placeholder='Enter description' 
  className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
  value={desc}
  onChange={(e) =>{
    setDesc(e.target.value);
  }}
  />

  <button className='bg-black text-white text-2xl px-4 py-2 rounded bold m-5'>Add task</button>

</form>
  </>
  )
}

export default page