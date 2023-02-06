type Props = {
    newFilter: string
    handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Filter = ({newFilter, handleFilterChange}: Props) => {
  return (
    <div>
      filter shown with:{" "}
      <input value={newFilter} onChange={handleFilterChange} />
    </div>
  );
}
export default Filter