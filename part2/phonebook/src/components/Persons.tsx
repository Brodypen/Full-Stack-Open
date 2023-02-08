type Props = {
    persons: {
        name: string
        number: string
        id: number
    }[]
    newFilter: string
    onDelete: (id: number) => void

}
const Persons = ({persons, newFilter, onDelete}: Props) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(newFilter.toLowerCase())
        )
        .map((person) => (
            <p key={person.id}>
              {`${person.name} - ${person.number} `}
              <button onClick={() => onDelete(person.id)} key={`${person.id}`}>Delete</button>
            </p>
        ))}
    </div>
  );
}
export default Persons