import axios from 'axios';



// export const getGiftees = (giftees) => {
//   return {
//     type: "GET_GIFTEES",
//     payload: axios.get("https://gifted-q3-project.herokuapp.com/giftees")
//   }
// }
//
export const getFriends = () => {
  // console.log('getfriends action reached');
  return {
    type: "GET_FRIENDS",
    payload: axios.get(`http://localhost:1337/users`)
  }
}

export const getFriend = (myId) => {
  console.log("getfriend action, myId: ", myId)
  return {
    type: "GET_FRIEND",
    payload: axios.get(`http://localhost:1337/users/${myId}`)
  }
}

export const putDate = (dateFreeArr, userId) => {
  // console.log('putDate action: date, dateArr',  dateFreeArr, userId);
  return {
    type: "PUT_DATE",
    payload: axios.put(`http://localhost:1337/users/${userId}`,
      {
        "dateFreeArr": [...dateFreeArr]
      }
    )
  }
}
