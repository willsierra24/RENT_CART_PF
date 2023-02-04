
import Card from "../Card/Card";
import React from 'react';
import './Cards.css';



function Cards({cars}) {
	return (	
		<div>
			<h1 className="tittleCar">Cars</h1>
			<div className="cards">	
				{cars.length > 0 ?
				cars.map((car) => (<Card car={car} />))
				: <h3>Sin Cars...</h3>
				}
			</div>	
		</div>	
	  );
}

export default Cards;




  