import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phonebookService from "./services/phonebookService";

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
    
    phonebookService.add(personObject).then((response) => {
      console.log("response: ", response);
      setPersons(persons.concat(response));
      setNewName("");
    setNewNumber("");
    setNewFilter("");
    });
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
    phonebookService.getAll().then((response) => {
      console.log("response: ", response);
    setPersons(response);
    
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
