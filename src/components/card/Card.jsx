import React from 'react';
import './card.css';

function Card({title,logo,body,tools}) {
  return (
    <div data-aos="fade-up" className='card'>
      <img className='card-img' src={logo} alt="" />
      <h5>{title}</h5>
      <p>{body}</p>
      <h6>Dev tools</h6>
      {tools.map(tool=>(
        <p key={tool}>{tool}</p>
      ))
      }

    </div>
  )
}

export default Card
