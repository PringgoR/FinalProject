import axios from 'axios';

export function loadData() {
    return(dispatch) => {
        return axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json").then((response) => {
                dispatch(changeData("MakeID: " + response.data.MakeId));
            })
    }
}

export function changeData(make) {
    return {
        type: "CHANGE_DATA",
        make: make
    }
}

// Trial below from class notes leads to Invalid Hook Call
// export const fetchData = () => ({
//     type: 'FETCH_DATA'
// })

// export const fetchDataAction = () => {
//     return (dispatch) => {
//         dispatch(fetchData())
//         axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
//         .then(res => {
//             dispatch({
//                 type: 'FETCH_DATA_SUCCESS',
//                 payload: res.data.results
//             })
//         })
//         .catch(err => {
//             dispatch({
//                 type: 'FETCH_DATA_FAILED'
//             })
//             throw err
//         })
//     }
// }

// export const fetchProfileData = (MakeId) => {
//     return dispatch => {
//         dispatch({
//             type: 'FETCH_DATA_DETAIL'
//         })
//         axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/${MakeId}`)
//         .then(res => {
//             dispatch({
//                 type: 'FETCH_DATA_DETAIL_SUCCESS',
//                 payload: res.data
//             })
//         })
//         .catch(err => {
//             dispatch({
//                 type: 'FETCH_DATA_DETAIL_FAILED'
//             })
//             throw err
//         })
//     }
// }