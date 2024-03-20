import React from "react"
import Card from "./Card"
import Nav from "./Nav"
import data from "./data"

const cards = data.map(item => {
    return (<Card 
        key= {item.id}
        item={item}
    />    
    )
})

export default function App() {
    return (
        <div>
        <Nav />
        {cards}
        </div>
    )  
}