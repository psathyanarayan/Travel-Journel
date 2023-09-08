import React from "react"
import Navbar from "./components/Navbar.jsx"
import Card from "./components/Card.jsx"
import "/src/App.css"
import data from "/src/data.js"
export default function App() {

  const travelData = data.map(item => {
    return(
      <Card key={item.id} item={item} />
    )
  })
  return(
    <div className="App">
      <Navbar />
      {travelData}
    </div>
  )
}