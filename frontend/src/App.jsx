
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [userData, setUserData] = useState([])
  console.log("userData :", userData);


  useEffect(() => {
    async function fetchData() {
      const url = "http://localhost:3000/api/user";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("response :", response);
        const data = await response.json();
        setUserData(data)
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <div className='m-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 '>
        {userData.map((u, i) =>
          <div key={i} className='md:shadow-2xl rounded-md p-5'>
            <h1 className='bg-red-300 p-2 rounded '>Name : {u.name}</h1>
            <p>Age : {u.age}</p>
            <h4>Role : {u.role}</h4>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
