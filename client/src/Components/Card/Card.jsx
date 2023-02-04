import React from 'react'
import './card.css';
import {Link} from 'react-router-dom';

const Card = ({car}) => {
  return (
    
		<div className='cardd'>
      <div></div>
      <div>
        <div className='start'>★★★☆☆</div>
        <img className='img' src={car.image} alt={"No"} />
      </div>
  
      <div className='texts'>		      
        <div className='text1'>{car.brand}-{car.line}</div>
        <div className='text2'>Category: {car.category} </div>	
        <div className='text2'>Transmision: {car.typeOfBox} </div>	
        <div className='text2'>doors: {car.doors}  </div>	
        <div className='text2'>Fuel Type: {car.fuelType}  </div>	
        <div className='text3'>US$ {car.preci}</div>	
      </div>

      <div className='cardPart3'>
        <div></div>
        <div className='Desc'>discount</div>
        <div className='DescVal'>{car.discount}%</div>
        <div></div>
        <Link to={`/detail/${car.licensePlate}`} state={car} className = 'link'>
        <button> Details </button>
        </Link>	
        <div></div>
      </div>
      <div>
      <div className='heart'>♡</div>
      </div>
		</div>
  )
}

export default Card