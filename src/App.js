import "./styles.css"
import "./components/Header"
import Main from "./components/Main"
import Header from "./components/Header"
import React, { useEffect } from "react"

function App() {
  const [dogs, setDogs] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000")
  })

  return (
    <>
      {/* <head>
        <title>JS</title>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="style.css" />
        <script type="text/javascript" src="src/data.js"></script>
        <script defer src="src/index.js"></script>
      </head> */}
      <body>
        <Header />
        <Main />
      </body>
    </>
  )
}

export default App
