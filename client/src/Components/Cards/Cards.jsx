
<<<<<<< HEAD
import Card from "../Card/Card";
import React from 'react';
import './Cards.css';



function Cards({cars,ttFilt}) {
	return (	
		<div>
			<h1 className="tittleCar">Cars ({ttFilt})</h1>
			<div className="cards">	
				{cars.length > 0 ?
				cars.map((car) => (<Card car={car} />))
				: <h3>Sin Cars...</h3>
				}
			</div>	
		</div>	
	  );
=======
function Cards({ cars, ttFilt }) {
  return (
    <div>
      <h1 className="tittleCar">Cars ({ttFilt})</h1>
      <div className="cards">
        {cars.length > 0 ? (
          cars.map((car) => <Card car={car} />)
        ) : (
          <div className="loading">
            <img src={loading} alt="loading" />
          </div>
        )}
      </div>
    </div>
  );
>>>>>>> 07743a4fdb39d7e9a5758f3bcb8eb0cfa3afb5fd
}

export default Cards;




  