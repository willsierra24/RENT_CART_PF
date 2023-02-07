import { GET_ALL_CARS, GET_CAR_BY_ID } from '../actions/actions'

const initialState = {
    cars: [],
    allCars: [],
    detailCar: {},
    search: ""
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CARS:
            return {
                ...state,
                cars: action.payload,
                allCars: action.payoad
            }
        case GET_CAR_BY_ID:
            return {
                ...state,
                detailCar: action.payload
            }
        default:
            return state
    }
}

export default rootReducer