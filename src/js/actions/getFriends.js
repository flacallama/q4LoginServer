import axios from 'axios';



// export const getGiftees = (giftees) => {
//   return {
//     type: "GET_GIFTEES",
//     payload: axios.get("https://gifted-q3-project.herokuapp.com/giftees")
//   }
// }
//
export const getFriends = () => {
  console.log('getfriends action reached');
  return {
    type: "GET_FRIENDS",
    payload: axios.get(`http://localhost:1337/users`)
  }
}
