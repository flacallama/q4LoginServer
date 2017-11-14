// import axios from 'axios';
//
// export const example = () => {
//   return {
//     type: "TEST",
//     payload: 3
//   }
// }

// export const getGiftees = (giftees) => {
//   return {
//     type: "GET_GIFTEES",
//     payload: axios.get("https://gifted-q3-project.herokuapp.com/giftees")
//   }
// }
//
// export const addGiftee = (first, last, relationship, email, age) => {
//   console.log('action reached', first, last, relationship, email, age);
//   return {
//     type: "ADD_GIFTEE",
//     payload: axios.post("https://gifted-q3-project.herokuapp.com/giftees",
//       {
//         creator_id: 1,
//         first_name: first,
//         last_name: last,
//         relationship: relationship,
//         email: email,
//         age: age
//       }
//     )
//   }
// }
