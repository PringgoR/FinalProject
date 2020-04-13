let defaultState = {
    makeId: null
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === "CHANGE_DATA") {
        return {
            ...state,
            makeId: action.makeId
        }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer;


// Trial below according to class work
// const appState = {
    
//     carData: {
//         loading: false,
//         data: []
//     },
    
//     selectedProfile: {
//         loading: false,
//         data: {},
//         urlDetail: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
//     }
// }

// const app = (state = {...appState}, action) => {
//     switch(action.type) {
//         case 'FETCH_DATA' :
//             return {
//                 ...state,
//                 carData: {
//                     ...state.carData,
//                     loading: true
//                 }
//             }
//         case 'FETCH_DATA_SUCCESS' :
//             return {
//                 ...state,
//                 carData: {
//                     ...state.carData,
//                     data: action.payload,
//                     loading: false
//                 }
//             }
//         case 'FETCH_DATA_FAILED' :
//             return {
//                 ...state,
//                 carData: {
//                     ...state.carData,
//                     loading: false
//                 }
//             }
//         case 'FETCH_DATA_DETAIL' :
//             return {
//                 ...state,
//                 selectedProfile: {
//                     ...state.selectedProfile,
//                     loading: true
//                 }
//             }
//         case 'FETCH_DATA_DETAIL_SUCCESS' :
//             return {
//                 ...state,
//                 selectedProfile: {
//                     ...state.selectedProfile,
//                     loading: false,
//                     data: action.payload
//                     }
//                 }
//         case 'FETCH_DATA_DETAIL_FAILED' :
//             return {
//                 ...state,
//                 selectedProfile: {
//                     ...state.selectedProfile,
//                     loading: false
//                 }
//             }
//         default:
//             return state
//     }
// }

// export default app