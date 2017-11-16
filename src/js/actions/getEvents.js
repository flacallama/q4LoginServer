import axios from 'axios';



export const getEvents = () => {
  console.log('getEvents action reached');
  return {
    type: "GET_EVENTS",
    payload: axios.get(`http://localhost:1337/events`)
  }
}

// export const getFriend = (myId) => {
//   // console.log("getfriend action, myId: ", myId)
//   return {
//     type: "GET_FRIEND",
//     payload: axios.get(`http://localhost:1337/users/${myId}`)
//   }
// }
