return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Add your task" />
        <div>
          <button onClick={submit}>Submit</button>
        </div>
      </div>
      <ul>
      <ul>
  {tasks.map((task, index) => (
    <li key={index}>
      <span>{task}</span>
      <button onClick={()=>deleteTask(index)}>Delete</button>
    </li>
  ))}
</ul>
        
      </ul>
    </div>
  );
}
