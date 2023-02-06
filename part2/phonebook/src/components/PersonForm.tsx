type Props = {
    newNumber: string
    newName: string
    addPerson: (event: React.FormEvent<HTMLFormElement>) => void
    handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const PersonForm = ({newName, handleNameChange, newNumber, handleNumberChange, addPerson}: Props) => {
  return (
    <form onSubmit={(e) => addPerson(e)}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
export default PersonForm