export default (state = [], action) => {
  switch (action.type){
    // case "GET_EVENTS_PENDING":
    //   return state;
    // case "GET_EVENTS_FULFILLED":
    //   return [...action.payload.data]
    case "GET_EVENT_PENDING":
      return state;
    case "GET_EVENT_FULFILLED":
    // console.log('reducer: getEvent fulfilled', action.payload.data);
      return action.payload.data
    case "PUT_EVENT_PENDING":
        return state;
    case "PUT_EVENT_FULFILLED":
    console.log("reducer: getEvents - PUT");
        return [action.payload.data];
    case "CREATE_EVENT_PENDING":
      return state;
    case "CREATE_EVENT_FULFILLED":
    console.log('reducer create event', action.payload.data);
      return action.payload.data
    default:
      return state;
  }
}
