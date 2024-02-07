
import {useState} from "react"
export default function App() {
  const [tasks,setTasks]=useState([]);
  const [input,setInput]=useState('');
  function submit(e){
    e.preventDefault();
    setTasks([...tasks,input]);
    setInput('');
  }
  function deleteTask(index) {
  const updatedTasks = tasks.filter((_, i) => i !== index);
  setTasks(updatedTasks);
}
