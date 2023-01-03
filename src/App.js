
import React from "react"
import Card from "./Components/Card.js"
import Data from "./data.js"
import Head from "./Components/Head"

export default function App(){
    
     const cards = Data.map(item => {
      return( 
        <Card 
            key={item.id}
            item={item}
        /> 
      )
    })
       
   return( 
       <div className="app--container">
        <Head />
         {cards}
       </div>
   )
}