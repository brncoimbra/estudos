import "./App.css";

const users = [
  {
    name: "Carlos",
    address: "Rua X",
    age: 28,
    isAdmin: false,
  },
  {
    name: "Maria",
    address: "Rua XX",
    age: 31,
    isAdmin: true,
  },
  {
    name: "Matheus",
    address: "Rua XI",
    age: 22,
    isAdmin: false,
  },
];

function App() {
  return (
    <div className="App">
      <div>
        {users.map((user, index) => (
          //index it's not recommended, create id and use is more appropriate
          <div key={index}>
            {user.name}, {user.age} anos, {user.address}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
