import DogListItem from "./DogListItem"

export default function DogsList() {
  return (
    <ul className="dogs-list">
      <li className="dogs-list__button dogs-list__button--add">+</li>
      <DogListItem />
    </ul>
  )
}
