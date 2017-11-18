import axios from 'axios';



// export const getEvents = () => {
//   // console.log('getEvents action reached');
//   return {
//     type: "GET_EVENTS",
//     payload: axios.get(`http://localhost:1337/events`)
//   }
// }

export const gedates = (eventId) => {
  console.log("gedates action, myId: ", eventId)
  return {
    type: "GET_DATE",
    payload: axios.get(`http://localhost:1337/dates/$datesId}`)
  }
}


export const putDate = date, dates) => {
  console.log('putdates action reached', date, invitees);
  return {
    type: "PUT_DATES",
    payload: axios.put(`http://localhost:1337/users/${userId}`,
      {
        invitees
      }


    )
  }
}
