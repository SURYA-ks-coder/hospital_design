import React, { Component,PureComponent } from 'react'
import './appointment.css'
import img from './img.jpg'

class Appointment extends PureComponent {
  render() {
    return (
       <div className='container'>
      <div  className='row row-color'>
          <h1 id='hedding'>Fix an Appointment</h1>
          
          
          <div className='col align'>
          <form action="" >
               <input type="text" placeholder='Name'  className='form-control'/>
                <input type="text" placeholder='Phone Number'  className='form-control'/>
                <select name="Ourservice" className='form-select'>
                    <option selected className='option'>Choose the Service</option>
                    <option value="1" className='option'>Fertility</option>
                    <option value="2" className='option'>Nephrology</option>
                    <option value="3" className='option'> Criticalcare</option>
                </select>
                <select name="Doctor" className='form-select'>
                    <option selected>Choose the Doctor</option>
                    <option value="1">Ananth</option>
                    <option value="2">Sundhar</option>
                    <option value="3">Sudha</option>
                </select>
                <textarea name="" id="" cols="30" rows="10" className='form-control'></textarea>
          </form>
          </div>
          <div className='col float-end'>
            <img src={img} alt="doctor"  class="img" />
          </div>
          
      </div>
      </div>
    )
  }
}

export default Appointment