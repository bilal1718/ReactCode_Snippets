

import React, { useState } from 'react'

const App = () => {
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [isTitleTouched,setIsTitleTouched]=useState(false);

  const [isDescTouched,setIsDescTouched]=useState(false);
  const [list,setList]=useState([]);
  function handleSubmit(e){
    e.preventDefault();
    const addTask={title,description};
    setList([...list,addTask]);
    setTitle("");
    setDescription("");
    setIsDescTouched(false);
    setIsTitleTouched(false);
  }
  function handleDelete(indexId){
    const DeleteItem = list.filter((task, index) => {
      return index !== indexId;
    });
    setList(DeleteItem);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="title">Title</label>
        <input type="text" 
        value={title}
        onBlur={()=>setIsTitleTouched(true)}
         onChange={(e)=>setTitle(e.target.value)} />
        </div>
        {isTitleTouched && !title ? "Please enter correct value":""}
        <div>
        <label htmlFor="title">Description</label>
        <textarea rows="10" cols="20" type="text"
         value={description}

         onBlur={()=>setIsDescTouched(true)}
          onChange={(e)=>setDescription(e.target.value)} />
        </div>
        {isDescTouched && !description ? "Please enter correct value":""}
        <button type='submit'>Submit</button>
      </form>

      <div>
        <h1>Lists</h1>
        <ul>
        {list.map((task,index)=>(
          <div>
          <h3>Task {index + 1}</h3>
          <li key={index}>{task.title} : {task.description}</li>
          <button onClick={()=>handleDelete(index)}>Delete</button>
          </div>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default App;
