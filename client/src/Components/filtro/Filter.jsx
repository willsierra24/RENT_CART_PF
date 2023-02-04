import React, { useState } from 'react';
import './Filter.css';
// Con archivo de excluidos
export function Filter({cars}) {  
	const [filter, setFilter] = useState(1);

	const filterCar = cars, brand =[],brandTT =[], discount =[],discountTT =[], category =[],categoryTT =[], typeOfBox =[],typeOfBoxTT =[], fuelType =[],fuelTypeTT =[], doors =[],doorsTT =[];
	function fnFilter(event) {
		event.preventDefault();
		setFilter(event.target.id);
	}


	filterCar.map((car) => {

		!doors.includes(car.doors)? (
			doors.push (car.doors),
			doorsTT.push (1)
		) : doorsTT[doors.indexOf(car.doors)] = doorsTT[doors.indexOf(car.doors)]+1;

		!fuelType.includes(car.fuelType)? (
			fuelType.push (car.fuelType),
			fuelTypeTT.push (1)
		) : fuelTypeTT[fuelType.indexOf(car.fuelType)] = fuelTypeTT[fuelType.indexOf(car.fuelType)]+1;

		!brand.includes(car.brand)? (
			brand.push (car.brand),
		 	brandTT.push (1)
		) : brandTT[brand.indexOf(car.brand)] = brandTT[brand.indexOf(car.brand)]+1;
		
		!typeOfBox.includes(car.typeOfBox)? (
			typeOfBox.push (car.typeOfBox),
			typeOfBoxTT.push (1)
		) : typeOfBoxTT[typeOfBox.indexOf(car.typeOfBox)] = typeOfBoxTT[typeOfBox.indexOf(car.typeOfBox)]+1;		

		!discount.includes(car.discount)? (
			discount.push (car.discount),
			discountTT.push (1)
		) : discountTT[discount.indexOf(car.discount)] = discountTT[discount.indexOf(car.discount)]+1;

		!category.includes(car.category)? (
			category.push (car.category),
			categoryTT.push (1)
		) : categoryTT[category.indexOf(car.category)] = categoryTT[category.indexOf(car.category)]+1;
	});

	function selectfilter (e, data){
		e.preventDefault();
		
	}

	return (
		<>
        <div>Filtered out</div>
		<div className='filt'>
			<div className='filtT' >
				<div id='1' className='item' onClick={(event)=>{fnFilter(event)}}> - By brand </div>
				{filter === "1"? 
                    <><div className='item2'>
						{
							brand.map((obj,ind) => (
								<div className='filtercard' onClick={(e) => selectfilter (e, data)}>
									<div><img className='filtimg' src="https://content.r9cdn.net/rimg/carimages/generic/02_economy_red.png?height=116" alt={"No"} /></div>
									<div>{obj} ({brandTT[ind]})</div>	
								</div>					
							))
						}				
					</div><br /><br /></>:<></>
				}				
				<div id='2' className='item' onClick={(event)=>{fnFilter(event)}}> - By category </div>
				{filter === "2"? 
                    <><div className='item2'>
						{
							category.map((obj,ind) => (
								<div className='filtercard'>
									<div>{
									obj==="Minivan"?<img className='filtimg' src="https://uploads-ssl.webflow.com/62167102782a877db7cb5371/62546cf9d7ddcec5d6f946f3_RENAULT%20TRAFIC%202_Mesa%20de%20trabajo%201%20copia.png" alt={"No"} />:
									obj==="Sedan"?<img className='filtimg' src="https://uploads-ssl.webflow.com/62167102782a877db7cb5371/622808c38475207b9f022e58_vc-volkswagen-voyage-auto.png" alt={"No"} />:
									obj==="Pick-Up"?<img className='filtimg' src="https://uploads-ssl.webflow.com/62167102782a877db7cb5371/622809b5502dd28990999e40_vc-vw-amarok-auto.png" alt={"No"} />:
									obj==="SUV"?<img className='filtimg' src="https://uploads-ssl.webflow.com/62167102782a877db7cb5371/6228093dadb483c44686f14f_vc-renault-duster-auto.png" alt={"No"} />:null
									}</div>
									<div>{obj} ({categoryTT[ind]})</div>	
								</div>					
							))
						}
					</div><br /><br /></>:<></>
				}
				<div id='3' className='item' onClick={(event)=>{fnFilter(event)}}> - By transmission </div>
				{filter === "3"? 
                    <><div className='item2' >
						{
							typeOfBox.map((obj,ind) => (
								<div className='filtercard'>
									<div><img className='filtimg' src="https://content.r9cdn.net/rimg/carimages/generic/01_mini_beige.png?height=116" alt={"No"} /></div>
									<div>{obj} ({typeOfBoxTT[ind]})</div>	
								</div>					
							))
						}	
					</div><br /><br /></>:<></>
				}
				<div id='4' className='item' onClick={(event)=>{fnFilter(event)}}> - By fuel Type </div>
				{filter === "4"? 
                    <><div className='item2'>
						{
							fuelType.map((obj,ind) => (
								<div className='filtercard'>
									<div><img className='filtimg' src="https://content.r9cdn.net/rimg/carimages/generic/02_economy_red.png?height=116" alt={"No"} /></div>
									<div>{obj} ({fuelTypeTT[ind]})</div>	
								</div>					
							))
						}	
					</div><br /><br /></>:<></>
				}
				<div id='5' className='item' onClick={(event)=>{fnFilter(event)}}> - By doors </div>
				{filter === "5"? 
                    <><div className='item2'>
						{
							doors.map((obj,ind) => (
								<div className='filtercard'>
									<div><img className='filtimg' src="https://content.r9cdn.net/rimg/carimages/generic/02_economy_red.png?height=116" alt={"No"} /></div>
									<div>{obj} doors ({doorsTT[ind]})</div>	
								</div>					
							))
						}		
					</div><br /><br /></>:<></>
				}
				<div id='6' className='item' onClick={(event)=>{fnFilter(event)}}> - By discount </div>
				{filter === "6"? 
                    <><div className='item2'>
						{
							discount.map((obj,ind) => (
								<div className='filtercard'>
									<div><img className='filtimg' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQWjjlMTibcTWRyZBCpc-4a-Q87TzZ4-f4n3UXvXAh6TLq5Bgi_" alt={"No"} /></div>
									<div>DIS {obj}% ({discountTT[ind]})</div>	
								</div>					
							))
						}		
					</div></>:<></>
				}
				<div></div>
			</div>
		</div>
		</>
	);
}



