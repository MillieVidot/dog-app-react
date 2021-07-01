import DogsList from "./DogsList"

export default function Header({ dogs }) {
  return (
    <header className="header">
      <h1>The Show Off Dog Owner's App</h1>
      <DogsList dogs={dogs} />
    </header>
  )
}
