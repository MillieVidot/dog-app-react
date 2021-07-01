import DogListItem from "./DogListItem"
import { Link } from "react-router-dom"

export default function DogsList({ dogs }) {
  return (
    <ul className="dogs-list">
      <li className="dogs-list__button dogs-list__button--add">
        <Link to={`/form`}>+</Link>
      </li>
      {dogs.map(dog => (
        <DogListItem key={dog.id} id={dog.id} name={dog.name} />
      ))}
    </ul>
  )
}
