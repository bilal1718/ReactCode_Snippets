
import "./index.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [filteredData,setFilteredData]=useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data)=> {
        setData(data);
      setFilteredData(data)
      })
  }, []);

const Filter=(e)=>{
  setFilteredData(data.filter(d=>d.name.toLowerCase().includes(e.target.value)))

}
  return (
    <main>
      <div>
        <input type="text" placeholder="Search" onChange={Filter} />
        <table className="list">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
          </thead>
          {filteredData.length > 0 ? filteredData.map((d) => (
            <tr key={d.id}>
             <td> {d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.website}</td>
            </tr>
          )):<tr>
          <td colSpan="4">No data available</td>
        </tr>}

        </table>
      </div>
    </main>
  );
}
