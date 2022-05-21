import React from 'react'
import img1 from "./slide1.jpg"
import img2 from "./slide2.jpg"
import img3 from "./slide3.jpg"
import img4 from './card4.jpg'
import './card.css'

function Cards() {

  const array=[{img:img1,Title:"Doctor"},
                {img:img2,Title:"patient"},
                {img:img3,Title:"Staf"},
                {img:img4,Title:'Op_Patient'}]

  
     
      
  return (
  <>
    <div className='container'>
      <h1 className='title'>Our Service</h1>
    <div className='main-card'>
      <div class="row  row-cols  ">
       { array.map((value)=>(
    
   <div class="col">
    <div class="card  ">
      <img src={value.img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{value.Title}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      
    </div>
  </div>
  
    
  ))}
  </div>
     
    </div>
    </div>
    <div className='text-center'>
    <button type='submit' className='btn '>View All Service</button>

    </div>
  </>
  )
}

export default Cards