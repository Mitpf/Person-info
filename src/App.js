import PersonalCard from "./Components/PersonalCard";

function App() {
  const person = {
    name: "Pesho",
    age: 28,
    job: "Teacher",
    car: "Toyota",
    hobbie: "snowboard"
  };
  return (
    <div>
      <h1>Person info</h1>

      <PersonalCard {...person} />
    </div>
  );
}

export default App;