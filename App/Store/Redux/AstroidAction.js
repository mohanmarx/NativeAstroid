import Axois, { API_KEY } from '../../Config/Axios'
import * as types from '../Actions/constants'

export const SearchAstroid = (type, id) => (dispatch) => {
  switch (type) {
    case "search":
      dispatch({ type: types.REQUEST_ASTROID, value: true })

      Axois.get(`${id}?api_key=${API_KEY}`)
        .then(res => {
          dispatch({ type: types.SET_ASTROID, payload: res.data })
        })
        .catch(err => {
          alert('Something Went Wrong')
        })

      break;
    case "random":
      Axois.get(`browse?api_key=${API_KEY}`)
        .then(res => {
          dispatch({ type: types.REQUEST_ASTROID, value: true })
          const randomAstroidId = res.data.near_earth_objects[Math.floor(Math.random() * res.data.near_earth_objects.length)].id
          Axois.get(`${randomAstroidId}?api_key=${API_KEY}`)
            .then(res => {
              dispatch({ type: types.SET_ASTROID, payload: res.data })
            })
        })
        .catch(err => {
          console.log(err)
        })

      break;
    case "clear":
      dispatch({ type: types.RESET })
      break;
  }
}
