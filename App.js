import React from "react"
import Navbar from "./Navbar"
import Card from "./Card"
import data from "./data"
console.log(data)

export default function App(){
        // <Navbar/>
 const dataElements = data.map(item =>{
     
 return(    
     <Card
     img={item.imageUrl}
     title={item.title}
     location={item.location}
     description={item.description}
     start={item.startDate}
     end= {item.endDate}
     map={item.googleMapsUrl}
    />
 )
 })
 
 return(
        
        <div>
        <Navbar/>
        <section>
        {dataElements}
        </section>
        </div>
        
        
    
    )
 
}   
    
      
          
         
       
        
    
       
    
    
    
