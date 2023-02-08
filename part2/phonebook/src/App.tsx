import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
type personProps ={
  name: string
  number: string
}
const App = () => {
    const [persons, setPersons] = useState<personProps[]>(new Array<personProps>());
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const addPerson = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (persons?.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    console.log("hey1");
    const personObject = {
      name: newName,
      number: newNumber,
    };
    console.log("hey00");
    setPersons(persons?.concat(personObject));
    setNewName("");
    setNewNumber("");
    setNewFilter("");
    console.log("hey0");
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFilter(event.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      
      setPersons(response.data);
    });
    console.log("promise fulfilled");
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}
      />
     
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <h2>Numbers</h2>
      {persons && <Persons
        persons={persons}
        newFilter={newFilter} />}
    </div>
  );
};

export default App;
