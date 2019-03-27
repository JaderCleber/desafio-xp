import { createStore } from "redux";
import rootReducer from "../reducers/index";
const store = createStore(rootReducer);
export default store;

// let init = {}
// function reducer (state = init, action) {
//   switch (action.type) {
//     case 'ACTION':
//       return {
//         ...state,
//         ...action.payload,
//       }
//   }
//   return state
// }
// function update (payload) {
//   return {
//     type: 'ACTION', 
//     payload,
//   }
// }
// let store = createStore(reducer)
// export { store, update }