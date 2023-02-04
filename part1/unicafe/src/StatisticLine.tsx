type Props = {
    text: string;
    value: number;
}
const StatisticLine = ({text, value}: Props) => {
  return (
    <td>{text}:{value}</td>
  )
}
export default StatisticLine