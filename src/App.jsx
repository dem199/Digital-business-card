import React from "react"
import About from "./components/About.jsx"
import Footer from "./components/Footer.jsx"
import Info from "./components/Info.jsx"
import Interests from "./components/Interests.jsx"

function App() {
    return (
        <div className="container">
           
           
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}


export default App