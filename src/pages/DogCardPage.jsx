import DogCard from "../components/DogCard"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function DogCardPage() {
  const { id } = useParams()

  const [dog, setDog] = useState([null])

  useEffect(() => {
    fetch(`http://localhost:4000/dogs/${id}`)
      .then(resp => resp.json())
      .then(setDog)
  }, [id])

  if (!dog) return <h1>LOADING...</h1>

  return (
    <section className="main__dog-section">
      <DogCard dog={dog} />
    </section>
  )
}
