import React, { useEffect } from "react";
import {Link} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import "./LandingPage.css"

import {Cars} from '../../redux/action/index'

export default function LandingPage() {

  const dispatch = useDispatch();
  useEffect(() => { dispatch(Cars());}, [dispatch]);

  return (
    <div className="information">
      <div class="container">
			<h1 className="titulo">RENT A CAR FROM $20/DAY</h1>
            <Link to ='/home'>

      <button className="button">Rent a car</button>
            </Link>
</div>
		</div>
  )
}
// comment