import React from 'react'
import storiesImg from '../../assets/img/stories.png'
import Profiles from '../../assets/img/profiles.png'
import './Stories.css'

function Stories() {
  return (
    <div>
      <section className='header'>
        <img src={storiesImg} className='stories-image' alt="this is a picture" />
        <div className='container-stories-two'>
          <img src={Profiles} alt="this is a picture" />
          <h3 style={{ color: "#fff" }}>codefive</h3> <h3 style={{ color: "#FFFFFFBF", }}>3h</h3>
        </div>
        <div className='footers'>
          <input type="text" className='envia' placeholder='Envia uma mensagem' />
          <div className='like-send'>
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-paper-plane"></i>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stories