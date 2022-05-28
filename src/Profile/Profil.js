import React from 'react'
import pic from '../../src/photos/dhia.jpg'

const Profil= ({fullName, Profession, bio, photo}) =>{
  return (
    <div>

      <span>fullName{fullName}:<h2>Dhia Bachtouli</h2></span><br/>
      <span>Profession{Profession}:<h2>i'm FullStack developer</h2></span><br/>
      <span>Bio{bio}:<h2>checkpoint props</h2></span><br/>
      <span>Photo{photo}:</span>
      <img className='photo' src={pic} alt='photo' />
      
    </div>
    
  )
} 

export default Profil;
   