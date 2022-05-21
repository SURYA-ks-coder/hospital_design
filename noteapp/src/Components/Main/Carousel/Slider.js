import React from 'react'
import slide1 from './slide 1.jpg'
import slide2 from './slide 2.jpg'
import slide3 from './slide 3.jpg'
import './slider.css'

function Slider() {
  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slide1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Doctor</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Accusamus assumenda corrupti similique asperiores nulla aperiam non ad autem laudantium at facere illo pariatur commodi, 
           necessitatibus cum sit laboriosam officia quam?.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={slide2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Nurse</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Accusamus assumenda corrupti similique asperiores nulla aperiam non ad autem laudantium at facere illo pariatur commodi, 
           necessitatibus cum sit laboriosam officia quam?.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={slide3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Patient</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Accusamus assumenda corrupti similique asperiores nulla aperiam non ad autem laudantium at facere illo pariatur commodi, 
           necessitatibus cum sit laboriosam officia quam?.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider