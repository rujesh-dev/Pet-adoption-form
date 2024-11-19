import { useState } from 'react'
import './form.css'

let petData  = {
   pteName : "",
   peType: "",
   petBreed: ""
}

export default function Form () {

   let [petArray, setPetArray] = useState([]);

  

   function handleChange (event) {
      let petData  = {
         pteName : event.target,
         peType: event.target,
         petBreed: event.target,
      }

      setPetArray()
     petArray.push(petData);
     console.log(petArray);
     

   }
    
    
    return (
       <>
       <form action="">
         <label htmlFor="">Pet Name</label>
         <input type="text" onChange={handleChange} value={petData.pteName}/>

         <label htmlFor="">Pet Type</label>
         <input type="text" onChange={handleChange} value={petData.petType}/>

         <label htmlFor="">Pet Breed</label>
         <input type="text" onChange={handleChange} value={petData.petBreed}/>
       </form>
       </>
          )
}