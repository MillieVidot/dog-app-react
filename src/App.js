import "./styles.css"
import "./components/Header"
import DogSectionPage from "./pages/DogSectionPage"
import DogCardPage from "./pages/DogCardPage"
import Header from "./components/Header"
import FormPage from "./pages/FormPage"
import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"

function App() {
  const [dogs, setDogs] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/dogs")
      .then(resp => resp.json())
      .then(setDogs)
  }, [])

  function addDog(newDogData) {
    fetch("http://localhost:4000/dogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDogData),
    })
      .then(resp => resp.json())
      .then(dog => {
        setDogs([...dogs, dog])
      })

    console.log("newdogdataApp:", newDogData)
  }

  return (
    <>
      <Header dogs={dogs} />
      <main className="main">
        <Switch>
          <Route path="/" exact>
            <DogSectionPage />
          </Route>
          <Route path="/dogcards/:id" exact>
            <DogCardPage />
          </Route>
          <Route path="/form" exact>
            <FormPage addDog={addDog} />
          </Route>
        </Switch>
      </main>
    </>
  )
}

export default App
