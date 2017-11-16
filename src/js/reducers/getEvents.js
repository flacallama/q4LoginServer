// const initialState = {
//   user: null,
//   friend: null
// }

export default (state = [], action) => {
  console.log("reducer: getEvents");
  switch (action.type){
    case "GET_EVENTS_PENDING":
      return state;
    case "GET_EVENTS_FULFILLED":
      return [...action.payload.data]
    case "GET_EVENT_PENDING":
      return state;
    case "GET_EVENT_FULFILLED":
      return [action.payload.data]
    default:
      return state;
  }
}
