import { Link } from "react-router-dom"
export default function DogListItem({ id, name }) {
  return (
    <li className="dogs-list__button dogs-list__button--add">
      <Link to={`/dogcards/${id}`}>{name}</Link>
    </li>
  )
}
