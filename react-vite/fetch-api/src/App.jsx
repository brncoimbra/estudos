import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  //method POST
  useEffect(() => {
    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Bruno",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });

  //method GET
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id} style={{ listStyle: "none" }}>
              <p>
                Nome: {user.first_name} {user.last_name}
              </p>
              <p>e-mail: {user.email}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
